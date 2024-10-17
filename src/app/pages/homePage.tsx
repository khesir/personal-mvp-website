"use client"

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Link, useLocation } from "react-router-dom"
import { BlogList } from "../_components/blogList"
import { ProjectList } from "../_components/projectsList"
import { usePathname } from "@/hooks/use-pathname-store"
import { useEffect } from "react"
import { Accordion, AccordionContent, AccordionTrigger } from "@/components/ui/accordion"
import { AccordionItem } from "@radix-ui/react-accordion"
import { Button } from "@/components/ui/Button"
import { Github, TwitterIcon, Linkedin } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export default function Homepage() {
    const {setPathname} = usePathname();
    const location = useLocation();
        
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname, setPathname]);
    return (
        <div className="space-y-5">
            <Card className="overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
                <CardHeader>
                    <div className="flex justify-between flex-col sm:flex-row gap-3">
                        <div>
                            <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                                Welcome! Yo I'm Khesir
                            </CardTitle>
                            <CardDescription>
                                Software Engineer currently focusing (Fullstack Development)
                            </CardDescription>
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <a href="https://www.linkedin.com/in/ajtollo/" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                    <Linkedin className="w-6 h-6"/>
                                </a>
                                <a href="https://github.com/khesir" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                    <Github className="w-6 h-6"/>
                                </a>
                                <a href="https://x.com/khesirr" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                    <TwitterIcon className="w-6 h-6"/>
                                </a>
                                <a  href="https://drive.google.com/file/d/14WnpO-gRtd0Bs7f4NfR6w664q0YX-jPx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button>CV / Resume</Button>
                                </a>
                                
                            </div>    
                        </div>    
                    </div>
                </CardHeader>    
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-5">
                        {/* Profile Picture */}
                        <div className="w-full md:w-[50%] h-[300px] overflow-hidden rounded-3xl border md:order-1">
                            <img 
                                src={'/img/profile1.jpg'}
                                className="w-full h-full object-top object-cover pointer-events-none"
                            />
                        </div>
                        {/* Who I am */}
                        <div className="w-full md:w-[50%] mb-5">
                            <h1 className="font-semibold text-lg">Who I am?</h1>
                            <div>
                           My name is AJ you can view my cv for that. I'm a passionate programmer who enjoys making software architecture and systems. Making ideas into reality is what I'm craving for life.
                            <br />
                            <br />
                            I created this website for 3 purpose, act as my cv, writing blog post, and documenting my journey as to being a programmer.
                            <br />
                            <br />
                            Wanna exchange ideas? reach out to my <a href="https://x.com/khesirr" className=" inline text-blue-400 underline decoration-blue-400">Dm me @khesirr on x</a> or <a href='mailto:khesir.dev@gmail.com' className="inline  text-blue-400 underline decoration-blue-400">email me </a>
                            </div>
                        </div>
                    </div>
                        <div className="col-span-2 flex flex-col gap-3">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full space-y-2"
                                >
                                    <Card className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">

                                        <AccordionItem value={"item-1"} >
                                            <AccordionTrigger
                                                value="item-1"
                                                className="relative !no-underline [&[data-state=closed]>button]:hidden [&[data-state=open]>.alert]:hidden mr-10"
                                            >
                                                <CardHeader className="px-5 py-1">
                                                    <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                                                        Education
                                                    </CardTitle>
                                                </CardHeader>    
                                            </AccordionTrigger>
                                            <AccordionContent className="px-5 py-1">
                                                <div className="flex flex-col gap-3">
                                                    <h1 className="font-semibold text-xl">Ateneo De Davao University</h1>
                                                    <div>
                                                    <h1 className="font-semibold text-md">Relevant Courses</h1>
                                                    <span>Computer Programming 1 · Computer Programming 2 · Introduction to Computing · Data structures and Algorithm · Object Oriented Programming · Information Management App Dev Event-Driven Programming Software Engineering </span>
                                                    <br/>
                                                    <br/>
                                                    <p>Achived 3.48 GPA</p>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Card> 
                                    <Card className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">

                                        <AccordionItem value={"item-2"} >
                                            <AccordionTrigger
                                                value="item-1"
                                                className="relative !no-underline [&[data-state=closed]>button]:hidden [&[data-state=open]>.alert]:hidden mr-10"
                                            >
                                                <CardHeader className="px-5 py-1">
                                                    <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                                                        Experience
                                                    </CardTitle>
                                                </CardHeader>    
                                            </AccordionTrigger>
                                            <AccordionContent className="px-5 py-1">
                                            <div className="flex flex-col gap-3">
                                                    <div>
                                                        <h1 className="font-semibold text-xl">SAMAHAN Systems Development</h1>
                                                        <span className="text-gray-300 font-semibold text-sm">Full-stack Developer</span>
                                                    </div>
                                                    <div>
                                                        <h1 className="font-semibold text-md">Achievement</h1>
                                                            <span> - Contributed and Developed backend endpoints using NestJS</span>

                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Card> 
                                </Accordion>
                                

                        </div>
                </CardContent>
            </Card> 
            <div className="dark:text-white flex flex-col gap-3">
                <Link to={'/project'}>
                    <p className="font-semibold text-2xl mb-2">Recent Project</p>
                </Link>
               <div className="flex flex-col gap-2">
                    <ProjectList />
               </div>
               <div className="flex flex-col items-end ">
                    <Link to={'/project'} className="font-semibold text-lg py-3 hover:underline text-blue-600 dark:text-blue-400">
                        See All Projects
                    </Link>
                    <Separator />
               </div>
            </div>
            <div className="dark:text-white">
                <Link to={'/blog'}>
                    <p className="font-semibold text-2xl mb-2">Recent Blog</p>
                </Link>
                <div className="flex flex-col gap-5">
                    <BlogList />
               </div>
               <div className="flex flex-col items-end ">
                    <Link to={'/blogs'} className="font-semibold text-lg py-3 hover:underline text-blue-600 dark:text-blue-400">
                        See All Blogs
                    </Link>
                    <Separator />
               </div>
            </div>
      </div>
    )
}