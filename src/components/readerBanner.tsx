import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Background } from "./background";
import { ArrowLeftToLineIcon } from "lucide-react";
import NavbarItems from "./navbar-items";

import { navdata } from "@/components/constant/data";
import '../css/style.css'
import { Card } from "./ui/card";


export function ReaderBanner() {

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
        <Card className="absolute w-3/6 flex flex-col items-start p-5 -bottom-5 -right-5 bg-white z-20 rounded-3xl custom-shadow">
            <span className="font-semibold text-2xl">
                Title Here
            </span>
        </Card>
        <div className="absolute bottom-3 left-3 bg-blue-400 flex justify-center items-center w-[65px] h-[65px] rounded-full z-20 cursor-pointer custom-shadow">
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <a href="mailto:khesir.dev@gmail.com"><ArrowLeftToLineIcon/></a>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={50}>
                    <p>Back</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>

        <div className="absolute w-[300px] h-[70px] -top-5 -right-5 bg-white z-10 rounded-3xl border-8 border-white soft-nav "/>
        <div className="absolute -bottom-10 -left-10 bg-white w-[150px] h-[150px] rounded-full z-10 bottom-button"/>
        <Background />       
    </div>  
  )
}