import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Background } from "./background";
import { ArrowLeftToLineIcon, MailPlus } from "lucide-react";
import NavbarItems from "./navbar-items";
import { navdata } from "@/components/constant/data";
import '../css/style.css'
import { usePathname } from "@/hooks/use-pathname-store";
import { useNavigate } from "react-router-dom";
import { AboutMeCard } from "./card/about-me-card";


export function Banner() {
    const {pathname} = usePathname();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/');
    };
    return (
        <div className="relative w-full h-full">

            <div className="absolute  w-[300px] -top-3 -right-7 flex justify-around gap-5 border-2 border-gray-300 rounded-3xl py-2
            px-7 custom-shadow z-20 bg-white">
                {
                    navdata.map((data, index) => (
                        <NavbarItems 
                            key={index} 
                            name={data.name} 
                            icon={data.icon}
                            link={data.link}/>
                    ))
                }
            </div>

            {pathname === '/' && (
                <>
                    <AboutMeCard/>
                    <div className="absolute bottom-3 left-3 bg-blue-400 flex justify-center items-center w-[65px] h-[65px] rounded-full z-20 cursor-pointer custom-shadow">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    {!pathname.startsWith('/projects/view') && !pathname.startsWith('/blogs/view') ? (
                                        <a href="mailto:khesir.dev@gmail.com">
                                            <MailPlus className="w-5 h-5" />
                                        </a>
                                    ) : (
                                        <a onClick={() => { handleBack(); } }>
                                            <ArrowLeftToLineIcon />
                                        </a>
                                    )}
                                </TooltipTrigger>
                                <TooltipContent side="left" sideOffset={50}>
                                    {!pathname.startsWith('/projects/view') && !pathname.startsWith('/blogs/view') ? (
                                        <a href="mailto:khesir.dev@gmail.com">
                                            <p>Contact me</p>
                                        </a>
                                    ) : (
                                        <a onClick={() => { handleBack(); } }>
                                            <p>Back</p>
                                        </a>
                                    )}
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="absolute -bottom-10 -left-10 bg-white w-[150px] h-[150px] rounded-full z-10 bottom-button" />
                </>
            )}

            {/* About me */}
            {/* Project Card */}
            {/* Guest Card */}
            {/* Blog */}
            {/* Read Card */}
            <div className="absolute w-[300px] h-[70px] -top-5 -right-5 bg-white z-10 rounded-3xl border-8 border-white soft-nav "/>
            <Background size={pathname === '/' ? 'h-[300px]' : 'h-[100px]'}/>       
        </div>  
    )
}