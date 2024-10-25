import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Link, useLocation } from "react-router-dom"
import { BlogList } from "../_components/blogList"
import { usePathname } from "@/hooks/use-pathname-store"
import { useEffect } from "react"

import { Github, TwitterIcon, Linkedin, Mail } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { TopProjects } from "../_components/topProjects"
import { Separator } from "@/components/ui/separator"
import { Experties, Services } from "@/components/constant/data"
import { Button } from "@/components/ui/Button"

export default function Homepage() {
    const {setPathname} = usePathname();
    const location = useLocation();
        
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname, setPathname]);
    return (
        <>
            <Helmet>
                <title>Aj | Home</title>
                <meta name="description" content="Welcome to my website" />
                <link rel="canonical" href="/"/>
            </Helmet>
            <div className="dark:text-white flex flex-col gap-3 mt-5">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex flex-col gap-5 mb-5">
                        <Card  className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
                            {/* Profile Picture */}
                            <CardHeader>
                                <div className="w-full flex justify-end h-[200px] overflow-hidden rounded-3xl border ">
                                    <img 
                                        src={'/img/profile2.jpg'}
                                        className="w-full h-full object-cover pointer-events-none"
                                    />
                                </div>
                                <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                                    Tollo, Aj (Khesir)
                                </CardTitle>
                                <CardDescription>
                                    A passionate developer with interest of graphics and softwares.
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <a href="https://www.linkedin.com/in/ajtollo/" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                        <Linkedin className="w-6 h-6"/>
                                    </a>
                                    <a href="https://github.com/khesir" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                        <Github className="w-6 h-6"/>
                                    </a>
                                    <a href="https://x.com/khesirr" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                        <TwitterIcon className="w-6 h-6"/>
                                    </a>
                                    <a href="https://x.com/khesirr" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                        <Mail className="w-6 h-6" />
                                    </a>
                                </div>    
                            </div>  
                            </CardFooter>
                        </Card>
                    <div className="space-y-5">
                        <div className="dark:text-white">
                            <div className="flex justify-between">
                                <Link to={'/blog'}>
                                    <p className="font-semibold text-xl mb-2">Recent Blogs</p>
                                </Link>
                                <div className="flex flex-col items-end pt-2">
                                    <Link to={'/blogs'} className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60">
                                    See more
                                    </Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <BlogList />
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="flex flex-col  col-span-2 px-5 w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
                        <div className="flex justify-between">
                            <Link to={'/works'}>
                                <p className="font-semibold text-2xl mb-2">Top Project</p>
                            </Link>
                            <div className="flex flex-col items-end pt-2">
                                <Link to={'/works'} className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60">
                                    See more
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <TopProjects />
                        </div>
                    </div>
                </div>
                <Separator className="mb-5" />
                <div className=" flex fle-col sm:flex-row gap-3">
                    <div className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700">
                        <p className="font-semibold text-xl mb-2">Work Experience</p>
                        <div className="flex flex-col gap-2">
                            <Card className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
                               <div className="flex flex-col p-3 gap-1">
                                    <p className="text-sm font-semibold">SAMAHAN Systems Development · Full-time</p>
                                    <p className="text-xs">Fullstack Developer</p>
                                    <p className="text-xs text-gray-500">Jul 2024 - Present · 4 mos</p>
                                    <p className="text-xs text-gray-500">Davao City · Onsite</p>
                               </div>
                            </Card>
                            <Card className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
                               <div className="flex flex-col p-3 gap-1">
                                    <p className="text-sm font-semibold">Freelancing</p>
                                    <p className="text-xs">Fullstack Developer</p>
                                    <p className="text-xs text-gray-500">Mark 2024 - Present · 8 mos</p>
                               </div>
                            </Card>
                        </div>

                    </div> 
                    <Card className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700 h-[370px]" x-chunk="dashboard-05-chunk-4">

                                <CardHeader className="">
                                    <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                                        Expertise
                                    </CardTitle>
                                </CardHeader>    

                                <CardContent className="flex flex-wrap justify-center gap-5">
                                    {Experties.map((data, index) => (
                                        <div key={index} className="flex flex-col items-center">
                                            <Card className="p-2">
                                                <Button variant={'ghost'} size={'icon'} className="">
                                                <data.emoji className="w-10 h-10"/>
                                                </Button>
                                            </Card>
                                            <span className="text-xs font-semibold">{data.name}</span>
                                        </div>
                                    ))}
                                </CardContent>

                            </Card> 
                </div>
                <Card className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">

                    <CardHeader className="">
                        <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                            Services
                        </CardTitle>
                    </CardHeader>    

                    <CardContent className="flex flex-wrap justify-center gap-5">
                        {Services.map((data, index) => (
                            <div key={index} className="flex flex-col items-center gap-3">
                                <Card className="p-2">
                                    <Button variant={'ghost'} size={'icon'} className="">
                                    <data.emoji className="w-10 h-10"/>
                                    </Button>
                                </Card>
                                <span className="text-xs font-semibold">{data.name}</span>
                            </div>
                        ))}
                    </CardContent>

                </Card> 
            </div>
        </>
    )
}
