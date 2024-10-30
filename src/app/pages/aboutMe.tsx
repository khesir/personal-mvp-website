import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Github, TwitterIcon, MailPlusIcon } from "lucide-react";
import { ProgressList } from "../_components/progressList";
import { usePathname } from "@/hooks/use-pathname-store";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function AboutMe() {
    const {setPathname} = usePathname();
    const location = useLocation();
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname, setPathname]); 
  return (
    <>
      <Card className="overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
    <CardHeader>
        <div className="flex justify-between flex-col sm:flex-row gap-3">
            <div>
                <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                    Welcome! I'm Khesir
                </CardTitle>
                <CardDescription>
                    Software Engineer currently focusing on Fullstack Development
                </CardDescription>
            </div>
            <div>
                <div className="flex items-center gap-2">
                    {/* <a href="https://www.linkedin.com/in/ajtollo/" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                        <Linkedin className="w-6 h-6"/>
                    </a> */}
                    <a href="https://github.com/khesir" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                        <Github className="w-6 h-6"/>
                    </a>
                    <a href="https://x.com/khesirr" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                        <TwitterIcon className="w-6 h-6"/>
                    </a>
                    <Button><MailPlusIcon className="mr-3 h-4 w-4" /> Mail me</Button>
                </div>    
            </div>    
        </div>
    </CardHeader>    
    <CardContent>
        <div className="flex flex-col md:flex-row gap-5 mb-5">
            {/* Profile Picture */}
            <div className="w-full flex justify-end md:w-[40%] h-[300px] overflow-hidden rounded-3xl border md:order-1">
                <img 
                    src={'/img/Mee.png'}
                    className="w-full h-full object-cover pointer-events-none"
                />
            </div>
            {/* Who I am */}
            <div className="w-full md:w-[60%] mb-5">
                <h1 className="font-semibold text-lg">Who I am?</h1>
                <div>
                I'm Khesir—a passionate programmer who thrives on designing software architecture and systems. Turning ideas into reality is what drives me.                                <br />
                <br />
                My real passion is in Computer graphics and shaders, I like to create colorful effects using a particle systems and implementing algorithms to simulate behaviours, such as boids, water, dynamic interactions and procedural generations.
                <br />
                <br />
                Want to exchange ideas? Feel free to reach out to me via DM on X <a href="https://x.com/khesirr" className=" inline text-blue-400 underline decoration-blue-400">@khesirr</a> or <a href='mailto:khesir.dev@gmail.com' className="inline  text-blue-400 underline decoration-blue-400">email me </a>
                </div>
            </div>
        </div>
    </CardContent>
</Card> 
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
      <div className="space-y-5 dark:text-white">
        <p className="font-semibold text-2xl mb-2">Progress report</p>
        <ProgressList />
      </div>
    </>
  )
}