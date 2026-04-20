"use client"

import {Chip} from "@mui/material";
import {CourseCategory} from "@/lib/aux/types";

// Colour for each category
const CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
    tech:     { bg: "#EEEDFE", text: "#3C3489" },
    business: { bg: "#FAEEDA", text: "#633806" },
    creative: { bg: "#E1F5EE", text: "#0F6E56" },
    career:   { bg: "#FAECE7", text: "#993C1D" },
    advanced: { bg: "#E6F1FB", text: "#185FA5" },
};

type chipProps = {
    props: {
        category: CourseCategory;
        isSmall: boolean;
        isActive?: boolean;
        onClick?: () => void;
    }
}

export default function FilterChips({props}:chipProps) {
    const catColor = CATEGORY_COLORS[props.category];

    return(
        <Chip
            label={props.category}
            size={props.isSmall ? "small" : "medium"}
            onClick={props.onClick}
            sx={{
                backgroundColor: catColor.bg,
                color: catColor.text,
                fontWeight: 600,
                fontSize: props.isSmall ? "0.65rem" : "1.5rem",
                height: props.isSmall ? 20 : 40,
                width: props.isSmall ? "auto" : {md: "15%", sm: "80%", xs: "100%"},
                gap: props.isSmall ? 5 : 0,
                // mt: props.isSmall ? "1rem" : "0",
                textTransform: "capitalize",
            }}
        />
    );
}