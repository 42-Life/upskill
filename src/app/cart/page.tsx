"use client"

import {Box, Button, Grid,} from '@mui/material';
import CompactCourseCard from "@/components/compact-course-card";
// import {cartCourses} from "@/lib/data/courses";
import SectionTitle from "@/components/styled-text-dark";
import OrderSummary from "@/components/order-summary";
import {THEME_COLORS} from "@/lib/aux/styles";
import {useRouter} from "next/navigation";
import {useCourseContext} from "@/lib/aux/course-context";
import {Course} from "@/lib/aux/types";

export default function Cart() {
    const { cart, removeFromCart } = useCourseContext();
    const router = useRouter();

    const handleCheckout = () => {
        router.push("/checkout");
    }

    const handleKeepBrowsing = () => {
        router.push('/all-courses');
    }

    return(
        <Box sx={{mx:"15%", my:"2%"}}>
            {/* Cart heading*/}
            {/* Display */}
            <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", flex:1}}>

            </Box>
            {/* Main content*/}
            <Grid container spacing={3}>
                <Grid size={{xs: 12, md: 7}}>
                    <SectionTitle>Selected Courses</SectionTitle>
                    {
                        cart.map((course:Course) => (
                            <CompactCourseCard key={course.id} props={{course: course, variant: "cart", onRemove: removeFromCart}} />
                        ))
                    }
                </Grid>
                <Grid size={{xs: 12, md: 5}}>
                    <SectionTitle>Order Summary</SectionTitle>
                    <OrderSummary props={{isCheckout:false}} />
                    <Box>
                        <Button variant="contained" fullWidth onClick={handleCheckout}
                            sx={{ my:"2.5%", borderRadius: '10px', backgroundColor: THEME_COLORS.action, '&:hover': {backgroundColor: THEME_COLORS.lightAction}
                        }}>
                            Proceed to Checkout
                        </Button>
                        <Button variant="contained" fullWidth onClick={handleKeepBrowsing} sx={{ borderRadius: '10px'}}>Continue Browsing</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}