import {Course, CourseCategory} from "@/lib/aux/types";

// CATEGORIES
// Tech Courses

export const testPage: Course = {
    id: "web-dev-101",
    title: "Introduction to Web Development",
    price: 299,
    image: "/assets/How-to-Become-a-Web-Developer-NEW.webp",
    rating: 5,
    reviewCount: 1240,
    hours_total: 15,
    skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: ["tech"],
    tagline: "Learners build modern websites from scratch, progressing from structured HTML and styled layouts to interactive pages and deployable projects.",
    description:
        "Learn how to build modern websites from scratch using HTML, CSS, and JavaScript. You will develop real-world projects including a portfolio site and responsive web pages, preparing you for entry-level front-end development roles.",
    bullets: [
        [
            "HTML structure and semantic markup",
            "CSS layout (Flexbox, Grid, responsive design)",
            "JavaScript basics (interactivity, DOM manipulation)",
            "Website deployment (Netlify / Vercel basics)"
        ],
        [
            "Build a personal portfolio website",
            "Create a landing page for a fictional business",
            "Final project: fully responsive multi-page website"
        ],
        [
            "Junior front-end developer (entry-level internships)",
            "Freelance web designer",
            "Digital marketing assistant (web/content support roles)",
            "CMS assistant (WordPress/Webflow roles)"
        ]
    ]
}

export const techCourses: Course[] = [
    {
        id: "web-dev-101",
        title: "Introduction to Web Development",
        price: 299,
        image: "/assets/How-to-Become-a-Web-Developer-NEW.webp",
        rating: 5,
        reviewCount: 1240,
        hours_total: 15,
        skills: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        category: ["tech"],
        tagline: "Learners build modern websites from scratch, progressing from structured HTML and styled layouts to interactive pages and deployable projects.",
        description:
            "Learn how to build modern websites from scratch using HTML, CSS, and JavaScript. You will develop real-world projects including a portfolio site and responsive web pages, preparing you for entry-level front-end development roles.",
        bullets: [
            [
                "HTML structure and semantic markup",
                "CSS layout (Flexbox, Grid, responsive design)",
                "JavaScript basics (interactivity, DOM manipulation)",
                "Website deployment (Netlify / Vercel basics)"
            ],
            [
                "Build a personal portfolio website",
                "Create a landing page for a fictional business",
                "Final project: fully responsive multi-page website"
            ],
            [
                "Junior front-end developer (entry-level internships)",
                "Freelance web designer",
                "Digital marketing assistant (web/content support roles)",
                "CMS assistant (WordPress/Webflow roles)"
            ]
        ]

    },
    {
        id: "excel-data-analysis",
        title: "Introduction to Data Analysis with Excel",
        price: 349,
        image: "/assets/images/data-analysis-excel.jpg",
        rating: 4.9,
        reviewCount: 1560,
        hours_total: 20,
        skills: ["Excel", "Pivot Tables", "Data Cleaning", "Dashboards"],
        category: ["tech"],
        tagline: "Learners work with real datasets to clean, analyse, and visualise data using Excel, building dashboards and practical business insights.",
        description:
            "Learn how to analyse and visualise data using Excel. Build dashboards, work with datasets, and develop analytical thinking for business and data-related roles.",
        bullets: [
            [
                "Excel formulas and functions",
                "Data cleaning and structuring",
                "Pivot tables and dashboards",
                "Basic data visualization"
            ],
            [
                "Business sales analysis report",
                "Interactive Excel dashboard",
                "Final project: dataset analysis presentation"
            ],
            [
                "Junior data analyst",
                "Business analyst assistant",
                "Administrative data support roles"
            ]
        ]

    },
    {
        id: "ui-ux-basics",
        title: "Basics of UI/UX Design",
        price: 399,
        image: "/assets/images/ui-ux-design.jpg",
        rating: 4.7,
        reviewCount: 870,
        hours_total: 18,
        skills: ["Figma", "Wireframing", "UX Principles", "Prototyping"],
        category: ["tech"],
        tagline: "Learners explore how digital products are designed for users, moving from sketches to interactive prototypes using industry tools like Figma.",
        description:
            "Learn how digital products are designed for users. Build wireframes and prototypes in Figma and understand core UX principles for product design roles.",
        bullets: [
            [
                "User experience (UX) principles",
                "Wireframing and prototyping (Figma)",
                "UI layout systems and design hierarchy",
                "User testing fundamentals"
            ],
            [
                "Redesign an existing mobile app",
                "Create interactive Figma prototype",
                "Final case study portfolio project"
            ],
            [
                "Junior UI designer",
                "UX assistant",
                "Product design intern"
            ]
        ]

    },

    // Advanced Courses
    {
        id: "python-intro",
        title: "Introduction to Python Programming",
        price: 499,
        image: "/assets/images/python-programming.webp",
        rating: 4.9,
        reviewCount: 1750,
        hours_total: 30,
        skills: ["Python", "Logic", "Automation", "Problem Solving"],
        category: ["advanced", "tech"],
        tagline: "Learners develop programming fundamentals through Python, solving problems and building small automation tools step by step.",
        description:
            "Learn programming fundamentals using Python. Build small automation tools and develop foundational software development skills.",
        bullets: [
            [
                "Python syntax and logic building",
                "Data structures and problem solving",
                "File handling and automation",
                "Basic scripting for tasks"
            ],
            [
                "Automation script project",
                "Simple data processing tool",
                "Final project: mini Python application"
            ],
            [
                "Junior software developer",
                "Automation developer",
                "IT support scripting assistant"
            ]
        ]
    },
    {
        id: "cybersecurity-intro",
        title: "Introduction to Cybersecurity",
        price: 599,
        image: "/assets/images/cybersecurity.avif",
        rating: 4.8,
        reviewCount: 980,
        hours_total: 35,
        skills: ["Risk Analysis", "Ethical Hacking", "Networking", "Security Basics"],
        category: ["advanced", "tech"],
        tagline: "Learners gain foundational knowledge of digital security, understanding threats, vulnerabilities, and how systems are protected in practice.",
        description:
            "Understand cybersecurity fundamentals, including threats, risk mitigation, and system protection.",
        bullets: [
            [
                "Networking fundamentals",
                "Security principles and encryption basics",
                "Threat detection and risk analysis",
                "System vulnerability awareness"
            ],
            [
                "Security audit simulation",
                "Risk assessment report",
                "Final project: mock cyber-attack analysis"
            ],
            [
                "Junior cybersecurity analyst",
                "IT security support assistant",
                "SOC trainee (Security Operations Center)"
            ]
        ]
    }
];

// Business Courses
export const businessCourses: Course[] = [
    {
        id: "entrepreneurship-foundations",
        title: "Entrepreneurship Foundations",
        price: 249,
        image: "/assets/images/intro-entrepreneurship.jpg",
        rating: 4.8,
        reviewCount: 1120,
        hours_total: 12,
        skills: ["Business Models", "Pitching", "Market Research"],
        category: ["business"],
        tagline: "Learners turn ideas into viable business concepts by researching markets, building models, and developing practical startup strategies.",
        description:
            "Learn how to validate business ideas, understand markets, and build a startup-ready business model.",
        bullets: [
            [
                "Business model creation",
                "Market research and validation",
                "Basic financial planning",
                "Pitch development"
            ],
            [
                "Startup idea validation project",
                "Create a business model canvas",
                "Final pitch deck presentation"
            ],
            [
                "Startup founder (entry-level)",
                "Business development assistant",
                "Small business operator"
            ]
        ]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing Essentials",
        price: 399,
        image: "/assets/images/digital-marketing.jpg",
        rating: 4.9,
        reviewCount: 1430,
        hours_total: 22,
        skills: ["SEO", "Social Media", "Content Strategy", "Analytics"],
        category: ["business"],
        tagline: "Learners create and manage digital campaigns across platforms, combining content, analytics, and strategy to grow online presence.",
        description:
            "Learn how to create and manage digital marketing campaigns across platforms and grow online presence.",
        bullets: [
            [
                "SEO fundamentals",
                "Social media strategy",
                "Content creation and planning",
                "Marketing analytics basics"
            ],
            [
                "Run a mock ad campaign",
                "Create social media content calendar",
                "Final project: marketing strategy report"
            ],
            [
                "Junior digital marketer",
                "Social media manager assistant",
                "Content marketing coordinator"
            ]
        ]
    },
    {
        id: "financial-literacy",
        title: "Financial Literacy for Everyday Life",
        price: 199,
        image: "/assets/images/financial-literacy.webp",
        rating: 4.8,
        reviewCount: 990,
        hours_total: 10,
        skills: ["Budgeting", "Saving", "Debt Management"],
        category: ["business"],
        tagline: "Learners build essential money management skills, from budgeting and saving to making informed financial decisions in daily life.",
        description:
            "Develop practical money management skills for personal and small business financial planning.",
        bullets: [
            [
                "Budgeting and saving techniques",
                "Debt management basics",
                "Income and expense tracking",
                "Financial goal setting"
            ],
            [
                "Personal budget planning exercise",
                "Savings plan simulation",
                "Final project: financial life plan"
            ],
            [
                "Administrative assistant roles",
                "Entrepreneurial self-management",
                "Entry-level finance support roles"
            ]
        ]
    },
    {
        id: "freelancing-remote-work",
        title: "Freelancing & Remote Work Skills",
        price: 299,
        image: "/assets/images/freelancing.jpeg",
        rating: 4.7,
        reviewCount: 860,
        hours_total: 14,
        skills: ["Client Management", "Proposals", "Pricing", "Branding"],
        category: ["business"],
        tagline: "Learners develop the skills needed to earn online, from building a personal brand to managing clients and delivering remote work.",
        description:
            "Learn how to start earning online through freelancing platforms and remote work opportunities.",
        bullets: [
            [
                "Client communication skills",
                "Proposal writing and pricing",
                "Personal branding",
                "Remote work tools (Upwork/Fiverr basics)"
            ],
            [
                "Create freelance profile",
                "Mock client project delivery",
                "Final project: full freelance proposal pack"
            ],
            [
                "Freelancer (entry-level)",
                "Remote contractor",
                "Digital gig economy worker"
            ]
        ]
    }
];

// Creative Courses
export const creativeCourses: Course[] = [
    {
        id: "graphic-design",
        title: "Graphic Design Fundamentals",
        price: 349,
        image: "/assets/images/graphic-design.jpg",
        rating: 4.8,
        reviewCount: 1320,
        hours_total: 18,
        skills: ["Canva", "Photoshop", "Typography", "Branding"],
        category: ["creative"],
        tagline: "Learners create visual content using design principles and tools, developing branding assets and digital graphics for real-world use.",
        description:
            "Learn how to create visual content for brands and marketing using design principles and tools.",
        bullets: [
            [
                "Typography and visual hierarchy",
                "Brand identity principles",
                "Design tools (Canva / Photoshop basics)",
                "Color theory fundamentals"
            ],
            [
                "Design a brand identity kit",
                "Create social media post set",
                "Final portfolio branding project"
            ],
            [
                "Junior graphic designer",
                "Content designer",
                "Marketing design assistant"
            ]
        ]
    },
    {
        id: "content-creation",
        title: "Content Creation for Social Media",
        price: 299,
        image: "/assets/images/social-media-content.webp",
        rating: 4.7,
        reviewCount: 1010,
        hours_total: 16,
        skills: ["Video Editing", "Storytelling", "Content Curation"],
        category: ["creative"],
        tagline: "Learners produce engaging digital content, combining storytelling, video editing, and strategy to grow and maintain online audiences.",
        description:
            "Learn how to create engaging social media content and grow digital audiences.",
        bullets: [
            [
                "Storytelling for digital media",
                "Video editing basics",
                "Social media content strategy",
                "Audience engagement techniques"
            ],
            [
                "Create short-form video series",
                "Build content calendar",
                "Final project: full content campaign"
            ],
            [
                "Content creator",
                "Social media assistant",
                "Digital marketing assistant"
            ]
        ]
    },
    {
        id: "photography-beginners",
        title: "Photography for Beginners",
        price: 249,
        image: "/assets/images/photography.webp",
        rating: 4.6,
        reviewCount: 780,
        hours_total: 12,
        skills: ["Lighting", "Composition", "Editing", "Visual Storytelling"],
        category: ["creative"],
        tagline: "Learners capture and edit compelling images, mastering composition, lighting, and storytelling using accessible tools and techniques.",
        description:
            "Learn photography fundamentals using smartphones or cameras to create professional visuals.",
        bullets: [
            [
                "Camera fundamentals",
                "Lighting and composition",
                "Photo editing basics",
                "Visual storytelling"
            ],
            [
                "Build a photo portfolio",
                "Themed photo assignment",
                "Final exhibition-style project"
            ],
            [
                "Junior photographer",
                "Content creator",
                "Visual media assistant"
            ]
        ]
    }
];

// Career Prep Courses
export const careerCourses: Course[] = [
    {
        id: "cv-interview-skills",
        title: "CV Writing & Interview Preparation",
        price: 149,
        image: "/assets/images/interviewing.jpeg",
        rating: 4.9,
        reviewCount: 2100,
        hours_total: 6,
        skills: ["CV Writing", "Interview Skills", "Communication"],
        category: ["career"],
        tagline: "Learners prepare for the job market by crafting strong CVs, practicing interviews, and developing professional communication skills.",
        description:
            "Learn how to create strong CVs and prepare for job interviews across industries.",
        bullets: [
            [
                "Professional CV writing",
                "Interview communication skills",
                "Personal branding",
                "Job market readiness"
            ],
            [
                "CV redesign project",
                "Mock interview simulation",
                "Final job application pack"
            ],
            [
                "Entry-level job seeker",
                "Internship candidate",
                "Work-ready applicant"
            ]
        ]
    },
    {
        id: "productivity-masterclass",
        title: "Productivity & Time Management Masterclass",
        price: 149,
        image: "/assets/images/interview-prep.jpg",
        rating: 4.8,
        reviewCount: 1150,
        hours_total: 6,
        skills: ["Time Management", "Notion", "Goal Setting"],
        category: ["career"],
        tagline: "Learners build effective systems for managing time, tasks, and goals, improving consistency and performance in work and study.",
        description:
            "Improve productivity using proven systems for task management and goal setting.",
        bullets: [
            [
                "Time management systems",
                "Goal setting frameworks",
                "Task prioritisation",
                "Digital productivity tools"
            ],
            [
                "Build personal productivity system",
                "Weekly planning exercise",
                "Final workflow optimisation project"
            ],
            [
                "Office assistant",
                "Team coordinator",
                "Entry-level professional roles"
            ]
        ]
    },
    {
        id: "computer-literacy",
        title: "Computer Literacy for the Modern Workplace",
        price: 199,
        image: "/assets/images/computer-literacy.jpg",
        rating: 4.8,
        reviewCount: 980,
        hours_total: 10,
        skills: ["Email", "Google Workspace", "File Management"],
        category: ["career"],
        tagline: "Learners develop essential digital skills for the workplace, including communication tools, document creation, and file management.",
        description:
            "Build essential workplace digital skills for office and administrative roles.",
        bullets: [
            [
                "Email and communication tools",
                "Google Workspace (Docs, Sheets, Drive)",
                "File management systems",
                "Basic office software usage"
            ],
            [
                "Office workflow simulation",
                "Document creation tasks",
                "Final administrative simulation test"
            ],
            [
                "Admin assistant",
                "Office support roles",
                "Data capture clerk"
            ]
        ]
    }
];

export const allCourses: Course[] = [
    ...techCourses,
    ...businessCourses,
    ...careerCourses,
    ...creativeCourses,
]

// Generalised function for filtering through larger course groups
function getCategoryArray(arr: Course[], category:string) {
    return arr.filter((course) => course.category.includes(category));
}

// Course filtered subsets
// export const recommendedCourses = [careerCourses[0], careerCourses[1], techCourses[1], creativeCourses[1]];
export const wishlistCourses = [careerCourses[0], careerCourses[1], techCourses[1], creativeCourses[1]];
export const cartCourses = [careerCourses[0], creativeCourses[1], techCourses[0], businessCourses[2]]
// export const myCourses = getCategoryArray(allCourses, "myCourse");

export const advancedCourses = getCategoryArray(techCourses, "advanced");





// COURSE MAPPINGS FOR EXPORT
export const CourseCategoryMappings: Record<CourseCategory, {
    key: string;
    tagline: string;
    courses: Course[];
}> = {
    tech: {
        key: "tech",
        tagline: "Dive Into Technology with our Tech Courses",
        courses: techCourses
    },
    business: {
        key: "business",
        tagline: "Build Entrepreneurial Skills with our Business Courses",
        courses: businessCourses
    },
    creative: {
        key: "creative",
        tagline: "Grow Your Artistic Side with our Creative Courses",
        courses: creativeCourses
    },
    career: {
        key: "career",
        tagline: "Develop Your Career Fundamentals with Career Skills",
        courses: careerCourses
    },
    advanced: {
        key: "advanced",
        tagline: "Keep Your Learning Going with Advanced Courses",
        courses: advancedCourses
    }
}

export const courseMap = Object.fromEntries(
    allCourses.map(course => [course.id, course])
)