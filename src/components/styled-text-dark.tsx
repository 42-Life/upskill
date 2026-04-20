import { Typography, TypographyProps } from "@mui/material";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function SectionTitle(props: TypographyProps) {
    return(
        <Typography variant="h3" sx={{
            fontSize: '2.5rem',
            mt: '6vh', mb: '2vh',
            mx: "4%",
            fontFamily: 'var(--font-moralana)',
            fontWeight: 600,
            color: THEME_COLORS.primary,
            // fontWeight: 500,
            textAlign: "left",

            ...props.sx
        }}
        {...props}
        />
    );
}


