import {Box, Grid, Typography, List, ListItem, Chip} from '@mui/material'
import SectionTitle from "@/components/styled-text-dark";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function About() {
    return(
        <Box sx={{mx:"15%", my:"2%"}}>
            <SectionTitle>About UpSkill</SectionTitle>
            <Grid container>
                <Typography>UpSkill is a digital learning platform designed to bridge the gap between education and employability. We provide practical, accessible, and industry-relevant courses that empower individuals to build real-world skills and confidently pursue career opportunities in a rapidly evolving digital economy.</Typography>
                <Typography>At its core, UpSkill is more than just an online course marketplace — it is a platform built to unlock potential. Whether you're starting from scratch, changing careers, or enhancing your current skill set, UpSkill equips you with the tools to grow.</Typography>
            </Grid>
            <SectionTitle>What Makes UpSkill Different?</SectionTitle>
            <Typography sx={{mb: "2%"}}>UpSkill stands out by focusing on outcomes, not just content. Our courses are designed to be:</Typography>
            <Grid container spacing={2} sx={{align:"center", justifyContent:"space-between", mx: "8%"}}>
                <Grid size={{xs:6, md:4}}><Chip label={"Practical and hands-on"} size="medium"
                    sx={{ mt: "2%", borderRadius: 4, fontSize: "0.9rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.primary, opacity:0.85}}
                /></Grid>
                <Grid size={{xs:6, md:4}}><Chip label={"Easy to follow and beginner-friendly"} size="medium"
                      sx={{ mt: "2%", borderRadius: 4, fontSize: "0.9rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.primary, opacity:0.85}}
                /></Grid>
                <Grid size={{xs:6, md:4}}><Chip label={"Affordable and accessible"} size="medium"
                      sx={{ mt: "2%", borderRadius: 4, fontSize: "0.9rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.primary, opacity:0.85}}
                /></Grid>
                <Grid size={{xs:6, md:4}}><Chip label={"Aligned with real-world applications"} size="medium"
                      sx={{ mt: "2%", borderRadius: 4, fontSize: "0.9rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.primary, opacity:0.85}}
                /></Grid>
                <Grid size={{xs:6, md:4}}><Chip label={"Build confidence and competence"} size="medium"
                      sx={{ mt: "2%", borderRadius: 4, fontSize: "0.9rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.primary, opacity:0.85}}
                /></Grid>
                <Grid size={{xs:6, md:4}}><Chip label={"Professional and robust in quality"} size="medium"
                    sx={{ mt: "2%", borderRadius: 4, fontSize: "0.9rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.primary, opacity:0.85}}
                /></Grid>
            </Grid>

            <Grid container spacing={8}>
                {/* Vertical in mboile layout */}
                <Grid size={{xs:12, md:6}}>
                    <SectionTitle>Our Mission</SectionTitle>
                    <Typography>Our mission is to make high-quality, practical education accessible to everyone, regardless of their background or location. We aim to remove barriers to learning by offering structured, easy-to-follow courses that focus on real, applicable skills.</Typography>
                    <Typography>We believe that education should not only inform but transform — turning knowledge into opportunity and ambition into tangible outcomes.</Typography>

                    <SectionTitle>Our Vision</SectionTitle>
                    <Typography>UpSkill envisions a future where access to meaningful education directly translates into employment and entrepreneurship opportunities.</Typography>
                    <Typography>We strive to become a leading platform that:</Typography>
                    <List>
                        <ListItem>Empowers individuals with job-ready skills</ListItem>
                        <ListItem>Supports continuous learning and personal growth</ListItem>
                        <ListItem>Connects education with real economic outcomes</ListItem>
                    </List>
                    <Typography>Our long-term vision is to help shape a workforce that is adaptable, innovative, and prepared for the demands of the modern world.</Typography>

                    <SectionTitle>Our Goals</SectionTitle>
                    <List>
                        <ListItem>Reduce unemployment by equipping individuals with skills that are in demand</ListItem>
                        <ListItem>Improve employability through practical, hands-on learning experiences</ListItem>
                        <ListItem>Promote lifelong learning in an increasingly digital and competitive job market</ListItem>
                        <ListItem>Provide affordable education that is accessible to a wide audience</ListItem>
                        <ListItem>Create pathways to opportunity, including freelancing, entrepreneurship, and formal employment</ListItem>
                    </List>
                </Grid>
                <Grid size={{xs:12, md:6}}>
                    <SectionTitle>Impact on South Africa</SectionTitle>
                    <Typography>South Africa faces significant challenges with unemployment, particularly among young people. UpSkill is committed to being part of the solution</Typography>
                    <Typography>By focusing on relevant, high-demand skills, particularly in areas like technology, design, and digital business, UpSkill aims to:</Typography>
                        <ListItem>Equip South Africans with skills that align with market needs</ListItem>
                        <ListItem>Enable individuals to access both local and global job opportunities</ListItem>
                        <ListItem>Support entrepreneurship and self-employment</ListItem>
                        <ListItem>Contribute to economic growth through a more skilled workforce</ListItem>
                    <Typography>We believe that by improving access to quality education, we can help reduce unemployment and increase economic participation across the country.</Typography>

                    <SectionTitle>A Global Platform</SectionTitle>
                    <Typography>While UpSkill is rooted in addressing challenges in South Africa, our platform is built for a global audience.</Typography>
                    <Typography>We welcome learners from around the world to:</Typography>
                        <ListItem>Access our courses</ListItem>
                        <ListItem>Develop valuable, transferable skills</ListItem>
                        <ListItem>Participate in a global learning community</ListItem>
                    <Typography>Knowledge has no borders, and neither should opportunities. UpSkill is designed to ensure that anyone, anywhere, can benefit from accessible, high-quality education.</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}