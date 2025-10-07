import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

const withOpacityValue = (variable: string) =>
  `oklch(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
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
        border: withOpacityValue("--border"),
        input: withOpacityValue("--input"),
        ring: withOpacityValue("--ring"),
        background: withOpacityValue("--background"),
        foreground: withOpacityValue("--foreground"),
        primary: {
          DEFAULT: withOpacityValue("--primary"),
          foreground: withOpacityValue("--primary-foreground"),
        },
        secondary: {
          DEFAULT: withOpacityValue("--secondary"),
          foreground: withOpacityValue("--secondary-foreground"),
        },
        destructive: {
          DEFAULT: withOpacityValue("--destructive"),
          foreground: withOpacityValue("--destructive-foreground"),
        },
        muted: {
          DEFAULT: withOpacityValue("--muted"),
          foreground: withOpacityValue("--muted-foreground"),
        },
        accent: {
          DEFAULT: withOpacityValue("--accent"),
          foreground: withOpacityValue("--accent-foreground"),
        },
        popover: {
          DEFAULT: withOpacityValue("--popover"),
          foreground: withOpacityValue("--popover-foreground"),
        },
        card: {
          DEFAULT: withOpacityValue("--card"),
          foreground: withOpacityValue("--card-foreground"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
      boxShadow: {
        glow: "0 0 60px oklch(var(--primary) / 0.35)",
        card: "0px 28px 60px -30px oklch(var(--foreground) / 0.25)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;
