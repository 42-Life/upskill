"use client"

import {Box, Grid} from "@mui/material";
import SectionTitle from "@/components/styled-text-dark";
import OrderSummary from "@/components/order-summary";
import {cartCourses} from "@/lib/data/courses";
import SubtitleDark from "@/components/subtitle-dark";
import PaymentSummary from "@/components/payment-summary";
import {useState} from "react";
import {useCourseContext} from "@/lib/aux/course-context";
import {useRouter} from "next/navigation";

export default function Checkout() {
    const [formSubmitted, setFormSubmitted] = useState(true);
    const { cart, completePurchase } = useCourseContext();
    const router = useRouter();

    const handleCompletePurchase = () => {
        completePurchase();             // clears cart, moves to myCourses
        router.push("/my-courses");     // redirect after purchase
    };

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
                        <OrderSummary props={{isCheckout:true, canPay:formSubmitted, onCompletePurchase:handleCompletePurchase}} />
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}