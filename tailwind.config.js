/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Core surfaces — deep slate, not pure black (avoids the generic near-black-with-neon look)
        base: {
          DEFAULT: '#0B0F14',
          light: '#F7F9FB',
        },
        panel: {
          DEFAULT: '#121821',
          light: '#FFFFFF',
        },
        border: {
          DEFAULT: '#1E2833',
          light: '#E2E8F0',
        },
        ink: {
          DEFAULT: '#E8EDF2',
          light: '#0B0F14',
        },
        muted: {
          DEFAULT: '#8A97A6',
          light: '#5B6675',
        },
        // Signature accent — signal teal, evokes terminal/API success states
        signal: {
          DEFAULT: '#5EEAD4',
          dim: '#2DD4BF',
          deep: '#0F766E',
        },
        // Secondary accent — amber, used sparingly for emphasis/warnings/highlights
        amber: {
          DEFAULT: '#F5A623',
          dim: '#C77D0A',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(to right, rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(94,234,212,0.06) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(94,234,212,0.15), 0 8px 30px -10px rgba(94,234,212,0.25)',
        panel: '0 4px 24px -8px rgba(0,0,0,0.4)',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
        floatY: 'floatY 6s ease-in-out infinite',
        scan: 'scan 3s linear infinite',
      },
    },
  },
  plugins: [],
};
