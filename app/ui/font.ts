import { Oswald, Roboto, Merriweather } from 'next/font/google';

export const oswald = Oswald({ subsets: ["latin"], weight: ['500'] });
export const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export const merriweather = Merriweather({ subsets: ["latin"], weight: ['300'] });