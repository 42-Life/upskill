import {THEME_COLORS} from "@/lib/aux/styles";
import {TextField, Grid, Box, Button, Card, CardContent} from "@mui/material";
import SubtitleDark from "@/components/subtitle-dark";

export default function PaymentSummary() {
    return(
        <Grid container spacing={3}>
            <SubtitleDark>Payment Information</SubtitleDark>
            <Card variant={"outlined"} sx={{ borderRadius: 3, borderColor: THEME_COLORS.primary, width:"100%"}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={{ md: 12, xs:12}}><TextField required fullWidth type={"text"} placeholder={"Enter your name..."} label="Cardholder name"></TextField></Grid>
                        <Grid size={{ md: 12, xs:12 }}><TextField required fullWidth type={"number"} placeholder={"Enter your card number..."} label="Card number"></TextField></Grid>
                        <Grid size={{ md: 8, xs:12 }}><TextField required fullWidth type={"date"} label="Expiry date"
                                 slotProps={{
                                     htmlInput: {
                                         maxLength: 5
                                     },
                                     inputLabel: {
                                         shrink: true
                                     }
                                 }}>
                        </TextField></Grid>
                        <Grid size={{ md: 2, xs:6 }}><TextField required fullWidth type={"password"} placeholder={"123"} label="CVV"></TextField></Grid>
                        <Grid size={{ md: 2, xs:6 }}><TextField required fullWidth type={"number"} placeholder={"0000"} label="Postal code"></TextField></Grid>
                    </Grid>
                </CardContent>
            </Card>

            <SubtitleDark>Billing Details</SubtitleDark>
            <Card variant={"outlined"} sx={{ borderRadius: 3, borderColor: THEME_COLORS.primary, width:"100%", mb: "5%"}}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid size={{ md: 6, xs:12}}><TextField required fullWidth type={"text"} label="First name"></TextField></Grid>
                        <Grid size={{ md: 6, xs:12 }}><TextField required fullWidth type={"text"} label="Surname"></TextField></Grid>
                        <Grid size={{ md: 6, xs:12 }}><TextField required fullWidth type={"text"} label="Town/City"></TextField></Grid>
                        <Grid size={{ md: 6, xs:12 }}><TextField required fullWidth type={"text"} label="Country"></TextField></Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    );
}


// {/*  Totals, Discounts (if applicable)  */}
// <Divider sx={{ my: "2%", borderColor: THEME_COLORS.primary, opacity:'40%' }} />
// <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.75 }}>
//     <Typography sx={{ fontSize: "0.875rem", color: THEME_COLORS.primary }}>Subtotal</Typography>
//     {/*<Typography sx={{ fontSize: "0.875rem", color: THEME_COLORS.primary }}>R{subtotal}</Typography>*/}
// </Box>
// <Divider sx={{ my: "2%", borderColor: THEME_COLORS.primary, opacity:'40%' }} />
// <Box sx={{ display: "flex", justifyContent: "space-between", mb: "0.5%" }}>
//     <Typography sx={{ fontWeight: 700, color: THEME_COLORS.primary }}>Total</Typography>
//     {/*<Typography sx={{ fontWeight: 700, fontSize: "1rem", color: THEME_COLORS.primary }}>R{total}</Typography>*/}
// </Box>