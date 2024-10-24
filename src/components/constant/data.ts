import { Book, BotIcon, Briefcase, HandshakeIcon } from "lucide-react"

export const navdata = [
    {
        name: "Home",
        isActive: true,
        link: '/'
    },{
        name: "About me",
        isActive: true,
        link: '/about'
    },{
        name: "Projects",
        isActive: false,
        link: '/projects',
    },{
        name: "Blogs",
        isActive: false,
        link: '/blogs'
    }
]
// ,{
//     name: "Progress Reports",
//     isActive: false,
//     link: '/progress-report'
// }
export const cooking =[
    {
        title: "Ari-Connect Discord Bot Project",
        status: "Active",
        description: "",
        languages: ["Discord.py","Python", "Mysql", "Mongo", "Next.js"],
        link: "https://ariconnect.vercel.app/",
        
        emoji: BotIcon,
    },
    {
        title: "Fullstack - SAMAHAN Sysdev",
        status: "Full-time",
        description: "",
        languages: ["Next.js", "Nest.js", "Github"],
        link: "",

        emoji: Briefcase,
    },
    {
        title: "Study - 3d Character Controllers",
        status: "Active",
        description: "In my free time I study game 3d controllers such as movements, states, camera and all",
        languages: ["Godot","Game Development"],
        link: "",

        emoji: Book,
    },
    {
        title: "Freelance - Web, Bots, and Game",
        status: "Active",
        description: "I'm accepting comissions on small projects like a portfolio, bots with few features and games.",
        languages: [],
        link: "",

        emoji: HandshakeIcon,
    }
]

export const skills = {
    prefLang: [
        "Javascript",
        "Typescript",
        "Python",
        "C++",
        "C++",
        "C++",
        "C++",
    ],
    frameworks: [
        "React",
        "Next.js",
        "Electron.js",
        "Vite",
        "Node.js"
    ],
    tools: [
        "Git",
        "MongoDB",
        "Mysql",
        "Docker",
    ]
}