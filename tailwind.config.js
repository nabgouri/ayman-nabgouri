const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "oklch(11% 0.008 40)",
          deep: "oklch(8% 0.006 40)",
          mid: "oklch(16% 0.010 40)",
          elevated: "oklch(22% 0.012 40)",
        },
        line: "oklch(25% 0.012 40)",
        fg: {
          DEFAULT: "oklch(96% 0.005 60)",
          muted: "oklch(72% 0.018 50)",
          dim: "oklch(50% 0.015 50)",
        },
        accent: {
          DEFAULT: "oklch(72% 0.18 55)",
          muted: "oklch(78% 0.10 55)",
        },
      },
      fontFamily: {
        display: ['"Clash Grotesk"', "system-ui", "sans-serif"],
        sans: ['"General Sans"', "system-ui", "sans-serif"],
      },
      fontSize: {
        display: [
          "clamp(3.5rem, 9vw, 8rem)",
          { lineHeight: "0.95", letterSpacing: "-0.03em", fontWeight: "600" },
        ],
        headline: [
          "clamp(2rem, 5vw, 3.5rem)",
          { lineHeight: "1", letterSpacing: "-0.02em", fontWeight: "600" },
        ],
      },
      maxWidth: {
        prose: "68ch",
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.55" },
          "50%": { transform: "scale(2.2)", opacity: "0" },
        },
      },
      animation: {
        "pulse-glow": "pulse-glow 2.4s cubic-bezier(0.25, 1, 0.5, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
