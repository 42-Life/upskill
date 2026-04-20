import { createTheme } from '@mui/material/styles';

export const THEME_COLORS = {
    primary: `#66999b`,
    darkShade: `#0e4749`,
    lightShade: `#27644A`,
    // darkMediumShade: `#A4C3B2`,
    // lightMediumShade: `#CCE3DE`,
    // offWhite: `#F6FFF8`,
    white: `#FFFFFF`,
    action: `#F5672A`,
    lightAction: `#EF8354`,
    background: '#F6FFF8'
}

const theme = createTheme({
    palette: {
        primary: {
            main: THEME_COLORS.primary,
            light: THEME_COLORS.white,
            dark: THEME_COLORS.darkShade,
        },
        secondary: {
            main: '#FF715B',
        },
    },

    components: {
        MuiButton: {
            styleOverrides : {
                outlined: {
                    borderWidth: '2px',
                    '&:hover': {
                            borderWidth: '2px',
                            color: THEME_COLORS.background,
                            backgroundColor: THEME_COLORS.primary,
                            opacity: 30,
                    }
                }
            }
        },
    }
});

export default theme;