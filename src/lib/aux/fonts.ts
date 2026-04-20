import localFont from 'next/font/local'

export const Moralana = localFont({
    src: [{
        path: "./fonts/moralana/moralana.regular.otf",
        weight: '400',
        style: 'normal'
    }],
    display: "swap",
    variable: '--font-moralana'
})