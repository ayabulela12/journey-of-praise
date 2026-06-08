import { NextResponse } from 'next/server';
import { transporter } from '../../../../lib/mailer';

export async function POST(req: Request) {
  const body = await req.json();
  const { customerDetails, selectedPlan, guests, reference, totalAmount } = body;

  if (!customerDetails || !customerDetails.email || !customerDetails.fullName) {
    return NextResponse.json(
      { success: false, error: 'Missing customer details' },
      { status: 400 }
    )
  }

  if (!selectedPlan || !selectedPlan.name) {
    return NextResponse.json(
      { success: false, error: 'Missing selected plan' },
      { status: 400 }
    )
  }

  if (!reference || !totalAmount) {
    return NextResponse.json(
      { success: false, error: 'Missing booking reference or amount' },
      { status: 400 }
    )
  }

  console.log('Booking confirmation request:', {
    customerEmail: customerDetails.email,
    customerName: customerDetails.fullName,
    selectedPlan: selectedPlan.name,
    reference,
    totalAmount,
    adminEmail: process.env.ADMIN_EMAIL,
  })

  try {
    // Email to the customer
    await transporter.sendMail({
      from: `"Journey of Praise Cruise" <${process.env.SMTP_USER}>`,
      to: customerDetails.email,
      subject: 'Your Booking is Confirmed – Journey of Praise Cruise',
      html: customerEmailHtml({ customerDetails, selectedPlan, guests, reference, totalAmount }),
    });

    // Email to the admin
    await transporter.sendMail({
      from: `"Journey of Praise Cruise" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Booking: ${customerDetails.fullName} – ${reference}`,
      html: adminEmailHtml({ customerDetails, selectedPlan, guests, reference, totalAmount }),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Email error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to send emails' },
      { status: 500 }
    );
  }
}

function customerEmailHtml({ customerDetails, selectedPlan, guests, reference, totalAmount }: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
      
      <h2 style="color: #1a3a5c;">Booking Confirmed 🎉</h2>
      
      <p>Hi ${customerDetails.fullName},</p>
      <p>
        Thank you for booking with Journey of Praise Cruise. 
        Your booking has been received. Please complete your 
        EFT payment using the banking details below.
      </p>

      <h3 style="color: #1a3a5c;">Your Booking Summary</h3>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Cabin</strong></td>
          <td>${selectedPlan.name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Guests</strong></td>
          <td>${guests.adults} adult(s)</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Dates</strong></td>
          <td>8–12 March 2027</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Reference</strong></td>
          <td><strong>${reference}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Amount Due</strong></td>
          <td><strong>R${totalAmount}</strong></td>
        </tr>
      </table>

      <h3 style="color: #1a3a5c;">Banking Details</h3>
      <table style="width:100%; border-collapse: collapse; margin-bottom: 24px;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Bank</strong></td>
          <td>Standard Bank</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Account Name</strong></td>
          <td>Journey of Praise Cruise</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Account Number</strong></td>
          <td>1234567890</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Branch Code</strong></td>
          <td>051001</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Reference</strong></td>
          <td><strong>${reference}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Amount</strong></td>
          <td><strong>R${totalAmount}</strong></td>
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
  `;
}

function adminEmailHtml({ customerDetails, selectedPlan, guests, reference, totalAmount }: any) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; color: #333;">
      
      <h2 style="color: #1a3a5c;">New Booking Received</h2>
      
      <table style="width:100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Name</strong></td>
          <td>${customerDetails.fullName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Email</strong></td>
          <td>${customerDetails.email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Phone</strong></td>
          <td>${customerDetails.phone}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Cabin</strong></td>
          <td>${selectedPlan.name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Guests</strong></td>
          <td>${guests.adults} adult(s)</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 8px 0;"><strong>Reference</strong></td>
          <td><strong>${reference}</strong></td>
        </tr>
        <tr>
          <td style="padding: 8px 0;"><strong>Amount</strong></td>
          <td><strong>R${totalAmount}</strong></td>
        </tr>
      </table>

      <p style="margin-top: 24px; color: #888; font-size: 13px;">
        Check your Standard Bank account for incoming payment with this reference.
      </p>
    </div>
  `;
}