# 🚀 Backend Setup Guide - SMS Notifications

This guide will help you set up Twilio for SMS notifications for the AutoNXT registration system.

## 📋 Prerequisites

1. **Twilio Account** - Sign up at [https://www.twilio.com](https://www.twilio.com)
2. **Node.js Dependencies** - Already included in package.json

## 🔧 Twilio Setup Steps

### Step 1: Create Twilio Account
1. Go to [https://console.twilio.com](https://console.twilio.com)
2. Sign up for a free account
3. Verify your phone number
4. You'll get $15.50 in free credits

### Step 2: Get Your Credentials
1. From the Twilio Console Dashboard, copy:
   - **Account SID** (starts with 'AC...')
   - **Auth Token** (click the eye icon to reveal)

### Step 3: Get Phone Numbers

#### For SMS:
1. Go to Phone Numbers → Manage → Buy a number
2. Choose a number with SMS capabilities
3. Note down the number (format: +1234567890)

### Step 4: Configure Environment Variables

Update your `.env.local` file with real credentials:

```env
# Replace with your actual Twilio credentials
TWILIO_ACCOUNT_SID=your_account_sid_here
TWILIO_AUTH_TOKEN=your_auth_token_here

# Replace with your actual phone number (for SMS)
TWILIO_PHONE_NUMBER=+1234567890
```

## 📱 Testing the System

### Test SMS:
1. Use any phone number for registration
2. SMS will be sent automatically
3. Check your phone for the SMS

## 🔍 Example Registration Flow

1. **User fills form:**
   - Name: John Doe
   - Email: john@example.com
   - Phone: +91 9876543210
   - Type: General Visitor

2. **System processes:**
   - Generates unique Booking ID: ANX-ABC123
   - Sends SMS.

3. **User receives message:**
   ```
   Welcome to AutoNXT, John Doe! You're all set for the event, Nov 28 - 30. 
   Your Booking ID: ANX-ABC123. Get ready for an amazing expo!
   ```

## 🚨 Troubleshooting

### Common Issues:

1. **"Authentication Error"**
   - Check your Account SID and Auth Token
   - Make sure there are no extra spaces

2. **"Invalid Phone Number"**
   - Phone numbers must include country code (+91 for India)
   - Remove any special characters except +

3. **"Insufficient Funds"**
   - SMS costs ~$0.0075 per message
   - Check your Twilio balance

### Testing Without Twilio:
If you want to test without setting up Twilio, the system will log errors but continue to show success messages in the console.

## 💰 Pricing (After Free Credits)

- **SMS:** ~$0.0075 per message  
- **Phone Number:** $1/month

## 🔄 Production Setup

For production deployment:

1. **Buy a dedicated phone number** (not sandbox)
2. **Update environment variables** on your hosting platform
3. **Monitor usage and costs** via Twilio Console

## 📞 Support

- **Twilio Docs:** [https://www.twilio.com/docs](https://www.twilio.com/docs)
- **Console:** [https://console.twilio.com](https://console.twilio.com)

---

**Ready to test?** Run `npm run dev` and try registering with your phone number!
