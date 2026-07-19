import type { Config } from "tailwindcss";

/**
 * Foxtron Engineering brand tokens — derived from the brushed-steel logo +
 * the real workshop photography (spark/laser orange). Structure per BBETTR
 * Website OS SYSTEM/01. Token VALUES await Eloff's final sign-off.
 *
 * - primary  = steel/charcoal (trust): links, icons, dark surfaces
 * - accent   = industrial orange (conversion): RESERVED for primary CTAs
 * Conversion channels: Request a Quote, phone, email.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./views/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary — steel trust color
          primary: "#1F2933",
          primaryDark: "#111820",
          primaryLight: "#3E4C59",
          // Accent — conversion orange (button-safe: white text on `accentDark` passes AA)
          accent: "#EA580C",
          accentDark: "#C2410C",
          accentLight: "#FB923C",
          // Ink scale (dark → lighter)
          ink: "#0E1418",
          charcoal: "#1A232B",
          graphite: "#2C3742",
          steel: "#5A6B78",
          // Light surfaces
          mist: "#EEF1F4",
          bone: "#F9FAFB",
        },
        success: "#16A34A",
        error: "#DC2626",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(31, 41, 51, 0.45)",
        accent: "0 20px 60px -20px rgba(234, 88, 12, 0.4)",
        card: "0 20px 50px -25px rgba(14, 20, 24, 0.25)",
        ink: "0 30px 80px -30px rgba(6, 9, 11, 0.85)",
      },
      maxWidth: {
        prose: "65ch",
      },
      transitionTimingFunction: {
        reveal: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
