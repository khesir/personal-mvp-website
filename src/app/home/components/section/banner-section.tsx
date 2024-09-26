import { Card } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Background } from "../background";
import { MailPlus } from "lucide-react";
import NavbarItems from "../navbar-items";
import { useNavStore } from "@/hooks/use-navbar-items";



export function Banner() {
    const { navdata } = useNavStore();

  return (
    <div className="relative w-full h-full">

        <div className="absolute  w-[300px] -top-5 -right-7 flex justify-around gap-5 border-2 border-gray-300 rounded-3xl py-2
         px-7 custom-shadow z-20 bg-white">
            {
                navdata.map((data, index) => (
                    <NavbarItems 
                        key={index} 
                        name={data.name} 
                        isActive={data.isActive} 
                        icon={data.icon}/>
                ))
            }
        </div>

        <div className="absolute bottom-0 left-0 bg-blue-400 flex justify-center items-center w-[80px] h-[80px] rounded-full z-20 cursor-pointer custom-shadow">
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <MailPlus className="w-6 h-6"/>
                </TooltipTrigger>
                <TooltipContent side="left" sideOffset={50}>
                    <p>Contact me</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>

        <Card className="absolute w-2/3 h-[150px] flex flex-col p-5 -bottom-5 -right-5 bg-white z-20 rounded-3xl custom-shadow overflow-hidden">
            <span className="font-semibold text-2xl">
                Khesir
            </span>
            <span className="font-semibold text-lg">
                Full stack Developer 
            </span>
            <span className="font-normal text-sm text-gray-600 truncate-text ">
            Create and develop web apps using Type script and React, Svelte, and Next.js. Interested in computer graphics, software architecture, and technical arts.

            </span>  
        </Card>
        <div className="absolute w-[300px] h-[70px] -top-5 -right-5 bg-white z-10 rounded-3xl border-8 border-white soft-nav "/>
        <div className="absolute -bottom-10 -left-10 bg-white w-[150px] h-[150px] rounded-full z-10 bottom-button"/>
        <Background />       
    </div>  
  )
}