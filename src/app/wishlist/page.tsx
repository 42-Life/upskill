import {Box} from '@mui/material'
import SectionTitle from "@/components/styled-text-dark";
import CompactCourseCard from "@/components/compact-course-card";
import {wishlistCourses} from "@/lib/data/courses";

export default function Wishlist() {

    return(
        <Box sx={{mx:"15%", my:"2%"}}>
            <SectionTitle>Wishlist</SectionTitle>
            <Box>
                {
                    wishlistCourses.map((course) => (
                        <CompactCourseCard key={course.id} props={{course: course, variant: "wishlist"}} />
                    ))
                }
            </Box>
        </Box>
    );
}