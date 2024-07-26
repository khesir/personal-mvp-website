
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import { Button } from "@/components/ui/Button";
import { ArrowBigRightDashIcon, TriangleAlert } from "lucide-react";
import { PiWarningDiamondFill } from "react-icons/pi";

export default function CardPage() {
  
    return (
        <div className="relative bg-white pt-10 px-10 rounded-l-md space-y-3 max-w-[300px] h-3/4">
            <img
                className="w-[200px] rounded-full"
                src="profile1.jpg"
                alt="profile"
            />
            <div>
                <h1 className=" font-medium text-xl">Khesir</h1>
                <h3 className=" font-medium text-sm text-gray-500">Software Developer</h3>
            </div>
            <p className="text-sm leading-4">Software, Bot and Games developer by trade</p>
            <Button variant="default" className="w-full bg-blue-500 text-md hover:bg-blue-400">Contact me</Button>
            
            <div className="text-[#4A5568] flex flex-col gap-1">
                {/* <div className="flex gap-2">
                    <IoLogoLinkedin className="w-5 h-5"/>
                    <a href="#">    
                        <span>in/aj-tollo-bab562234</span>
                    </a>
                </div> */}
                <div className="flex gap-2">
                    <BsGithub className="w-5 h-5"/>
                    <a href="https://github.com/khesir"className="text-sm font-semibold text-gray-500">
                        <span>github.com/khesir</span>
                    </a>
                </div>
                <div className="flex gap-2">
                    <AiFillTwitterCircle className="w-5 h-5"/>
                    <a href="https://x.com/khesirr"className="text-sm font-semibold text-gray-500">
                        <span>@khesirr</span>
                    </a>
                </div>
            </div>
            <div className="absolute bg-white shadow-sm p-3 -bottom-5 -right-5 rounded-md hover:bg-slate-300 cursor-pointer">
                <ArrowBigRightDashIcon/>
            </div>
            <div className="absolute text-gray-500 font-semibold text-sm bottom-1 left-1 flex items-center gap-1">
                <span>In development</span>
                <TriangleAlert className="w-3 h-3"/>
            </div>
        </div>
    )
}