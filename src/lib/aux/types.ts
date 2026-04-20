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
    course: Course,
}

export type CompactCardProps = {
    props: {
        course: Course,
        variant: "cart" | "wishlist" | "my-courses",
        onAddToCart?: (id: string) => void;
        onRemove?: (id: string) => void;
    }
}

export type CourseContextType = {
    cart: Course[];
    wishlist: Course[];
    myCourses: Course[];
    addToCart: (course: Course) => void;
    removeFromCart: (id: string) => void;
    addToWishlist: (course: Course) => void;
    removeFromWishlist: (id: string) => void;
    isInCart: (id: string) => boolean;
    isInWishlist: (id: string) => boolean;
    completePurchase: () => void;
}