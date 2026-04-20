"use client"

import { Box, Typography } from "@mui/material";
import SectionTitle from "@/components/styled-text-dark";
import CompactCourseCard from "@/components/compact-course-card";
import {useCourseContext} from "@/lib/aux/course-context";
import {Course} from "@/lib/aux/types";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function MyCourses() {
    const { myCourses } = useCourseContext();

    return (
        <Box sx={{ mx: "15%", my: "2%" }}>
            <SectionTitle>My Courses</SectionTitle>
            {
                myCourses.length === 0 ?
                    <Typography sx={{ mt: 4, color: THEME_COLORS.primary }}>
                        You have not purchased any courses yet.
                    </Typography>
                :
                myCourses.map((course:Course) => (
                    <CompactCourseCard
                        key={course.id}
                        props={{ course, variant: "my-courses" }}
                    />
                ))
            }
        </Box>
    );
}