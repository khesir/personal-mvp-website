
import { motion } from "framer-motion";

export function AboutMeCard() {
  return (
    <motion.div
        className="absolute w-2/3 md:w-1/3 p-5 bottom-5 -right-5 bg-white z-20 rounded-3xl 
        custom-shadow overflow-hidden dark:bg-slate-700 dark:border-gray-700 dark:text-white"
        initial={{ x: "100%", opacity: 0 }} // Start off-screen to the right and invisible
        animate={{ x: 0, opacity: 1 }} // Animate to the original position and fully visible
        exit={{ x: "100%", opacity: 0 }} // Exit off-screen to the right and invisible
        transition={{ type: "spring", stiffness: 100, damping: 15 }} // Configure a softer transition
    >
        <span className=" flex justify-center font-semibold text-2xl">
            Welcome! 👋👋
        </span>
       
    </motion.div>
  )
}