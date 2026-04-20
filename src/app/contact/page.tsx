"use client"

import SectionTitleLight from "@/components/styled-text-light";
import {Box, Card, Button, TextField, Alert, AlertTitle, Collapse, IconButton} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import * as React from "react";
import {THEME_COLORS} from "@/lib/aux/styles";
import {useState} from "react";

export default function Contact() {
    const [open, setOpen] = useState(false);

    const handleFormSubmit = (e:React.SubmitEvent) => {
        setOpen(true)
    };

    return(
        <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: "100%"}}>
            {/*<SectionTitle>Get in Contact</SectionTitle>*/}
            <Collapse in={open}>
                <Alert variant="filled" severity="success" sx={{mt: "4%", width: {sm: "auto", xs: "90vw", md: "80vw"}}}
                       action={
                           <IconButton
                               aria-label="close"
                               color="inherit"
                               size="small"
                               onClick={() => {
                                   setOpen(false);
                               }}
                           >
                               <CloseIcon fontSize="inherit" />
                           </IconButton>
                       }
                >
                    <AlertTitle sx={{ fontWeight: "bold" }}>Form Submitted</AlertTitle>
                    Form has been successfully submitted! Check your e-mail for a response within 1-3 business days
                </Alert>
            </Collapse>

            <Card sx={{p: "2% 4%", width: {md: "60vw", xs: "80vw"}, backgroundColor: THEME_COLORS.primary, borderRadius: "20px", my: "4%"}}>
                <SectionTitleLight>Contact Us</SectionTitleLight>
                {/*<Typography>We respond within 1-3 business days</Typography>*/}
                <form onSubmit={handleFormSubmit}>
                    <Box sx={{ display: "flex", flexDirection: "column", my:"3%", width: "100%"}}>
                        <TextField sx={{my: "3%", backgroundColor: THEME_COLORS.background}} autoFocus required id={"fname"} name={"fname"} label={"First Name"} type={"text"}></TextField>
                        <TextField sx={{my: "3%", backgroundColor: THEME_COLORS.background}} required id={"surname"} name={"surname"} label={"Surname"} type={"text"}></TextField>
                        <TextField sx={{my: "3%", backgroundColor: THEME_COLORS.background}} required id={"email"} name={"email"} label={"Email Address"} type={"email"}></TextField>
                        <TextField sx={{my: "3%", backgroundColor: THEME_COLORS.background}} required id={"subject"} name={"subject"} label={"Subject"} type={"text"}></TextField>
                        <TextField multiline rows={6} sx={{my: "3%", backgroundColor: THEME_COLORS.background }} required id={"message"} name={"message"} label={"Message"} type={"text"}></TextField>
                        <Button type={"submit"} sx={{ color: THEME_COLORS.background, backgroundColor: THEME_COLORS.action, fontWeight: 600, fontSize: "0.95rem", height: "10vh"}}>Submit Message</Button>
                    </Box>
                </form>
            </Card>
        </Box>
    )
}