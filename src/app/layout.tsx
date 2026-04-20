import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProv from "@/lib/aux/ThemeProv";
import Footer from "@/components/footer";
import {CourseContextProvider} from "@/lib/aux/course-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UpSkill: Skills-based Courses For You",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body className="min-h-full flex flex-col">
        <CourseContextProvider>
          <AppRouterCacheProvider>
            <ThemeProv>
              <Nav/>
              <main style={{minHeight: "100vh"}}>
                {children}
              </main>
              <Footer/>
            </ThemeProv>
          </AppRouterCacheProvider>
        </CourseContextProvider>
      </body>
    </html>
  );
}
