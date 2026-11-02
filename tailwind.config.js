/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF3E4',
        ivory: '#F6E9D2',
        gold: '#C9A24B',
        'deep-gold': '#8B6A1F',
        maroon: '#5A1F1A',
        'kumkum-red': '#B3121B',
        'temple-black': '#0B0907',
        'wood-brown': '#3B2314',
        brown: '#3B2314',
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        script: ['"Great Vibes"', 'cursive'],
        sans: ['Outfit', 'system-ui', '-apple-system', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #8B6A1F 0%, #E8C873 50%, #8B6A1F 100%)',
        'gold-shimmer': 'linear-gradient(90deg, #8B6A1F 0%, #F5E296 25%, #C9A24B 50%, #F5E296 75%, #8B6A1F 100%)',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(201, 162, 75, 0.4), 0 0 30px rgba(139, 106, 31, 0.2)' },
          '50%': { boxShadow: '0 0 25px rgba(232, 200, 115, 0.8), 0 0 45px rgba(201, 162, 75, 0.5)' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9' },
          '50%': { transform: 'scale(1.08) translateY(-1px)', opacity: '1' },
          '75%': { transform: 'scale(0.96) translateY(0.5px)', opacity: '0.85' },
        },
        floatParticle: {
          '0%': { transform: 'translateY(0) translateX(0)', opacity: '0' },
          '50%': { opacity: '0.8' },
          '100%': { transform: 'translateY(-120px) translateX(20px)', opacity: '0' },
        },
        slowPushIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.04)' }
        }
      },
      animation: {
        'pulse-glow': 'pulseGlow 2.5s infinite ease-in-out',
        'flame-flicker': 'flameFlicker 1.8s infinite ease-in-out',
        'float-particle': 'floatParticle 6s infinite ease-in-out',
        'slow-push-in': 'slowPushIn 12s infinite alternate ease-in-out',
      }
    },
  },
  plugins: [],
}
