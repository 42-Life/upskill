import {
    Box, Card, CardMedia, Grid, Accordion, AccordionSummary, AccordionDetails,
    List, ListItem, ListItemText, Typography, Rating, Stack, Chip
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {courseMap} from "@/lib/data/courses";
// import SectionTitleLight from "@/components/styled-text-light";
import SectionTitle from "@/components/styled-text-dark";
import Subtitle from "@/components/subtitle";
import {THEME_COLORS} from "@/lib/aux/styles";
import SnackbarElem from "@/components/snackbar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

type PageProps = {
    params: Promise<{
        courseId: string;
    }>;
}

type ColumnProps = {
    props: {
        heading: string,
        bullets: string[]
    }
}

const headings = ["Learning Outcomes", "Activities & Assessments", "Career Pathways"]

function CoursePageColumn({props}: ColumnProps) {
    return(
        <Accordion disableGutters sx={{width: {md: '33.333333%', xs: '100%'}, backgroundColor:THEME_COLORS.background, slotProps: { borderRadius: 0}}}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{fontWeight:600}}>{props.heading}</Typography>
            </AccordionSummary>

            <AccordionDetails>
                <List>
                    {
                        props.bullets.slice(0,3).map((item, index) => (
                            <ListItem key={index}>
                                <ListItemText primary={item}/>
                            </ListItem>
                            // <Typography key={index} variant={"body2"}>{item}</Typography>
                        ))
                    }
                </List>
            </AccordionDetails>
        </Accordion>
    );
}

export default async function CoursePage({params}: PageProps) {
    const { courseId } = await params;
    const cleanParam = courseId?.trim() as string;

    const courseData = courseMap[cleanParam];
    if (!courseData) {
        return <div>Course could not be found: {cleanParam}...</div>;
    }

    return(
        <Card
            sx={{
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative",
                m: "3% 10%", p: 2,
                backgroundColor: THEME_COLORS.primary,
                // alignItems: "center",
            }}>
            <Box sx={{ backgroundColor: THEME_COLORS.background, alignItems: "center", display: "flex", flexDirection: "column", borderRadius: "4px 4px 0 0"}}>
                <SectionTitle>{courseData.title}</SectionTitle>
                <Subtitle>{courseData.tagline}</Subtitle>
            </Box>
            <CardMedia component="img" sx={{ height: 320, width: "100%" }} image={courseData.image} title={courseData.title} alt={courseData.title}/>
            <Grid container spacing={0} sx={{alignItems: "flex-start", flexDirection: {xs: "column", sm: "row", md: "row"}}}>
                {
                    headings.map((item, index) => (
                        <CoursePageColumn key={index} props={{heading: item, bullets: courseData.bullets[index]}}/>
                        // Index of headings array corresponds to first index of 2D string array, "bullets"
                    ))
                }
            </Grid>
            <Box>
                <Grid container sx={{display: "flex", flexDirection: "row", alignItems:"baseline", justifyContent:"space-around", mb: "1%"}}>
                    {/* Key Info Grid: Price, Reviews, Skills & Time*/}
                    <Box sx={{ display:"flex", alignItems:"center", mb:1 }}>
                        <AccessTimeIcon sx={{ fontSize: 24, mr: 0.5, fontWeight:"bold", color: THEME_COLORS.background }}/>
                        <Typography variant="h5" sx={{ fontsize: 24, fontWeight:"bold", color: THEME_COLORS.background}}>{courseData.hours_total} hrs</Typography>
                    </Box>
                    <Rating value={courseData.rating} precision={0.05} readOnly size="medium" sx={{fontSize: {md: "2.5vw", sm: "3.5vw", xs: "5.5vw"}}}/>
                    <Typography variant="h6" sx={{ fontWeight:"bold", mb:1, lineHeight: 1, color: THEME_COLORS.white, mt: 4, fontSize: '2rem',}}>
                        R{courseData.price}
                    </Typography>
                    {/*<Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>*/}
                    {/*    {courseData.skills.slice(0,3).map((skill, index) => (*/}
                    {/*        <Chip*/}
                    {/*            key={index}*/}
                    {/*            label={skill}*/}
                    {/*            size="medium"*/}
                    {/*            sx={{ borderRadius: 4, fontSize: "1rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.action, opacity:0.85}}*/}
                    {/*        />*/}
                    {/*    ))}*/}
                    {/*</Stack>*/}
                </Grid>
                <Stack direction={{md: "row", sm: "column", xs: "column"}} spacing={{md: 1, sm: 0}} sx={{ flexWrap: "wrap", mb: 2, justifyContent: "center", gap:3 }}>
                    {courseData.skills.map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            size="medium"
                            sx={{ borderRadius: 4, fontSize: "1.1rem", px:"2%", py: {md: "1%", sm: "0.5%"}, color: THEME_COLORS.white, backgroundColor: THEME_COLORS.action, opacity:0.85}}
                        />
                    ))}
                </Stack>
            </Box>

            <Box sx={{ display: "flex", flexDirection: {sm: "row", xs: "column", md:"row"}, mx: '1%', p:'1%', alignItems: "baseline", justifyContent: "center", gap: 3}}>
                {/*Price, CTA*/}
                {/*<Typography variant="h6" sx={{*/}
                {/*    fontWeight:"bold", mb:1, lineHeight: 1, color: THEME_COLORS.white, mt: 5, fontSize: '2rem',*/}
                {/*}}>R{courseData.price}*/}
                {/*</Typography>*/}
                <SnackbarElem message={"Add Course to Wishlist"} isButton={true} redirectTarget={"Wishlist"} contained={false} fullWidth={true}/>
                <SnackbarElem message={"Add Course to Cart"} isButton={true} redirectTarget={"Cart"} contained={true} fullWidth={true}/>
            </Box>

        </Card>
    )
}