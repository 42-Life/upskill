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
                    <CourseCard
                        id={course.id}
                        key={course.title}
                        title={course.title}
                        price={course.price}
                        image={course.image}
                        rating={course.rating}
                        reviewCount={course.reviewCount}
                        hours_total={course.hours_total}
                        skills={course.skills}
                        description={course.description}
                    />
                ))
            }
        </Grid>
    );
}
