<?php

function escape(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function customerEmailHtml(array $customerDetails, array $selectedPlan, array $guests, string $reference, $totalAmount): string
{
    $fullName = escape($customerDetails['fullName']);
    $planName = escape($selectedPlan['name']);
    $adults = (int) ($guests['adults'] ?? 0);
    $referenceSafe = escape($reference);
    $amountSafe = escape((string) $totalAmount);

    return <<<HTML
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
      <h2 style="color: #1a3a5c;">Booking Confirmed</h2>
      <p>Hi {$fullName},</p>
      <p>
        Thank you for booking with Journey of Praise Cruise.
        Your booking has been received. Please complete your
        EFT payment using the banking details below.
      </p>
      <h3 style="color: #1a3a5c;">Your Booking Summary</h3>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Cabin</strong></td>
          <td>{$planName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Guests</strong></td>
          <td>{$adults} adult(s)</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Dates</strong></td>
          <td>8–11 March 2027</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Reference</strong></td>
          <td><strong>{$referenceSafe}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Amount Due</strong></td>
          <td><strong>R{$amountSafe}</strong></td>
        </tr>
      </table>
      <h3 style="color: #1a3a5c;">Banking Details</h3>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Bank</strong></td>
          <td>Standard Bank</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Account Type</strong></td>
          <td>GOLD BUSINESS ACCOUNT</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Account Name</strong></td>
          <td>Journey of Praise Cruise</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Account Number</strong></td>
          <td>63197397863</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Branch Name</strong></td>
          <td>ZEVENWACHT MALL</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Branch Code</strong></td>
          <td>260214</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>SWIFT Code</strong></td>
          <td>FIRNZAJJ</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Reference</strong></td>
          <td><strong>{$referenceSafe}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Amount</strong></td>
          <td><strong>R{$amountSafe}</strong></td>
        </tr>
      </table>
      <div style="background: #f9f5e7; border-left: 4px solid #c9a84c; padding: 16px; margin-bottom: 24px;">
        <strong>Important:</strong>
        <ul style="margin: 8px 0; padding-left: 20px;">
          <li>Use your reference number exactly as shown when making payment</li>
          <li>Payment processing takes 2–3 business days</li>
          <li>You will receive a payment confirmation email once we verify your payment</li>
          <li>Keep your proof of payment for your records</li>
        </ul>
      </div>
      <p style="color: #888; font-size: 13px;">
        Journey of Praise Cruise | Durban, South Africa<br/>
        info@journeyofpraise.co.za
      </p>
    </div>
    HTML;
}

function adminEmailHtml(array $customerDetails, array $selectedPlan, array $guests, string $reference, $totalAmount): string
{
    $fullName = escape($customerDetails['fullName']);
    $email = escape($customerDetails['email']);
    $phone = escape($customerDetails['phone'] ?? '');
    $planName = escape($selectedPlan['name']);
    $adults = (int) ($guests['adults'] ?? 0);
    $referenceSafe = escape($reference);
    $amountSafe = escape((string) $totalAmount);

    return <<<HTML
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
      <h2 style="color: #1a3a5c;">New Booking Received</h2>
      <table style="width:100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Name</strong></td>
          <td>{$fullName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Email</strong></td>
          <td>{$email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Phone</strong></td>
          <td>{$phone}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Cabin</strong></td>
          <td>{$planName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Guests</strong></td>
          <td>{$adults} adult(s)</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Reference</strong></td>
          <td><strong>{$referenceSafe}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Amount</strong></td>
          <td><strong>R{$amountSafe}</strong></td>
        </tr>
      </table>
      <p style="margin-top: 24px; color: #888; font-size: 13px;">
        Check your Standard Bank account for incoming payment with this reference.
      </p>
    </div>
    HTML;
}
