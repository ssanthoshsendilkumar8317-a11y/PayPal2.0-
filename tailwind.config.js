/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#F7F7F5',
          secondary: '#F2F2EF',
          card: '#FFFFFF',
        },
        text: {
          primary: '#191919',
          secondary: '#737373',
          muted: '#A3A3A3',
        },
        border: {
          subtle: '#E7E7E5',
          DEFAULT: '#E7E7E5',
        },
        accent: {
          primary: '#273B53',
          secondary: '#68788A',
          hover: '#1e2e42',
          light: '#EEF2F6',
        },
        status: {
          success: '#27845A',
          'success-bg': '#EDF7F1',
          warning: '#C58A35',
          'warning-bg': '#FDF6EC',
          danger: '#C64C4C',
          'danger-bg': '#FDF0F0',
          info: '#273B53',
          'info-bg': '#F0F3F7',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      borderRadius: {
        'fin': '12px',
        'fin-sm': '8px',
        'fin-lg': '16px',
      },
      boxShadow: {
        'fin': '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'fin-card': '0 1px 4px 0 rgba(0, 0, 0, 0.04), 0 4px 12px 0 rgba(0, 0, 0, 0.03)',
        'fin-elevated': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}
