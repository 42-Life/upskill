"use client"

import {Box, Grid} from "@mui/material";
import SectionTitle from "@/components/styled-text-dark";
import OrderSummary from "@/components/order-summary";
import {cartCourses} from "@/lib/data/courses";
import SubtitleDark from "@/components/subtitle-dark";
import PaymentSummary from "@/components/payment-summary";
import {useState} from "react";

export default function Checkout() {
    const [formSubmitted, setFormSubmitted] = useState(true);

    return(
        <>
            <SectionTitle>Checkout</SectionTitle>
            <Box sx={{mr:"1%", display:"flex", justifyContent: "center", width: "100%"}}>

                <Grid container spacing={4} sx={{width: "70%"}}>
                    <Grid size={{ xs: 12, md: 6.5}}>
                        <PaymentSummary />
                    </Grid>

                    <Grid size={{ xs: 12, md: 5.5}} >
                        <SubtitleDark>Order Summary</SubtitleDark>
                        <OrderSummary props={{cart:cartCourses, isCheckout:true, canPay:formSubmitted}} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}