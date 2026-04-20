import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, MenuItem,
    TextField,
    Typography,
} from "@mui/material";
import {THEME_COLORS} from "@/lib/aux/styles";
import * as React from "react";
import {useState} from "react";
// import Link from "next/link";

type signupProps = {
    props: {
        signInReason: string;
        isButton:boolean;
    }
}

export default  function Signup({props}:signupProps) {
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    }

    const handleCloseDialog = () => {
        setOpenDialog(false);
    }

    return (
        <>
            {
                props.isButton ?
                    <Button
                        variant="contained"
                        onClick={handleOpenDialog}
                        sx={{ mr: 2, backgroundColor: THEME_COLORS.action,
                            '&:hover': {
                                backgroundColor: THEME_COLORS.lightAction
                            }
                        }}
                    >
                        Sign Up / Login
                    </Button>
                :
                    <MenuItem onClick={handleOpenDialog}>
                        <Typography style={{ textDecoration: "none", color: "inherit" }}>
                            My Courses
                        </Typography>
                    </MenuItem>
            }
            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Sign Up or Login</DialogTitle>
                <DialogContent>
                    <DialogContentText>{props.signInReason}</DialogContentText>

                    <form id="sign-up">
                        <Box sx={{ display: "flex", flexDirection: "column", my:"3%", width: "100%"}}>
                            <TextField sx={{my: "3%"}} autoFocus required id={"fname"} name={"fname"} label={"First Name"} type={"text"}></TextField>
                            <TextField sx={{my: "3%"}} autoFocus required id={"surname"} name={"surname"} label={"Surname"} type={"text"}></TextField>
                            <TextField sx={{my: "3%"}} autoFocus required id={"email"} name={"email"} label={"Email Address"} type={"email"}></TextField>
                            <TextField sx={{my: "3%"}} autoFocus required id={"password"} name={"password"} label={"Password"} type={"password"}></TextField>
                            <TextField sx={{my: "3%"}} autoFocus required id={"confirm"} name={"confirm"} label={"Confirm Password"} type={"password"}></TextField>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions sx={{m: "3%"}}>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button type={"submit"} form={'sign-up'}>Signup/Login</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}