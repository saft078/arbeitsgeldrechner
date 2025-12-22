/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: "#D80000",
                "primary-dark": "#B00000",
                "swiss-red": "#E60000",
                "swiss-red-light": "#FF2424",
                "swiss-red-dark": "#B00000"
            }
        }
    },
    plugins: [
        require('daisyui')
    ],
    daisyui: {
        themes: ["light"]
    }
};
