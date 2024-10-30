
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

export function AboutMeCard() {
  return (
    <motion.div
        className="absolute w-[80%] md:w-2/4 bottom-5 -right-5 bg-white z-20 rounded-3xl
        custom-shadow overflow-hidden dark:bg-slate-700 dark:border-gray-700 dark:text-white"
        initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right and invisible
        animate={{ x: 0, opacity: 1 }} // Animate to the original position and fully visible
        exit={{ x: "100%", opacity: 0 }} // Exit off-screen to the right and invisible
        transition={{ type: "spring", stiffness: 100, damping: 15 }} // Configure a softer transition
    >
        <Card   className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
                    <CardHeader className="space-y-5">
                        <CardTitle className="text-lg">
                        Let's👋
                        Work Together
                        </CardTitle>
                        <CardDescription className="flex justify-start gap-5 items-center">
                          <Button variant={'default'}>🚀 Available for work</Button>
                          {/* <a  href="https://drive.google.com/file/d/12xX3AlgSTGDO7RLvOTI3B6HyzzG-ZqCJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                              <Button variant={'ghost'}>Check cv/resume</Button>
                          </a> */}
                          <a className="font-semibold">
                            View my progress reports
                          </a>
                        </CardDescription>
                    </CardHeader>   
                </Card>
    </motion.div>
  )
}