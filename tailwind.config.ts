import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-google-sans)"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
      colors: {
        primary: {
          DEFAULT: "#65558F",
          container: "#E9DDFF",
          "50": "#7E6EAA",
          "60": "#9887C5",
          "70": "#B4A1E1",
          "80": "#CFBDFE",
          "90": "#E9DDFF",
          "95": "#F6EEFF",
        },
        "on-primary": {
          DEFAULT: "#FFFFFF",
          container: "#211047",
        },
        secondary: {
          DEFAULT: "#625B70",
          container: "#E8DEF8",
          "50": "#7A7485",
          "60": "#948E9F",
          "70": "#AFA8BA",
          "80": "#CBC3D5",
          "90": "#E7DFF2",
          "95": "#F6EEFF",
        },
        "on-secondary": {
          DEFAULT: "#FFFFFF",
          container: "#1E192B",
        },
        tertiary: {
          DEFAULT: "#7E5260",
          container: "#FFD9E3",
          "50": "#916D78",
          "60": "#AD8791",
          "70": "#C9A1AC",
          "80": "#E6BCC7",
          "90": "#FFD9E3",
          "95": "#FFECF0",
        },
        "on-tertiary": {
          DEFAULT: "#FFFFFF",
          container: "#31101D",
        },
        error: {
          DEFAULT: "#BA1A1A",
          container: "#FFDAD6",
        },
        "on-error": {
          DEFAULT: "#FFFFFF",
          container: "#410002",
        },
        surface: "#FDF7FF",
        "on-surface": "#1D1B20",
        "surface-variant": "#E7E0EB",
        "on-surface-variant": "#49454E",
        outline: "#7A757F",
        "outline-variant": "#CAC4CF",

        dark: {
          primary: {
            DEFAULT: "#CFBDFE",
            container: "#4D3D75",
          },
          "on-primary": {
            DEFAULT: "#36265D",
            container: "#E9DDFF",
          },
          secondary: {
            DEFAULT: "#CCC2DB",
            container: "#4A4458",
          },
          "on-secondary": {
            DEFAULT: "#332D41",
            container: "#E8DEF8",
          },
          surface: "#141218",
          "on-surface": "#E6E0E9",
          tertiary: {
            DEFAULT: "#EFB8C8",
            container: "#633B48",
          },
          "on-tertiary": {
            DEFAULT: "#4A2532",
            container: "#FFD9E3",
          },
          error: {
            DEFAULT: "#FFB4AB",
            container: "#93000A",
          },
          "on-error": {
            DEFAULT: "#690005",
            container: "#FFDAD6",
          },
          "surface-variant": "#49454E",
          "on-surface-variant": "#CAC4CF",
          outline: "#948F99",
          "outline-variant": "#49454E",
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
        float: 'float 3s ease-in-out infinite',
      },
      backgroundImage: {
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};

export default config;
