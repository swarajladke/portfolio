/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", // white-10
        input: "var(--color-input)", // elevated-blue-gray
        ring: "var(--color-ring)", // aqua
        background: "var(--color-background)", // rich-dark-purple
        foreground: "var(--color-foreground)", // white
        primary: {
          DEFAULT: "var(--color-primary)", // aqua
          foreground: "var(--color-primary-foreground)", // rich-dark-purple
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", // deep-space-blue
          foreground: "var(--color-secondary-foreground)", // white
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // neon-red
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // deep-space-blue
          foreground: "var(--color-muted-foreground)", // cool-gray
        },
        accent: {
          DEFAULT: "var(--color-accent)", // electric-pink
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // elevated-blue-gray
          foreground: "var(--color-popover-foreground)", // white
        },
        card: {
          DEFAULT: "var(--color-card)", // elevated-blue-gray
          foreground: "var(--color-card-foreground)", // white
        },
        success: {
          DEFAULT: "var(--color-success)", // bright-green
          foreground: "var(--color-success-foreground)", // rich-dark-purple
        },
        warning: {
          DEFAULT: "var(--color-warning)", // electric-amber
          foreground: "var(--color-warning-foreground)", // rich-dark-purple
        },
        error: {
          DEFAULT: "var(--color-error)", // neon-red
          foreground: "var(--color-error-foreground)", // white
        },
        surface: "var(--color-surface)", // elevated-blue-gray
        "text-primary": "var(--color-text-primary)", // white
        "text-secondary": "var(--color-text-secondary)", // cool-gray
        "theme-red": "var(--color-theme-red)", // neon-red
        "theme-aqua": "var(--color-theme-aqua)", // aqua
        "theme-violet": "var(--color-theme-violet)", // violet-500
        "theme-blue": "var(--color-theme-blue)", // neon-blue
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // headings-body
        mono: ["JetBrains Mono", "Consolas", "monospace"], // captions-data
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
        "glow": "glow 2s ease-in-out infinite alternate",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "glow": {
          "0%": { boxShadow: "0 0 10px currentColor" },
          "100%": { boxShadow: "0 0 20px currentColor, 0 0 30px currentColor" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)', // spring-animation
      },
      transitionDuration: {
        '150': '150ms', // micro-interactions
        '300': '300ms', // normal-transitions
        '400': '400ms', // progressive-disclosure
        '600': '600ms', // major-state-changes
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'md': '8px',
      },
      boxShadow: {
        'glow': '0 0 20px currentColor',
        'glow-sm': '0 0 10px currentColor',
        'glow-lg': '0 0 30px currentColor',
        'elevation-1': '0 4px 20px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 191, 255, 0.1)',
        'elevation-2': '0 8px 40px rgba(0, 0, 0, 0.3), 0 0 30px rgba(0, 191, 255, 0.15)',
        'elevation-3': '0 12px 60px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 191, 255, 0.2)',
      },
      zIndex: {
        '100': '100', // navigation
        '200': '200', // modal-backdrop
        '300': '300', // modal-content
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}