"use client"

import {Box, Typography} from '@mui/material'
import SectionTitle from "@/components/styled-text-dark";
import CompactCourseCard from "@/components/compact-course-card";
// import {wishlistCourses} from "@/lib/data/courses";
import {useCourseContext} from "@/lib/aux/course-context";
import {THEME_COLORS} from "@/lib/aux/styles";

export default function Wishlist() {
    const { wishlist, removeFromWishlist } = useCourseContext();

    return(
        <Box sx={{mx:"15%", my:"2%"}}>
            <SectionTitle>Wishlist</SectionTitle>
            <Box>
                {
                    wishlist.length === 0 ?
                        <Typography sx={{ mt: 4, color: THEME_COLORS.primary }}>
                            You have not added any courses to your wishlist.
                        </Typography>
                        :
                        wishlist.map((course) => (
                            <CompactCourseCard key={course.id} props={{course: course, variant: "wishlist", onRemove: removeFromWishlist}} />
                        ))
                }
            </Box>
        </Box>
    );
}