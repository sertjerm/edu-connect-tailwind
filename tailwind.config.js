// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'thai': ['Sarabun', 'sans-serif'],
        'sans': ['Sarabun', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        primary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
        },
        secondary: {
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
        },
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          strong: 'rgba(255, 255, 255, 0.3)',
        }
      },
      backgroundImage: {
        'gradient-cool': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-purple': 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)',
        'gradient-cyan': 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'bounce-gentle': 'bounceGentle 2s ease-in-out infinite',
        'pulse-gentle': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 1.5s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        slideUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': {
            transform: 'translateY(0)',
          },
          '40%': {
            transform: 'translateY(-5px)',
          },
          '60%': {
            transform: 'translateY(-3px)',
          },
        },
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
          },
          '50%': {
            boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-200px 0',
          },
          '100%': {
            backgroundPosition: 'calc(200px + 100%) 0',
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'thai-xs': ['0.75rem', { lineHeight: '1.6' }],
        'thai-sm': ['0.875rem', { lineHeight: '1.6' }],
        'thai-base': ['1rem', { lineHeight: '1.6' }],
        'thai-lg': ['1.125rem', { lineHeight: '1.6' }],
        'thai-xl': ['1.25rem', { lineHeight: '1.6' }],
        'thai-2xl': ['1.5rem', { lineHeight: '1.5' }],
        'thai-3xl': ['1.875rem', { lineHeight: '1.4' }],
      },
      boxShadow: {
        'glow-purple': '0 0 30px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4)',
        'glass': '0 8px 32px rgba(31, 38, 135, 0.37)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.1)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '4xl': '2rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      // Add Thai text utilities
      addUtilities({
        '.text-thai-xs': {
          fontSize: '0.75rem',
          lineHeight: '1.6',
          fontFamily: 'Sarabun, sans-serif',
        },
        '.text-thai-sm': {
          fontSize: '0.875rem',
          lineHeight: '1.6',
          fontFamily: 'Sarabun, sans-serif',
        },
        '.text-thai-base': {
          fontSize: '1rem',
          lineHeight: '1.6',
          fontFamily: 'Sarabun, sans-serif',
        },
        '.text-thai-lg': {
          fontSize: '1.125rem',
          lineHeight: '1.6',
          fontFamily: 'Sarabun, sans-serif',
        },
        '.text-thai-xl': {
          fontSize: '1.25rem',
          lineHeight: '1.6',
          fontFamily: 'Sarabun, sans-serif',
        },
        '.text-thai-2xl': {
          fontSize: '1.5rem',
          lineHeight: '1.5',
          fontFamily: 'Sarabun, sans-serif',
        },
      });

      // Add glass effect components
      addComponents({
        '.glass': {
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
        },
        '.glass-strong': {
          background: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
        },
        '.cool-gradient': {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        },
      });
    }
  ],
}