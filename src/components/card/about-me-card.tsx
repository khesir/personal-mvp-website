import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Separator } from "../ui/separator";
import { motion } from "framer-motion";

export function AboutMeCard() {
  return (
    <Dialog>
            <DialogTrigger>
              <motion.div
                className="absolute w-2/3 flex flex-col items-start p-5 -bottom-5 -right-5 bg-white z-20 rounded-3xl custom-shadow overflow-hidden"
                initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right and invisible
                animate={{ x: 0, opacity: 1 }} // Animate to the original position and fully visible
                exit={{ x: "100%", opacity: 0 }} // Exit off-screen to the right and invisible
                transition={{ type: "spring", stiffness: 100, damping: 15 }} // Configure a softer transition
              >
                  <span className="font-semibold text-2xl">
                      Khesir (Aj)
                  </span>
                  <span className="font-semibold text-lg">
                      Software engineer
                  </span>
                  <span className="text-start font-normal text-sm text-gray-600 truncate-text ">
                      I like to work on computer graphics and study software architecture.
                  </span>  
                </motion.div>
            </DialogTrigger>
            <DialogContent>
                <DialogTitle>A bit of background about me</DialogTitle>
                <div className="grid grid-cols-2 gap-3">
                    {/* About me */}
                    <div className="col-span-2 flex flex-col">
                        <span className="font-semibold text-2xl">
                            Khesir
                        </span>
                        <span className="font-semibold text-lg">
                            Full stack Developer 
                        </span>
                    </div>
                    <div className="col-span-2">
                        <span className="font-normal text-sm text-gray-600">
                            Create and develop web apps using Type script and React, Svelte, and Next.js. Interested in computer graphics, software architecture, and technical arts.
                        </span> 
                    </div> 
                    {/* Technology */}
                    <div className="col-span-2 flex flex-col gap-3">
                        <span className="font-semibold text-2xl">
                            Technology
                        </span>
                        <Separator/>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Languages
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Javascript/ Typescript</Badge>
                                <Badge>Python</Badge>
                                <Badge>C#</Badge>
                                <Badge>Java</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Web app development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>React</Badge>
                                <Badge>Typescript</Badge>
                                <Badge>Svelte</Badge>
                                <Badge>Next.js</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Backend development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Node.js</Badge>
                                <Badge>Nest.js</Badge>
                                <Badge>Django</Badge>
                                <Badge>Springboot</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Bot development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Dsharp</Badge>
                                <Badge>discord.py</Badge>
                            </div> 
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg">
                                Game development 
                            </span>
                            <div className="flex flex-wrap gap-2">
                                <Badge>Unity</Badge>
                            </div> 
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
  )
}