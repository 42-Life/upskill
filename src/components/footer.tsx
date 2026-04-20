import {THEME_COLORS} from "@/lib/aux/styles";
import {Box, Typography} from "@mui/material";
import {Link} from "@mui/material";

export default function Footer() {
    return(
        <Box
            component="footer"
            sx={{
                backgroundColor: THEME_COLORS.darkShade, color: THEME_COLORS.white,
                mt: "5%", pt: { xs: 5, md: 6 }, pb: 3, px: { xs: 3, sm: 5, md: 10 },
            }}
        >
            <Box>
                <Typography
                    variant="h5" component={Link} href="/"
                    sx={{
                        textDecoration: "none", fontFamily: "var(--font-moralana)",
                        fontWeight: 700, color: THEME_COLORS.background, display: "block", mb: 1.5,
                    }}
                >
                    UpSkill
                </Typography>
                <Typography variant="body2" sx={{ color: THEME_COLORS.background, lineHeight: 1.7 }}>Expert-led courses in tech, business, and creative fields.</Typography>
                <Typography variant="body2" sx={{ color: THEME_COLORS.background, lineHeight: 1.7 }}>Quick, affordable pathways to success.</Typography>
                <Typography variant="body2" sx={{ color: THEME_COLORS.background, lineHeight: 1.7 }}>Learn skills that get you hired.</Typography>
            </Box>
            <Typography variant="caption" sx={{ color: THEME_COLORS.background }}>© 2026 UpSkill. All rights reserved.</Typography>
        </Box>
    )
}

// // export default function Footer() {
// //     return(
// //         <Box
// //             component={"footer"}
// //         >
// //
// //         </Box>
// //         // <footer className={`backgroundColor: THEME_COLORS.darkShade, width:100%`}>
// //         //     All Rights Reserved by UpSkill
// //         // </footer>
// //     )
// // }
//
// "use client"
//
// import { Box, Typography, Divider, Stack, Link as MuiLink } from "@mui/material";
// import Link from "next/link";
// import { THEME_COLORS } from "@/lib/aux/styles";
//
// const footerLinks = [
//     {
//         heading: "Explore",
//         links: [
//             { label: "All Courses", href: "/all-courses" },
//             { label: "Tech Courses", href: "/category/tech" },
//             { label: "Business Courses", href: "/category/business" },
//             { label: "Creative Courses", href: "/category/creative" },
//         ],
//     },
//     {
//         heading: "Company",
//         links: [
//             { label: "About Us", href: "/about" },
//             { label: "Contact Us", href: "/contact" },
//         ],
//     },
//     {
//         heading: "Account",
//         links: [
//             { label: "My Courses", href: "/my-courses" },
//             { label: "Wishlist", href: "/wishlist" },
//             { label: "Cart", href: "/cart" },
//         ],
//     },
// ];
//
//
// export default function Footer() {
//     return (
//         <Box
//             component="footer"
//             sx={{
//                 backgroundColor: THEME_COLORS.darkShade,
//                 color: THEME_COLORS.white,
//                 mt: "auto",
//                 pt: { xs: 5, md: 6 },
//                 pb: 3,
//                 px: { xs: 3, sm: 5, md: 10 },
//             }}
//         >
//             {/* Top row: Brand + Links */}
//             <Box
//                 sx={{
//                     display: "flex",
//                     flexDirection: { xs: "column", md: "row" },
//                     justifyContent: "space-between",
//                     gap: { xs: 4, md: 2 },
//                     mb: 4,
//                 }}
//             >
//                 {/* Brand column */}
//                 <Box sx={{ maxWidth: 260 }}>
//                     <Typography
//                         variant="h5"
//                         component={Link}
//                         href="/"
//                         sx={{
//                             textDecoration: "none",
//                             fontFamily: "var(--font-moralana)",
//                             fontWeight: 700,
//                             color: THEME_COLORS.white,
//                             display: "block",
//                             mb: 1.5,
//                         }}
//                     >
//                         UpSkill
//                     </Typography>
//                     <Typography
//                         variant="body2"
//                         sx={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}
//                     >
//                         Expert-led courses in tech, business, and creative fields. Learn skills that get you hired.
//                     </Typography>
//                 </Box>
//
//                 {/* Link columns */}
//                 <Box
//                     sx={{
//                         display: "flex",
//                         flexDirection: { xs: "column", sm: "row" },
//                         gap: { xs: 3, sm: 6 },
//                     }}
//                 >
//                     {footerLinks.map((col) => (
//                         <Box key={col.heading}>
//                             <Typography
//                                 variant="caption"
//                                 sx={{
//                                     fontWeight: 700,
//                                     textTransform: "uppercase",
//                                     letterSpacing: "0.1em",
//                                     color: THEME_COLORS.action,
//                                     display: "block",
//                                     mb: 1.5,
//                                 }}
//                             >
//                                 {col.heading}
//                             </Typography>
//                             <Stack spacing={1}>
//                                 {col.links.map((link) => (
//                                     <MuiLink
//                                         key={link.label}
//                                         component={Link}
//                                         href={link.href}
//                                         underline="none"
//                                         sx={{
//                                             fontSize: "0.875rem",
//                                             color: "rgba(255,255,255,0.7)",
//                                             transition: "color 0.2s",
//                                             "&:hover": { color: THEME_COLORS.white },
//                                         }}
//                                     >
//                                         {link.label}
//                                     </MuiLink>
//                                 ))}
//                             </Stack>
//                         </Box>
//                     ))}
//                 </Box>
//             </Box>
//
//             <Divider sx={{ borderColor: "#ffffff73", mb: 3 }} />
//
//             <Box
//                 sx={{
//                     display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 2,
//                     alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between",
//                 }}
//             >
//                 <Typography variant="caption" sx={{ color: "#ffffff73" }}>
//                     © 2026 UpSkill. All rights reserved.
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }