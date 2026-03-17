import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "var(--color-obsidian)",
        smokedBronze: "var(--color-smokedBronze)",
        graphite: "var(--color-graphite)",
        stormBlue: "var(--color-stormBlue)",
        deepMoss: "var(--color-deepMoss)",
        oxideGold: "var(--color-oxideGold)",
        emberAccent: "var(--color-emberAccent)",
        iceMist: "var(--color-iceMist)",
        slateAsh: "var(--color-slateAsh)"
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"]
      }
    }
  },
  plugins: []
} satisfies Config;
