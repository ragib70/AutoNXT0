# AutoNXT0 - Next.js Auto Expo Website

A modern, responsive auto expo website built with Next.js, Tailwind CSS, and Lucide React icons.

## Features

- 🚗 Modern automotive expo website
- 📱 Fully responsive design
- 🎨 Sleek dark theme with gradient accents
- ✨ Smooth animations and hover effects
- 📝 Registration modal with backend integration
- 💬 **SMS notifications** for registration confirmations
- 🎥 Hero video background
- 📸 Interactive image gallery
- 📅 Event schedule timeline
- 🏢 Featured exhibitors section
- 🆔 Unique booking ID generation

## Project Structure

```
AutoNXT0/
├── app/
│   ├── api/
│   │   └── register/
│   │       └── route.js        # Registration API endpoint
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── icons/
│   │   └── index.js
│   ├── modals/
│   │   └── RegistrationModal.js # Updated with API integration
│   ├── sections/
│   │   ├── HeroSection.js
│   │   ├── ExhibitorsSection.js
│   │   ├── ScheduleSection.js
│   │   └── GallerySection.js
│   ├── Header.js
│   └── Footer.js
├── .env.local                  # Environment variables
├── package.json               # Updated with Twilio
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── TWILIO_SETUP.md           # Backend setup guide
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Twilio credentials
   # See TWILIO_SETUP.md for detailed instructions
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Test registration:**
   - Click "Register" button
   - Fill out the form with your phone number
   - Check your SMS for confirmation message

### Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **Twilio** - SMS API integration
- **Inter Font** - Google Fonts integration

## Components Overview

### Core Components
- **Header** - Navigation bar with registration CTA
- **Footer** - Site footer with social links
- **RegistrationModal** - Visitor registration form

### Sections
- **HeroSection** - Video background with event info
- **ExhibitorsSection** - Featured automotive brands
- **ScheduleSection** - 3-day event timeline
- **GallerySection** - Image gallery with hover effects

### Icons
- Custom SVG icons (Car, MapPin, Calendar, X)
- Optimized for performance and consistency

## Customization

### Colors
The site uses a blue and gray color scheme. Main colors:
- Primary Blue: `bg-blue-600`, `text-blue-500`
- Dark Background: `bg-black`, `bg-gray-900`
- Text: `text-white`, `text-gray-400`

### Typography
- Font: Inter (Google Fonts)
- Responsive text sizing with Tailwind classes

### Animations
- Fade-in animations defined in `globals.css`
- Hover effects using Tailwind transitions
- Smooth scroll behavior

## Backend Features

### Registration API (`/api/register`)
- **Unique Booking ID generation** (format: ANX-XXXXX-XXXXX)
- **Phone number formatting** (automatic country code detection)
- **Comprehensive error handling**
- **Request validation**

### Notification System
- **Custom Message Template:** Personalized confirmation messages
- **Delivery Tracking:** Message delivery status logging

### Message Format
```
Welcome to AutoNXT, [Customer Name]! You're all set for the event, Nov 28 - 30. 
Your Booking ID: [Booking ID]. Get ready for an amazing expo!
```

## Form Handling

The registration modal now integrates with the backend:

1. **Form Validation:** Client-side and server-side validation
2. **Loading States:** Visual feedback during submission
3. **Error Handling:** Detailed error messages for failed registrations
4. **Success Confirmation:** Shows booking details and message delivery status
5. **Phone Number Support:** Accepts various formats (+91XXXXXXXXXX, 91XXXXXXXXXX, XXXXXXXXXX)

## Image Optimization

External images are configured in `next.config.js`:
- Unsplash for gallery images
- Clearbit for brand logos
- Pixabay for hero video

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive design
- Progressive enhancement for older browsers

## License

This project is open source and available under the MIT License.
