"use client"

import * as React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

import {
    AppBar, Toolbar, Typography, IconButton, Button, Box, Menu, MenuItem,
    Drawer, Divider, List, ListItem, ListItemButton, ListItemText,
    useMediaQuery, useTheme,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {THEME_COLORS} from "@/lib/aux/styles";
import Searchbar from "@/components/searchbar";
import {useState} from "react";
import Signup from "@/components/signup";

const menuNames = ["About", "Contact Us"];
const menuLinks =  ["about", "contact"];
// const dropdownNames = ["Wishlist", "My Courses", "Logout"];
// const dropdownLinks = ["wishlist", "my-courses", "logout"];
const courseDropdown = ["Tech Courses", "Business Courses", "Creative Courses", "Career Prep Courses", "Advanced Courses"];
const courseDropdownLinks = ["tech", "business", "creative", "career", "advanced"]

type burgerProps = {
    props: {
        open: boolean;
        onClose: () => void;
    }
}

// MOBILE VERSION: Hamburger menu
function HamburgerMenu({props}:burgerProps) {
    return(
        <Drawer open={props.open} onClose={props.onClose}>
                <Box sx={{width: 250, role: "presentation", backgroundColor: THEME_COLORS.background, color: THEME_COLORS.darkShade, height: "100vh"}}>
                <Typography variant="h6" sx={{ p: 2, fontFamily: 'var(--font-moralana)', fontWeight: 600, }}>
                    UpSkill
                </Typography>
                <Divider/>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} href="/all-courses" onClick={props.onClose}>
                            <ListItemText primary="All Courses" />
                        </ListItemButton>
                    </ListItem>
                    {courseDropdown.map((name, index) => (
                        <ListItemButton key={index} component={Link} href={`/category/${courseDropdownLinks[index]}`} onClick={props.onClose}>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    ))}
                    <Divider/>
                    {menuNames.map((name, index) => (
                        <ListItemButton key={index} component={Link} href={`/${menuLinks[index]}`} onClick={props.onClose}>
                            <ListItemText primary={name} />
                        </ListItemButton>
                    ))}
                    {/*<Divider/>*/}
                    {/*<ListItemButton component={Button} onClick={() => {}}>*/}
                    {/*    <ListItemText primary={"Sign Up / Login"}/>*/}
                    {/*</ListItemButton>*/}
                </List>
            </Box>
        </Drawer>
    )
}

export default function Nav() {
    // mobile:
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [mobileOpen, setMobileOpen] = useState(false);

    // STANDARD DESKTOP
    const router = useRouter();
    const [profileAnchorEl, setProfileAnchorEl] = useState<null | HTMLElement>(null);
    const [coursesAnchorEL, setCoursesAnchorEl] = useState<null | HTMLElement>(null);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setProfileAnchorEl(event.currentTarget);
    };

    const handleProfileMenuClose = () => {
        setProfileAnchorEl(null);
    };

    const handleCourseMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setCoursesAnchorEl(event.currentTarget);
    };

    const handleCourseMenuClose = () => {
        setCoursesAnchorEl(null);
    };

    return (
        <AppBar position="static" elevation={1} sx={{ color: THEME_COLORS.white, backgroundColor: THEME_COLORS.darkShade }}>
            <Toolbar>

                {/* Hamburger for movile */}
                {isMobile && (
                    <IconButton color="inherit" edge="start" onClick={() => setMobileOpen(true)} sx={{ mr: 1 }}>
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Logo / Brand */}
                <Typography
                    variant="h4"
                    component={Link}
                    href="/"
                    sx={{
                        textDecoration: "none",
                        fontFamily: 'var(--font-moralana)',
                        fontWeight: 600,
                        color: THEME_COLORS.background,
                    }}
                >
                    UpSkill
                </Typography>

                {/* Search bar*/}
                <Box sx={{
                    width: { xs: "0%", sm: 240, md: "40%" }, mx:2, display: { xs:"none", sm: "block"}
                }}>
                    <Searchbar />
                </Box>

                {/* Spacer */}
                <Box sx={{ flexGrow: 1 }} />

                {/* Dropdown for Courses */}

                {/* Navigation Links (hidden on mo */}
                {!isMobile && (
                    <Box sx={{ display: "flex", gap: 2}}>
                        <Button color="inherit" onClick={handleCourseMenuOpen}>
                            Courses
                        </Button>
                        {
                            menuNames.map((menuName, index) => (
                                <Button key={index} component={Link} href={`/${menuLinks[index]}`} color="inherit">
                                    {menuName}
                                </Button>
                            ))
                        }
                    </Box>
                )}

                {/* MOBILE MENU */}
                <HamburgerMenu props={{open: mobileOpen, onClose: () => setMobileOpen(false)}} />

                {/* Right Section */}
                <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>

                    {/* Signup CTA + Dialogue popup after */}
                    <Signup props={{signInReason: "Please enter your e-mail address and password to sign-up or login", isButton:true}} />

                    {/* ICONS SECTION*/}
                    {/* Cart Icon */}
                    <IconButton onClick={() => router.push('/cart')} sx={{
                        color: THEME_COLORS.action,
                        '&:hover': {
                            color: THEME_COLORS.lightAction
                        }
                    }}>
                        <ShoppingBasketIcon />
                    </IconButton>

                    {/* Profile Icon */}
                    <IconButton onClick={handleProfileMenuOpen} sx={{
                        color: THEME_COLORS.action,
                        '&:hover': {
                            color: THEME_COLORS.lightAction
                        }
                    }}>
                        <AccountCircleIcon />
                    </IconButton>

                    {/* Dropdown Menu */}
                    <Menu
                        anchorEl={profileAnchorEl}
                        open={Boolean(profileAnchorEl)}
                        onClose={handleProfileMenuClose}
                    >
                        <MenuItem onClick={handleProfileMenuClose}>
                            <Link href="/wishlist" style={{ textDecoration: "none", color: "inherit" }}>
                                Wishlist
                            </Link>
                        </MenuItem>

                        <Signup props={{signInReason:"Please sign-up or login to save and access courses", isButton:false}} />

                        <MenuItem onClick={handleProfileMenuClose}>
                            <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
                                Logout
                            </Link>
                        </MenuItem>
                        {/*{*/}
                        {/*    dropdownNames.map((item, index) => (*/}
                        {/*        <MenuItem key={item} onClick={() => { handleProfileMenuClose();}}>*/}
                        {/*            <Link href={`/${dropdownLinks[index]}`}>*/}
                        {/*                {dropdownNames[index]}*/}
                        {/*            </Link>*/}
                        {/*        </MenuItem>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </Menu>

                    {/* COURSES MENU DROPDOWN*/}
                    <Menu
                        anchorEl={coursesAnchorEL}
                        open={Boolean(coursesAnchorEL)}
                        onClose={handleCourseMenuClose}
                    >
                        <MenuItem onClick={handleCourseMenuClose}>
                            <Link href="/all-courses" style={{ textDecoration: "none", color: "inherit" }}>
                                All Courses
                            </Link>
                        </MenuItem>
                        {
                            courseDropdown.map((courseDropdown, index) => (
                                <MenuItem key={index} onClick={() => { handleCourseMenuClose();}}>
                                    <Link href={`/category/${courseDropdownLinks[index]}`}>
                                        {courseDropdown}
                                    </Link>
                                </MenuItem>
                            ))
                        }
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}