
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
                        <CardDescription className="flex justify-start">
                          <Button variant={'default'}>🚀 Available for work</Button>
                          <Button variant={'ghost'}>Say hello! here</Button>
                        </CardDescription>
                    </CardHeader>   
                </Card>
    </motion.div>
  )
}