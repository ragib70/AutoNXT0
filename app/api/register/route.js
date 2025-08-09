import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilioWhatsAppNumber = process.env.TWILIO_WHATSAPP_NUMBER;

const client = twilio(accountSid, authToken);

// Generate a unique booking ID
function generateBookingId() {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `ANX-${timestamp}-${randomStr}`.toUpperCase();
}

// Format phone number to include country code if not present
function formatPhoneNumber(phone) {
  // Remove any non-digit characters except +
  let cleaned = phone.replace(/[^\d+]/g, '');
  
  // Add +91 (India) if no country code is present
  if (!cleaned.startsWith('+')) {
    if (cleaned.startsWith('91')) {
      cleaned = '+' + cleaned;
    } else if (cleaned.length === 10) {
      cleaned = '+91' + cleaned;
    } else {
      cleaned = '+' + cleaned;
    }
  }
  
  return cleaned;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, visitorType } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    // Generate booking ID
    const bookingId = generateBookingId();
    
    // Format phone number
    const formattedPhone = formatPhoneNumber(phone);
    
    // Create the message
    const message = `Welcome to AutoNXT, ${name}! You're all set for this Monday, Aug 11. Your Booking ID: ${bookingId}. Get ready for an amazing expo!`;

    // Try to send WhatsApp message first, fallback to SMS
    let messageResult;
    let messageType;

    try {
      // Attempt WhatsApp message
      messageResult = await client.messages.create({
        body: message,
        from: twilioWhatsAppNumber,
        to: `whatsapp:${formattedPhone}`
      });
      messageType = 'WhatsApp';
    } catch (whatsappError) {
      console.log('WhatsApp failed, trying SMS:', whatsappError.message);
      
      // Fallback to SMS
      try {
        messageResult = await client.messages.create({
          body: message,
          from: twilioPhoneNumber,
          to: formattedPhone
        });
        messageType = 'SMS';
      } catch (smsError) {
        console.error('Both WhatsApp and SMS failed:', smsError.message);
        throw new Error('Failed to send notification');
      }
    }

    // Log the registration (in production, save to database)
    const registrationData = {
      bookingId,
      name,
      email,
      phone: formattedPhone,
      visitorType,
      registrationTime: new Date().toISOString(),
      messageId: messageResult.sid,
      messageType
    };

    console.log('Registration successful:', registrationData);

    return NextResponse.json({
      success: true,
      message: 'Registration successful!',
      bookingId,
      messageType,
      data: {
        name,
        email,
        phone: formattedPhone,
        visitorType,
        bookingId,
        confirmationMessage: message
      }
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    return NextResponse.json(
      { 
        error: 'Registration failed', 
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Optional: Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'AutoNXT Registration API is running',
    endpoints: {
      POST: '/api/register - Register a new visitor',
    }
  });
}
