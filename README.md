# Neeno Land - React Website

A modern React website for Neeno Land, the ultimate party and play destination for families in Indirapuram, Ghaziabad.

## Features

- **Hero Section**: Welcome message and introduction to Neeno Land
- **Our Story**: The journey and mission of Neeno Land
- **Our Vision**: The goals and aspirations
- **What We Offer**: Four key features including play areas, party packages, activities, and event spaces
- **Why Neeno Land**: Three compelling reasons including safety, expert planning, and unforgettable experiences
- **Gallery**: Showcase of previous events with Unsplash images
- **Contact Section**: Complete contact information with address, phone, and email
- **Social Media Links**: Instagram and Facebook integration
- **WhatsApp Integration**: Floating WhatsApp button for direct messaging
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
neo-land/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Home.js
│   │   └── Home.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Configuration

### Contact Information

Update the contact details in `src/components/Home.js`:

```javascript
const phoneNumber = "+919876543210"; // Your phone number
const email = "neenoland4u@gmail.com"; // Your email
const address = "Indirapuram, Ghaziabad, Uttar Pradesh"; // Your address
const instagramUrl = "https://www.instagram.com/neenoland"; // Your Instagram URL
const facebookUrl = "https://www.facebook.com/neenoland"; // Your Facebook URL
```

### Gallery Images

The gallery currently uses Unsplash images. To use your own images:

1. Create a folder `public/images/`
2. Add your event images
3. Update the `eventImages` array in `src/components/Home.js` with your image paths

## Customization

- Colors: The primary color (#ff7a00) can be changed in `Home.css`
- Content: Edit the text content in `src/components/Home.js`
- Images: Replace placeholder image paths with your actual event images

## Technologies Used

- React 18.2.0
- CSS3 with Flexbox and Grid
- Google Fonts (Poppins)
- Unsplash API for images
- WhatsApp Web API integration
