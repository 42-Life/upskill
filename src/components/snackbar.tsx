"use client"

import {Button, IconButton, SnackbarCloseReason, Snackbar, Box, Typography} from "@mui/material";
import * as React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import {useRouter} from "next/navigation";
import AddToCart from "@/components/add-to-cart";
import {SnackProps} from "@/lib/aux/types";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function SnackbarElem({message, isButton, redirectTarget, contained, fullWidth}:SnackProps) {
    const [open, setOpen] = React.useState(false);

    const handleClick = (e:React.MouseEvent) => {
        e.stopPropagation()
        setOpen(true);
    }

    const handleClose = (e: Event| React.SyntheticEvent, reason?: SnackbarCloseReason) => {
        if (reason === "clickaway") {
            return;
        }
        setOpen(false);
    }

    function handleCloseClick(e: Event| React.SyntheticEvent, reason?: SnackbarCloseReason) {
        e.stopPropagation();
        handleClose(e, reason);
        router.push(`/${redirectTarget.toLowerCase()}`);
    }

    const router = useRouter();

    const handleAddToCart = (e: Event| React.SyntheticEvent, r?: SnackbarCloseReason,) => {
        handleCloseClick(e, r)
    }

    const action = (
        <>
            <Button color="secondary" size="small" onClick={handleAddToCart}>
                {`View ${redirectTarget ? redirectTarget : ""}`}
                {/*  Shows blank if undefined; else: wishlist, cart, checkout as parameterised  */}
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>
    );

    return(
        <Box>
            {
                !(isButton) ?
                    <Typography
                        sx={{
                            fontSize: "0.75rem",
                            color: THEME_COLORS.primary,
                            fontWeight: 600,
                            cursor: "pointer",
                            textDecoration: "underline",
                            "&:hover": { color: THEME_COLORS.primary },
                        }}
                        onClick={handleClick}
                    ></Typography>
                :
                    <AddToCart props={{buttonMessage: message, onClickAction: handleClick, contained:contained, fullWidth:fullWidth}} />
            }
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message={`Added to ${redirectTarget}`}
                action={action}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </Box>
    );
}

// Reference: MUI Snackbar Documentation
// https://mui.com/material-ui/react-snackbar/?_gl=1*8rmzq4*_up*MQ..*_ga*NTM2ODAyMDkxLjE3NzY1NTAyODE.*_ga_5NXDQLC2ZK*czE3NzY1NTAyODEkbzEkZzAkdDE3NzY1NTAyODEkajYwJGwwJGgw