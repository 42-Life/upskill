import { Typography, TypographyProps } from "@mui/material";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function SubtitleDark(props: TypographyProps) {
    return(
        <Typography {...props} variant="h5" sx={{
            fontSize: `calc(10px+10vw)`,
            fontFamily: 'var(--font-moralana)',
            fontWeight: "bold",
            color: THEME_COLORS.primary,
            // fontWeight: 500,
            textAlign: "center",
            my: "10px",
            ...props.sx
        }}
        />
    );
}