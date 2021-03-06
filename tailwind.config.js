const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                display: ['Circular Std Bold', 'Inter var', ...defaultTheme.fontFamily.sans],
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}
