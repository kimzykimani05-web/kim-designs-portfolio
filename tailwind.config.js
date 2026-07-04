/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#070B14',
          secondary: '#0F172A',
          card: '#131C31',
        },
        light: {
          primary: '#F8FAFC',
          secondary: '#CBD5E1',
          muted: '#94A3B8',
        },
        brand: {
          cyan: '#00C6FF',
          blue: '#3B82F6',
          purple: '#8B5CF6',
        },
      },
      fontFamily: {
        heading: ['Inter', 'Space Grotesk', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '18': '4.5rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'glass-lg': '0 12px 40px 0 rgba(0, 0, 0, 0.4)',
        'glow-cyan': '0 0 40px -10px rgba(0, 198, 255, 0.4)',
        'glow-blue': '0 0 40px -10px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 40px -10px rgba(139, 92, 246, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-brand': 'linear-gradient(135deg, #00C6FF 0%, #3B82F6 40%, #8B5CF6 100%)',
        'gradient-brand-alt': 'linear-gradient(135deg, #00C6FF 0%, #8B5CF6 100%)',
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'scale-in': 'scale-in 0.6s ease-out forwards',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'float-medium': 'float-medium 4s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        'float-medium': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
