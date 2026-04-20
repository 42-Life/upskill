"use client"

import CourseGrid from "@/components/course-grid";
import {Box} from "@mui/material";
import {advancedCourses, businessCourses, careerCourses, creativeCourses, techCourses} from "@/lib/data/courses";
import SectionTitle from "@/components/styled-text-dark";

export default function AllCourses() {


    return(
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SectionTitle>Dive Into Technology with our Tech Courses</SectionTitle>
            <CourseGrid courses={techCourses}/>
            <SectionTitle>Build Entrepreneurial Skills with our Business Courses</SectionTitle>
            <CourseGrid courses={businessCourses}/>
            <SectionTitle>Grow Your Artistic Side with our Creative Courses</SectionTitle>
            <CourseGrid courses={creativeCourses}/>
            <SectionTitle>Develop Your Career Fundamentals with Career Skills</SectionTitle>
            <CourseGrid courses={careerCourses}/>
            <SectionTitle>Keep Your Learning Going with Advanced Courses</SectionTitle>
            <CourseGrid courses={advancedCourses}/>
        </Box>
    );
}