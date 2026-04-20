"use client"

import CourseCard from "@/components/course-card";
import {Grid} from "@mui/material";
import {CourseGridProps} from "@/lib/aux/types";
// const courses = ["WebDev", "OtherExample", "Example3", "OneMore", "TwoMore", "ThreeMore"];

export default function CourseGrid({courses}:CourseGridProps) {
    return(
        <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
            {
                courses.map((course) => (
                    <CourseCard key={course.id} {...course} />
                ))
            }
        </Grid>
    );
}
