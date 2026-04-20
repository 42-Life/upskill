import CourseGrid from "@/components/course-grid";
import { Box } from "@mui/material";
import SectionTitle from "@/components/styled-text-dark";
import { CourseCategory } from "@/lib/aux/types";
import { CourseCategoryMappings } from "@/lib/data/courses";

type PageProps = {
    params: Promise<{
        category: CourseCategory;
    }>;
};

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params; // pulls params from URL
    const cleanParam = category?.trim() as CourseCategory;

    const categoryData = CourseCategoryMappings[cleanParam];
    // console.log("CAT DATA:", categoryData);

    if (!categoryData) {
        return <div>Category not found: {cleanParam}</div>;
    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <SectionTitle>{categoryData.tagline}</SectionTitle>
            <CourseGrid courses={categoryData.courses} />
        </Box>
    );
}