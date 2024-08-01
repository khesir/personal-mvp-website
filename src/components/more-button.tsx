import { motion, useAnimation } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useState } from "react";

interface MoreButtonProps {
    icon: LucideIcon
    onClick : () => void;
}
export const MoreButton: React.FC<MoreButtonProps> = ({ icon: EmojiIcon, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();

    const handleHoverStart = () => {
        setIsHovered(true);
        // Trigger the animation to play once
        controls.start({
            rotate: [0, 360],
            borderRadius: ["10%", "50%", "10%"],
            transition: {
                duration: 0.5,
                repeat: 0 // Play the animation once
            }
        });
    };

    const handleHoverEnd = () => {
        setIsHovered(false);
        // Keep the button in the final state after hover ends
        controls.set({
            rotate: 360, // Final state after hover
            borderRadius: "10%",
            transition: {
                duration: 0.5
            }
        });
    };

    return (
        <motion.div
            className="absolute bg-white shadow-sm p-3 -bottom-5 -right-5 rounded-md hover:bg-slate-300 cursor-pointer"
            onClick={onClick}
            onHoverStart={handleHoverStart}
            onHoverEnd={handleHoverEnd}
            animate={isHovered ? { rotate: [0, 360], borderRadius: ["10%", "50%", "10%"] } : { rotate: 360, borderRadius: "10%" }}
            transition={{ duration: 0.5, repeat: 0 }}
        >
            <EmojiIcon />
        </motion.div>
    );
};