"use client"

import { ThemeProvider } from "@mui/material/styles";
import theme from './styles'

export default function ThemeProv({ children }: { children: React.ReactNode }) {
    return(
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}