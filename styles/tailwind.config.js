const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: {
        content: ['_site/**/*.html'],
        options: {
            safelist: [],
        },
    },
    theme: {
        extend: {
            fontFamily: {
                serif: ['Merriweather', ...defaultTheme.fontFamily.sans]
            },
        },
    },
    variants: {},
    plugins: [],
}