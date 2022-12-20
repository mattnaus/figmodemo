/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
    theme: {
        colors: {
            primary: {
                100: "#DCFCE7",
                500: "#22C55E",
            },
            gray: {
                500: "#556987",
                900: "#2A3342",
            },
            white: {
                900: "#ffffff",
            },
        },
        extend: {
            fontFamily: {
                poppins: ['"Poppins"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
