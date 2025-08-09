# AutoNXT0 - Next.js Auto Expo Website

A modern, responsive auto expo website built with Next.js, Tailwind CSS, and Lucide React icons.

## Features

- 🚗 Modern automotive expo website
- 📱 Fully responsive design
- 🎨 Sleek dark theme with gradient accents
- ✨ Smooth animations and hover effects
- 📝 Registration modal with form handling
- 🎥 Hero video background
- 📸 Interactive image gallery
- 📅 Event schedule timeline
- 🏢 Featured exhibitors section

## Project Structure

```
AutoNXT0/
├── app/
│   ├── globals.css
│   ├── layout.js
│   └── page.js
├── components/
│   ├── icons/
│   │   └── index.js
│   ├── modals/
│   │   └── RegistrationModal.js
│   ├── sections/
│   │   ├── HeroSection.js
│   │   ├── ExhibitorsSection.js
│   │   ├── ScheduleSection.js
│   │   └── GallerySection.js
│   ├── Header.js
│   └── Footer.js
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
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

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

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

## Form Handling

The registration modal currently logs form data to console. To integrate with a backend:

1. Replace the `handleSubmit` function in `RegistrationModal.js`
2. Add your API endpoint or service (e.g., Supabase, Firebase)
3. Implement proper error handling and success messages

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
