<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

$configPath = __DIR__ . '/config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Email service is not configured. Please contact support.',
    ]);
    exit;
}

$config = require $configPath;
$autoloadPath = __DIR__ . '/vendor/autoload.php';

if (!is_file($autoloadPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'error' => 'Email service dependencies are missing.',
    ]);
    exit;
}

require $autoloadPath;
require __DIR__ . '/email-templates.php';

use PHPMailer\PHPMailer\Exception as MailerException;
use PHPMailer\PHPMailer\PHPMailer;

function jsonError(int $status, string $message): void
{
    http_response_code($status);
    echo json_encode(['success' => false, 'error' => $message]);
    exit;
}

function createMailer(array $config): PHPMailer
{
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = (int) $config['smtp_port'];
    $mail->CharSet = PHPMailer::CHARSET_UTF8;

    return $mail;
}

$rawBody = file_get_contents('php://input');
$body = json_decode($rawBody ?: '', true);

if (!is_array($body)) {
    jsonError(400, 'Invalid request body');
}

$customerDetails = $body['customerDetails'] ?? null;
$selectedPlan = $body['selectedPlan'] ?? null;
$guests = $body['guests'] ?? null;
$reference = $body['reference'] ?? null;
$totalAmount = $body['totalAmount'] ?? null;

if (
    !is_array($customerDetails)
    || empty($customerDetails['email'])
    || empty($customerDetails['fullName'])
) {
    jsonError(400, 'Missing customer details');
}

if (!is_array($selectedPlan) || empty($selectedPlan['name'])) {
    jsonError(400, 'Missing selected plan');
}

if (!is_array($guests)) {
    jsonError(400, 'Missing guest details');
}

if (empty($reference) || $totalAmount === null || $totalAmount === '') {
    jsonError(400, 'Missing booking reference or amount');
}

if (!filter_var($customerDetails['email'], FILTER_VALIDATE_EMAIL)) {
    jsonError(400, 'Invalid customer email address');
}

try {
    $customerMail = createMailer($config);
    $customerMail->setFrom($config['smtp_user'], 'Journey of Praise Cruise');
    $customerMail->addAddress($customerDetails['email'], $customerDetails['fullName']);
    $customerMail->isHTML(true);
    $customerMail->Subject = 'Your Booking is Confirmed – Journey of Praise Cruise';
    $customerMail->Body = customerEmailHtml(
        $customerDetails,
        $selectedPlan,
        $guests,
        (string) $reference,
        $totalAmount
    );
    $customerMail->send();

    $adminMail = createMailer($config);
    $adminMail->setFrom($config['smtp_user'], 'Journey of Praise Cruise');
    $adminMail->addAddress($config['admin_email']);
    $adminMail->isHTML(true);
    $adminMail->Subject = 'New Booking: ' . $customerDetails['fullName'] . ' – ' . $reference;
    $adminMail->Body = adminEmailHtml(
        $customerDetails,
        $selectedPlan,
        $guests,
        (string) $reference,
        $totalAmount
    );
    $adminMail->send();

    echo json_encode(['success' => true]);
} catch (MailerException $exception) {
    error_log('Booking email error: ' . $exception->getMessage());
    jsonError(500, 'Failed to send emails');
}
