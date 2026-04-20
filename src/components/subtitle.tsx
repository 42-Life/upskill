import { Typography, TypographyProps } from "@mui/material";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function Subtitle(props: TypographyProps) {
    return(
        <Typography {...props} variant="h5" sx={{
            fontSize: `calc(10px+10vw)`,
            fontFamily: 'var(--font-moralana)',
            fontStyle: 'italic',
            fontWeight: 500,
            color: THEME_COLORS.primary,
            // fontWeight: 500,
            textAlign: "center",
            mb:4,
            maxWidth: "70%",
            ...props.sx
        }}
        />
    );
}