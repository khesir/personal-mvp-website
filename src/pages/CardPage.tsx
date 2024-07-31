"use client"
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

import { Button } from "@/components/ui/Button";
import { ArrowBigLeftDashIcon, ArrowBigRightDashIcon, TriangleAlert } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { navdata } from "@/constant/data";




export default function CardPage() {
    const [more, setMore] = useState(false)

    return (
        <div className="relative h-3/4 z-10 flex justify-center items-center">
            <div className="relative bg-white pt-10 px-10 rounded-l-md space-y-3 max-w-[300px] h-full shadow-xl z-10">
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
                
                <div className="absolute text-gray-500 font-semibold text-sm bottom-1 left-1 flex items-center gap-1">
                    <span>In development</span>
                    <TriangleAlert className="w-3 h-3"/>
                </div>
                {/* If active dissapear*/}
                {more !== true && (
                    <div className="absolute bg-white shadow-sm p-3 -bottom-5 -right-5 rounded-md hover:bg-slate-300 cursor-pointer" onClick={()=> setMore(true)}>
                        <ArrowBigRightDashIcon/>
                    </div>
                )}
            </div>

            {/* Render the sht here */}
            {more === true && (
                <motion.div 
                    className="relative w-[1000px] z-5 bg-white h-full mt-11 rounded-r-lg rounded-b-lg -ml-40"
                    
                >
                    {/* Content */}
                    {/* About */}
                    <div className="w-full h-full flex gap-10 m-10 ml-40 px-10">
                        <div className=" w-1/2 flex flex-col gap-5">
                            <div>
                                <h1 className="text-3xl font-bold">
                                    About.
                                </h1>
                                <div className="text-sm pt-3">
                                Lorem ipsum dolor sit amet. Ut odit illo ea dolor dolore et odio nihil. Ut corporis pariatur et omnis consequatur est nesciunt ipsa est quaerat explicabo.
                                </div>
                            </div>
                            {/* Recent Experience */}
                            <div>
                                <h3 className="text-xl font-bold">
                                    What am I cooking? 
                                </h3>
                                
                            </div>
                        </div>
                        <div className="w-1/2">
                            skill
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
                        <div className="absolute bg-white shadow-sm p-3 -bottom-5 -right-5 rounded-md hover:bg-slate-300 cursor-pointer" onClick={()=> setMore(false)}>
                            <ArrowBigLeftDashIcon/>
                        </div>
                    )}
                </motion.div>
            )}
        </div>
    )
}