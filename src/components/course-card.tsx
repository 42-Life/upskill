"use client"

// Key imports
// skeleton components
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Chip,
    Button,
    Rating,
    Stack,
    IconButton
} from "@mui/material"

// icons
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// hooks
import {useRouter} from "next/navigation";
import { useState } from "react";

// custom theme
import {THEME_COLORS} from "@/lib/aux/styles";
import SnackbarElem from "@/components/snackbar";
import {useCourseContext} from "@/lib/aux/course-context";

type CourseCardProps = {
    id: string,
    title: string,
    price: number,
    image: string,
    rating: number,
    reviewCount: number,
    hours_total: number,
    skills: string[],
    description: string,
    tagline: string,
    bullets: string[][],
    category: string[],
}

export default function CourseCard(props: CourseCardProps) {
    // hooks
    const router = useRouter();
    const { addToWishlist, removeFromWishlist, isInWishlist } = useCourseContext();
    // const [inWishlist, setInWishlist] = useState(false);

    // const handlePurchase = (e: React.MouseEvent) => {
    //     e.stopPropagation();    // stops handleSeeMore from overriding this button
    //     router.push(`/checkout`);       // if course selected, move to checkout
    // };

    const handleSeeMore = () => {
        router.push(`/course/${props.id}`);
    }

    const toggleWishlist = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isInWishlist(props.id)) {
            removeFromWishlist(props.id);
        } else {
            addToWishlist(props);
        }
    };

    return (
        <Card
            sx={{
                maxWidth: 350,
                borderRadius: 3,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                position: "relative",
                m: 2, p: 2
            }}
            onClick={handleSeeMore}
        >
            {/* Image for course */}
            <CardMedia component="img" sx={{ height: 180 }} image={props.image} title={props.title} alt={props.title}/>
            <CardContent sx={{ flexGrow: 1 }}>

                {/*Title & Heart*/}
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold" }}>{props.title}</Typography>
                    <IconButton
                        onClick={toggleWishlist}
                    >{isInWishlist(props.id) ? <FavoriteIcon htmlColor={"#FF0000"}/> : <FavoriteBorderIcon/>}
                    </IconButton>
                </Box>

                {/*  Additional info for course  */}
                <Box sx={{ display:"flex", alignItems:"center", justifyContent: "space-between", mb:1 }}>
                    <Box sx={{ display:"flex", alignItems:"center" }}>
                        <Rating value={props.rating} precision={0.5} readOnly size="small"/>
                        <Typography variant="body2" sx={{ ml:1 }}>{
                            // Conditional formatting based on num of reviews
                            props.reviewCount < 1000 ?
                                props.reviewCount
                            : props.reviewCount < 1000000 ?
                                props.reviewCount / 1000 + 'K'
                            : props.reviewCount / 1000000 + 'M'
                        }</Typography>
                    </Box>
                </Box>
                <Box sx={{ display:"flex", alignItems:"center", mb:1 }}>
                    <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5 }}/>
                    <Typography variant="body2">{props.hours_total} hrs</Typography>
                </Box>

                {/*  Target skills  */}
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 2 }}>
                    {props.skills.slice(0,3).map((skill, index) => (
                        <Chip
                            key={index}
                            label={skill}
                            size="small"
                            sx={{ borderRadius: 4, fontSize: "0.75rem", color: THEME_COLORS.white, backgroundColor: THEME_COLORS.lightAction, opacity:0.85}}
                        />
                    ))}
                </Stack>

                {/*  Desc  */}
                <Typography variant="body2"
                    sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden"}}>
                    {props.description}
                </Typography>
            </CardContent>

            {/*  CTA  */}
            <Box>
                <Box sx={{ p:2, display:"flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Typography variant="h6" sx={{ fontWeight:"bold", mb:1, lineHeight: 1 }}>R{props.price}</Typography>
                </Box>
                <SnackbarElem message={"Add Course to Cart"} isButton={true} redirectTarget={"Cart"} contained={true} fullWidth={false} course={props}/>
                {/*<Button*/}
                {/*    variant="contained" fullWidth*/}
                {/*    onClick={handlePurchase}*/}
                {/*    sx={{*/}
                {/*        borderRadius: 4, fontWeight: "bold", textTransform: "none", p: 2, backgroundColor: THEME_COLORS.action,*/}
                {/*        '&:hover': {*/}
                {/*            backgroundColor: THEME_COLORS.lightAction*/}
                {/*        },*/}
                {/*        mb: 1.5,*/}
                {/*}}*/}
                {/*>*/}
                {/*    Get Course*/}
                {/*</Button>*/}
                <Button
                    variant="outlined" fullWidth
                    onClick={handleSeeMore}
                    sx={{
                        borderRadius: 4, fontWeight: "bold", textTransform: "none", p: 2,
                        color: 'primary'
                    }}
                >
                    See More...
                </Button>
            </Box>
        </Card>
    )
}