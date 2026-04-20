"use client"

import { Box, Card, CardContent, Divider, Typography, Button } from "@mui/material";
import { Course } from "@/lib/aux/types";
import {THEME_COLORS} from "@/lib/aux/styles";
import {useRouter} from "next/navigation";

type OrderSummaryProps = {
    props: {
        cart: Course[];
        isCheckout: boolean;
        canPay?: boolean;
        onCompletePurchase?: () => void;
    }
}

export default function OrderSummary({props}: OrderSummaryProps) {
    const subtotal = props.cart.reduce((sum, course) => sum + course.price, 0);
    const total = subtotal;
    const router = useRouter();

    const handlePayment = () => {
        if (props.canPay===true) {
            router.push("/confirmation")
        } else {
            router.push("/checkout");
        }
    }
    // somewhat rudimentary validation, but can suffice for now

    return(
        <Card variant={"outlined"} sx={{ borderRadius: 3, borderColor: THEME_COLORS.primary, width:"100%"}}>
            <CardContent>
                {
                    props.cart.map((course) => (
                        <Box key={course.id} sx={{
                            display: "flex", justifyContent: "space-between", mb: 0.75
                        }}>
                            <Typography
                                variant="body2" color="textSecondary" component="p" sx={{
                                    fontSize: '0.9rem', overflow: 'hidden', maxWidth: '65%'
                            }}
                            >
                                {course.title}
                            </Typography>
                            <Typography
                                variant="body2" color="textSecondary" component="p" sx={{
                                fontSize: '0.9rem'
                            }}
                            >
                                R{course.price}
                            </Typography>
                        </Box>
                    ))
                }
                {/*  Totals, Discounts (if applicable)  */}
                <Divider sx={{ my: "2%", borderColor: THEME_COLORS.primary, opacity:'40%' }} />
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.75 }}>
                    <Typography sx={{ fontSize: "1rem", color: THEME_COLORS.primary }}>Subtotal</Typography>
                    <Typography sx={{ fontSize: "1rem", color: THEME_COLORS.primary }}>R{subtotal}</Typography>
                </Box>
                <Divider sx={{ my: "2%", borderColor: THEME_COLORS.primary, opacity:'40%' }} />
                <Box sx={{ display: "flex", justifyContent: "space-between", mb: "0.5%" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.25rem", color: THEME_COLORS.primary }}>Total</Typography>
                    <Typography sx={{ fontWeight: 700, fontSize: "1.25rem", color: THEME_COLORS.primary }}>R{total}</Typography>
                </Box>

                {
                    props.isCheckout ?
                        <Button variant={"contained"} fullWidth onClick={props.onCompletePurchase} disabled={!props.canPay} sx={{
                            borderRadius: 4, fontWeight: "bold", fontSize: "1.2rem", textTransform: "none", p: 2, mt: "4%",
                            color: 'primary',
                        }}>
                            Pay R{total}
                        </Button>
                    :
                        <></>
                }

            </CardContent>
        </Card>
    );
}