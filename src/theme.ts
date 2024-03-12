import {Roboto} from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import {red} from '@mui/material/colors';

export const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin-ext'],
    display: 'swap'
});

const theme =createTheme({
    palette:{
        primary:{
            main: '#121858',
            dark: '#1f286e'
        },
        secondary:{
            main: '#e14577'
        },
        error:{
            main: red.A700,
        }
    },
    typography:{
        fontFamily: roboto.style.fontFamily
    }
});

export default theme;