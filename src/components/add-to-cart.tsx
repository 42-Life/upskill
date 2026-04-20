'use client';

import Button from '@mui/material/Button';
import { THEME_COLORS } from '@/lib/aux/styles';
import {cartButtonProps} from "@/lib/aux/types";

export default function AddToCart({ props } : cartButtonProps ) {
    return(
        <Button
            variant={props.contained ? "contained" : "outlined"}
            onClick={props.onClickAction}
            fullWidth
            sx={{
                    // borderRadius: 4, fontWeight: "bold", textTransform: "none", p: 2,
                    // backgroundColor: THEME_COLORS.action,
                    // '&:hover': {
                    //     backgroundColor: THEME_COLORS.lightAction
                    // },
                    // my: "1%", fontSize: '1.25rem',
                    borderRadius: 4, fontWeight: "bold", textTransform: "none", p: 2,
                    color: "white",
                    backgroundColor: props.contained ? THEME_COLORS.action : THEME_COLORS.darkShade,
                    '&:hover': {
                        backgroundColor: props.contained ? THEME_COLORS.lightAction : THEME_COLORS.lightShade
                    },
                    mb: 1.5, width: props.fullWidth ? {md: '30vw', sm: '33vw', xs: '67vw'} : '100% ', height: {xs: "90px", sm: "70px", md: "auto"}
            }}
        >
            {props.buttonMessage}
        </Button>
    )
}