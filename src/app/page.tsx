"use client"

import CourseGrid from "@/components/course-grid";
import {allCourses} from "@/lib/data/courses";
import {Box, Grid, Typography} from "@mui/material";
import {THEME_COLORS} from "@/lib/aux/styles";
import Searchbar from "@/components/searchbar";
import FilterChips from "@/components/filter-chips";
import {CourseCategory} from "@/lib/aux/types";
import {useState} from "react";

const categories:CourseCategory[] = ["tech" , "business" , "creative" , "career" , "advanced"]

export default function Home() {
    // Filter system, using MUI Chips -- useState & fns controlling active filter and corresponding display
    const [filter, setFilter] = useState<CourseCategory|"all">("all");

    const handleFilterClick = (category: CourseCategory | "all") => {
        setFilter(prev => prev === category ? "all" : category);
    };

    const filteredCatalogue =
        filter === "all"
            ? allCourses
        :
            allCourses.filter(course => course.category.includes(filter));

    return(
        <>
            {/* Splash Landing*/}
            <Box sx={{ backgroundColor: THEME_COLORS.primary, py: { xs: 6, md: 10 }, px: { xs: 3, md: 10 }, textAlign: "center"}}>
                <Typography variant="h2" sx={{ color: THEME_COLORS.background, fontWeight: 800, mb: 2 }}>
                    Learn Skills That Get You Hired
                </Typography>
                <Typography variant="h6" sx={{ color: THEME_COLORS.background, opacity: 0.85, mb: 4 }}>
                    Expert-led courses in tech, business, and creative fields. Quick, affordable pathways to success.
                </Typography>
                <Box sx={{justifyContent: "center", width: "90%", alignItems: "center"}}>
                    <Searchbar/>
                </Box>
            </Box>

            {/* Courses Display & Filter*/}
            <Grid container spacing={2} sx={{display:"flex", flexDirection: {md: "row", sm: "column"}, alignItems: "center", justifyContent: "space-between", m: "3% 10%"}}>
                {/*<SectionTitle>Featured Courses</SectionTitle>*/}
                {
                    categories.map((category) => (
                        <FilterChips key={category} props={{
                            category:category, isSmall:false,
                            isActive: filter===category,
                            onClick: () => handleFilterClick(category)
                        }} />
                    ))
                }
            </Grid>
            <CourseGrid courses={filteredCatalogue} />
        </>
    );
}