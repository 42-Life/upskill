import SubtitleDark from "@/components/subtitle-dark";
import SectionTitle from "@/components/styled-text-dark";
import {Box} from "@mui/material";

export default function ConfirmationPage() {
    return(
        <Box sx={{mt: {md: "15%", sm: "25%", xs: "35%"}, mx: "10%"}}>
            <SectionTitle>Your payment has been confirmed.</SectionTitle>
            <SubtitleDark>Thank you for shopping with UpSkill. Click your profile to view your courses. Happy learning!</SubtitleDark>
        </Box>
    );
}