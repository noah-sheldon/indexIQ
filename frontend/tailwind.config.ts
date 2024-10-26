import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern color palette
        primary: {
          DEFAULT: '#1E90FF', // Primary color (blueish)
          light: '#63B3ED', // Light shade for hover states or accents
          dark: '#1A73E8', // Darker primary color for buttons or headers
        },
        secondary: {
          DEFAULT: '#FF6F61', // Secondary color (modern soft red)
          light: '#FF8A75', // Light shade for hover
          dark: '#E45B50', // Darker secondary color
        },
        background: {
          DEFAULT: '#F5F7FA', // Light modern background color
          dark: '#1E293B', // Dark mode background
        },
        foreground: {
          DEFAULT: '#2D3748', // Default foreground color (modern dark gray)
          light: '#A0AEC0', // Light gray for text or secondary elements
          dark: '#1A202C', // Darker foreground (headers)
        },
      },
      borderRadius: {
        // Modern rounded corners
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px',
        full: '50%', // Full rounded (for buttons or avatars)
      },
      spacing: {
        // Consistent spacing for modern layout design
        18: '4.5rem', // Custom spacing for padding, margins
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      transitionProperty: {
        // Smooth transitions for modern feel
        colors: 'color, background-color, border-color',
        opacity: 'opacity',
        transform: 'transform',
      },
      transitionTimingFunction: {
        // Smooth animation timing
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        250: '250ms', // Modern transition durations
        400: '400ms',
        600: '600ms',
      },
    },
  },
  plugins: [],
};
export default config;
