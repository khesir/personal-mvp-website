"use client"

import { ArrowBigLeftDashIcon, Laptop, LucideNetwork, TerminalSquareIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { cooking, navdata, skills } from "@/constant/data";
import { CookingCard } from "@/components/cooking-card";
import { MoreButton } from "@/components/more-button";
import UserCard from "@/components/user-card";




export default function CardPage() {
    const [more, setMore] = useState(false)

    const isMoreClose = () => {
        setMore(prev => !prev);
    };
    return (
        <div className="relative max-h-[1000px] z-10 flex justify-center items-center">
           
            <UserCard more={more} isMoreClose={isMoreClose}/>
            
            {/* Render the sht here */}
            {more === true && (
                    <motion.div 
                        className="relative w-[1200px] z-5 bg-white h-[700px] mt-10 rounded-r-lg rounded-b-lg -ml-40"
                        
                    >
                        {/* Content */}
                        {/* About */}
                        <div className="w-full h-full flex gap-10 pt-10 pl-48">
                            <div className=" w-3/6 flex flex-col gap-5">
                                <div>
                                    <h1 className="text-3xl font-bold">
                                        About <span className="text-blue-400">.</span>
                                    </h1>
                                    <div className="text-sm pt-3">
                                    Lorem ipsum dolor sit amet. Ut odit illo ea dolor dolore et odio nihil. Ut corporis pariatur et omnis consequatur est nesciunt ipsa est quaerat explicabo.
                                    </div>
                                </div>
                                {/* Recent Experience */}
                                <div>
                                    <div>
                                        <h3 className="text-xl font-bold">
                                            What am I cooking? 
                                        </h3>
                                        <span className="text-sm font-semibold text-gray-600">Please contact me for employment history</span>
                                    </div>
                                    <div className="flex flex-col gap-3 border-t-2 border-b-2 py-2">
                                        {cooking.map((item,index) => (
                                            <CookingCard
                                                key={index}
                                                title={item.title}
                                                description={item.description}
                                                status={item.status}
                                                languages={item.languages}  
                                                link={item.link}
                                                emoji={item.emoji}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="w-3/6 flex flex-col pl-20 pt-10 gap-3">
                                <div className="space-y-2 w-[350px]">
                                    <div className="flex gap-2">
                                        <TerminalSquareIcon className="text-blue-400"/>
                                        <h1 className="text-xl font-bold">Preferred Languages</h1>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.prefLang.map((item,index) => (
                                            <div key={index} className="bg-blue-300 px-2 rounded-lg font-semibold text-sm">{item}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2 w-[350px]">
                                    <div className="flex gap-2">
                                        <Laptop className="text-blue-400"/>
                                        <h1 className="text-xl font-bold">Framework</h1>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.frameworks.map((item,index) => (
                                            <div key={index} className="bg-blue-300 px-2 rounded-lg font-semibold text-sm">{item}</div>
                                        ))}
                                    </div>
                                </div>
                                <div className="space-y-2 w-[350px]">
                                    <div className="flex gap-2">
                                        <LucideNetwork className="text-blue-400"/>
                                        <h1 className="text-xl font-bold">Tools and Technology</h1>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.tools.map((item,index) => (
                                            <div key={index} className="bg-blue-300 px-2 rounded-lg font-semibold text-sm">{item}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Projects */}

                        {/* Services */}

                        {/* Contact */}
                    {/* Nav bar button */}
                    {more === true && (
                        <div className="absolute bg-white shadow-sm py-3 px-10 -top-5 -right-5 rounded-md border-blue-300 border-2">
                            <ul className="flex gap-5 font-semibold text-gray-600">
                                {navdata.map((item,index) => (
                                    <li 
                                        key={index}
                                        className="cursor-pointer hover:text-blue-400 text-sm"
                                    >
                                        {item.name}
                                    </li> 
                                ))}
                            </ul>
                        </div>
                    )}
                    {/* More details close button */}
                    {more === true && (
                        <MoreButton onClick={isMoreClose} icon={ArrowBigLeftDashIcon}/>
                    )}
                </motion.div>
            )}
        </div>
    )
}