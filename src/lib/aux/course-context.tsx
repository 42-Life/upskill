"use client"

import { createContext, useContext, useState, ReactNode } from "react";
import { Course, CourseContextType } from "@/lib/aux/types";

const CourseContext = createContext<CourseContextType | null>(null);

// Used for global state management. Now cart & wishlist can actually be functional
export function CourseContextProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Course[]>([]);
    const [wishlist, setWishlist] = useState<Course[]>([]);
    const [myCourses, setMyCourses] = useState<Course[]>([]);

    // core functions for adding, removing, validating
    const addToCart = (course: Course) => {
        setCart(prev => prev.find(c => c.id === course.id) ? prev : [...prev, course]);
    };

    const removeFromCart = (id: string) => {
        setCart(prev => prev.filter(c => c.id !== id));
    };

    const addToWishlist = (course: Course) => {
        setWishlist(prev => prev.find(c => c.id === course.id) ? prev : [...prev, course]);
    };

    const removeFromWishlist = (id: string) => {
        setWishlist(prev => prev.filter(c => c.id !== id));
    };

    const completePurchase = () => {
        // cards move fr cart -> my courses
        setMyCourses(prev => {
            const newCourses = cart.filter(c => !prev.find(p => p.id === c.id));
            return [...prev, ...newCourses];
        });
        setCart([]);  // Clear cart
    };

    const isInCart = (id: string) => cart.some(c => c.id === id);
    const isInWishlist = (id: string) => wishlist.some(c => c.id === id);

    return (
        <CourseContext.Provider value={{
            cart, wishlist, myCourses,
            addToCart, removeFromCart,
            addToWishlist, removeFromWishlist,
            isInCart, isInWishlist,
            completePurchase
        }}>
            {children}
        </CourseContext.Provider>
    );
}

// custom context hook
export function useCourseContext() {
    const context = useContext(CourseContext);
    if (!context) throw new Error("useCourseContext must be used within CourseProvider");
    return context;
}