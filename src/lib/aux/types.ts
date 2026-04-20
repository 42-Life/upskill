import React from "react";

export type Course = {
    id: string;
    title: string;
    price: number;
    image: string;
    rating: number;
    reviewCount: number;
    hours_total: number;
    skills: string[];
    description: string;
    category: string[];

    // used for course page display
    tagline: string;
    bullets: string[][];
}

export type CourseCategory = "tech" | "business" | "creative" | "career" | "advanced";

export type CourseGridProps = {
    courses: Course[];
}

export type TriListColumn = {
    id: number;
    summary: string;
    bullet: string[];
}

export type cartButtonProps = {
    props: {
        buttonMessage: string,
        onClickAction: (e:React.MouseEvent) => void,
        contained: boolean,
        fullWidth: boolean,
    }
}

export type SnackProps = {
    message: string,
    isButton: boolean,
    redirectTarget: string, // go to checkout, wishlist, or cart
    contained: boolean,
    fullWidth: boolean,
}

export type CompactCardProps = {
    props: {
        course: Course,
        variant: "cart" | "wishlist"
        onAddToCart?: (id: string) => void;
        onRemove?: (id: string) => void;
    }
}