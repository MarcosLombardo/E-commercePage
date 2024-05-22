import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                backg: "#040204",
                apmarineblue: "#012E4A",
                apblue: "#036280",
                aplightblue: "#EEF6FD",
                apwhite: "#e8ede7",
                apgray: "#9e9b98",
                apblack: "#081012",
            },
        },
    },
    plugins: [],
};
export default config;
