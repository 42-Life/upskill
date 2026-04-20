import { Typography, TypographyProps } from "@mui/material";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function SectionTitleLight(props: TypographyProps) {
    return(
        <Typography variant="h3" sx={{
            fontSize: '2.5rem',
            mt: '4vh',
            mb: '4vh',
            fontFamily: 'var(--font-moralana)',
            fontWeight: 600,
            color: THEME_COLORS.background,
            // fontWeight: 500,
            textAlign: "center",

            ...props.sx
        }}
                    {...props}
        />
    );
}