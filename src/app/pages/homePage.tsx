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
import { Mail, Github, TwitterIcon } from "lucide-react"
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
                    <div className="flex justify-between">
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
                                <a href="mailto:khesir.dev@gmail.com" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                    <Mail className="w-6 h-6"/>
                                </a>
                                <a href="https://github.com/khesir" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                    <Github className="w-6 h-6"/>
                                </a>
                                <a href="https://x.com/khesirr" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                    <TwitterIcon className="w-6 h-6"/>
                                </a>
                                <a  href="https://drive.google.com/file/d/14WnpO-gRtd0Bs7f4NfR6w664q0YX-jPx/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                                    <Button>Resume</Button>
                                </a>
                                
                            </div>    
                        </div>    
                    </div>
                </CardHeader>    
                <CardContent>
                    <div className="flex flex-col md:flex-row">
                        {/* Profile Picture */}
                        <div className="w-full md:w-[50%] h-[300px] overflow-hidden rounded-3xl border md:order-1">
                            <img 
                                src={'/img/profile1.jpg'}
                                className="w-full h-full object-top object-cover pointer-events-none"
                            />
                        </div>
                        {/* Who I am */}
                        <div className="w-full md:w-[50%]">
                            <h1 className="font-semibold text-lg">Who I am?</h1>
                            <div>
                            I am a Software Engineer with a current focus on web and app development as a Fullstack Developer. My expertise spans across technologies such as Node.js, MySQL, React, and Vite, along with a variety of other JavaScript libraries.
                            <br />
                            <br />
In the future, I aspire to explore my interest in Computer Graphics programming, a field I’m passionate about and hope to study more deeply when I have the time.
                            </div>
                        </div>
                    </div>
                        <div className="col-span-2 flex flex-col gap-3">
                            <h1 className="font-semibold text-lg">Education</h1>
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full space-y-2"
                                >
                                    <Card className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">

                                        <AccordionItem value={"item-2"} >
                                            <AccordionTrigger
                                                value="item-1"
                                                className="relative !no-underline [&[data-state=closed]>button]:hidden [&[data-state=open]>.alert]:hidden mr-10"
                                            >
                                                <CardHeader className="px-5 py-1">
                                                    <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                                                        Ateneo De Davao University
                                                    </CardTitle>
                                                    <CardDescription className="text-start">
                                                        BS Computer Science
                                                        <br/>
                                                        Jul 2021 - Jul 2025
                                                    </CardDescription>
                                                </CardHeader>    
                                            </AccordionTrigger>
                                            <AccordionContent className="px-5 py-1">
                                                <h1 className="font-semibold text-md">Relevant Courses</h1>
                                                <span>Computer Programming 1 · Computer Programming 2 · Introduction to Computing · Data structures and Algorithm · Object Oriented Programming · Information Management App Dev Event-Driven Programming Software Engineering </span>
                                                <br/>
                                                <br/>
                                                <p>Achived 3.48 GPA</p>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Card> 

                                </Accordion>
                                

                        </div>
                </CardContent>
            </Card> 
            <div className="dark:text-white">
                <Link to={'/project'}>
                    <p className="font-semibold text-2xl mb-2">Recent Project</p>
                </Link>
                <Separator />
               <div className="flex flex-col gap-2">
                    <ProjectList />
               </div>
            </div>
            <div className="dark:text-white">
                <Link to={'/blog'}>
                    <p className="font-semibold text-2xl mb-2">Recent Blog</p>
                </Link>
                <Separator />
                <BlogList />
            </div>
      </div>
    )
}