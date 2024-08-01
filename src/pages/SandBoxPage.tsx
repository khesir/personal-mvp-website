import {motion} from "framer-motion"

export default function SandBoxPage(){
    return (
        <div className="space-y-5 max-w-[300px] max-h-full">
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01]
                }}
                className="bg-white px-5 py-3"
            >
                button
            </motion.div>

            <motion.div 
                animate={{ x: 100 }}
                transition={{ ease: "easeOut", duration: 2 }}
                className="bg-white w-full"
            >
                animated stuffs
            </motion.div>
            

            <div className="grid grid-cols-2 gap-3 overflow-hidden">
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                <div className="bg-white w-32 h-32">
                    animated stuffs
                </div>
                
            </div>
        </div>
    )
}