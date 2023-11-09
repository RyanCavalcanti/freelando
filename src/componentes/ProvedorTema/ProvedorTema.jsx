import { ThemeProvider } from '@emotion/react';

const tema = {
    cores: {
        branco: '#FFF',
        atencao: '#',
        focus: '#B009FF',
        primarias: {
            a: '#5754ED',
            b: '#D93114',
            c: '#'
        },
        secundarias: {
            a: '#F8F8FD',
            b: '#',
            c: '#'
        },
        neutras: {
            a: '#373737',
            b: '#',
            c: '#',
            d: '#'
        },
        dark: {
            a: '#',
            b: '#',
        }
    },
    espacamentos: {
        xxs: '4px',
        xs: '8px',
        s: '16px',
        m: '24px',
        l: '32px',
        xl: '48px',
        xxl: '64px',
    },
    fontFamily: "'Montserrat', sans-serif"
}

export const ProvedorTema = ({ children }) => {
    return(
        <ThemeProvider theme={tema}>
            { children }
        </ThemeProvider>
    )
}