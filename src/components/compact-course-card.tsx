"use client"

import {CompactCardProps, CourseCategory} from "@/lib/aux/types";
import {Card, CardMedia, CardContent, Box,IconButton, Typography} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ClearIcon from '@mui/icons-material/Clear';
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import {THEME_COLORS} from "@/lib/aux/styles";
import {useRouter} from "next/navigation";
import SnackbarElem from "@/components/snackbar";
import FilterChips from "@/components/filter-chips";
import {useCourseContext} from "@/lib/aux/course-context";

export default function CompactCourseCard({props}:CompactCardProps) {
    const router = useRouter();
    // const [inWishlist, setInWishlist] = useState(props.variant === "wishlist");
    const { addToWishlist, removeFromWishlist, isInWishlist } = useCourseContext();


    const handleSeeMore = () => router.push(`/course/${props.course.id}`);

    const toggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isInWishlist(props.course.id)) {
            removeFromWishlist(props.course.id);
        } else {
            addToWishlist(props.course);
        }
    };

    const handleRemove = (e: React.MouseEvent) => {
        e.stopPropagation();
        props.onRemove?.(props.course.id);
    };

    const primaryCategory = props.course.category?.[0] ?? "tech";

    // const handleAddToCart = (e: React.MouseEvent) => {
    //     e.stopPropagation();
    //     props.onAddToCart?.(props.course.id);
    // };

    return (
        <Card
            onClick={handleSeeMore}
            variant="outlined"
            sx={{
                display: "flex", flexDirection: "row", borderRadius: 3, borderColor: "rgba(107,144,128,0.2)",
                cursor: "pointer", mb: 1.5, "&:hover": { borderColor: THEME_COLORS.primary },
            }}
        >
            <CardMedia
                component="img" image={props.course.image} alt={props.course.title}
                sx={{
                    width: 110, minWidth: 110,
                    objectFit: "cover", borderRadius: "12px 0 0 12px",
                }}
            />

            <CardContent
                sx={{
                    flex: 1, display: "flex", flexDirection: "column", minWidth: 0,
                    justifyContent: "space-between", p: "0.75rem 1rem !important",
                }}
            >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 1 }}>
                    <Box sx={{ minWidth: 0 }}>
                        <Typography
                            sx={{
                                fontWeight: 600, fontSize: "0.9rem",
                                color: THEME_COLORS.primary,
                                lineHeight: 1.3, mb: 0.25,
                                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", // 2 line max
                                overflow: "hidden",
                            }}
                        >
                            {props.course.title}
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "0.75rem",
                                color: THEME_COLORS.primary,
                                display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                            }}
                        >
                            {props.course.tagline}
                        </Typography>
                    </Box>

                    {/* Action buttons */}
                    <Box sx={{ display: "flex", flexShrink: 0 }}>
                        {
                            props.variant ===  "cart" ?
                                <IconButton
                                    size="small"
                                    onClick={handleRemove}
                                    sx={{ p: 0.5, color: "#aaa", "&:hover": { color: "#E24B4A" } }}
                                >
                                    <ClearIcon fontSize="small" />
                                </IconButton>
                            :
                                <IconButton size="small" onClick={toggleWishlist} sx={{ p: 0.5 }}>
                                    {isInWishlist(props.course.id)
                                        ? <FavoriteIcon fontSize="small" htmlColor="#FF0000" />
                                        : <FavoriteBorderIcon fontSize="small" />}
                                </IconButton>
                        }
                    </Box>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 1, flexWrap: "wrap", gap: 0.75 }}>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                        {/* Category */}
                        <FilterChips props={{category:primaryCategory as CourseCategory, isSmall:true}} />
                        {/* Duration */}
                        <Box sx={{ display: "flex", alignItems: "center", gap: 0.25 }}>
                            <AccessTimeIcon sx={{ fontSize: 13, color: THEME_COLORS.primary }} />
                            <Typography sx={{ fontSize: "0.75rem", color: THEME_COLORS.primary }}>
                                {props.course.hours_total}hrs
                            </Typography>
                        </Box>
                        {/* Add to cart button — wishlist variant only */}
                        {props.variant === "wishlist" && (
                            <SnackbarElem message={"Add to Cart"} isButton={false} redirectTarget={"Wishlist"} contained={false} fullWidth={false} course={props.course} />
                            // <Typography
                            //     onClick={handleAddToCart}
                            //     sx={{
                            //         fontSize: "0.75rem",
                            //         color: THEME_COLORS.primary,
                            //         fontWeight: 600,
                            //         cursor: "pointer",
                            //         textDecoration: "underline",
                            //         "&:hover": { color: THEME_COLORS.primary },
                            //     }}
                            // >
                            //     Add to cart
                            // </Typography>
                        )}
                    </Box>

                    {/* Price */}
                    <Typography
                        sx={{
                            fontWeight: 700,
                            fontSize: "1rem",
                            color: THEME_COLORS.primary,
                            whiteSpace: "nowrap",
                        }}
                    >
                        R{props.course.price}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    )
}