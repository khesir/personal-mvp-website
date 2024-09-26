import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useNavStore } from "@/hooks/use-navbar-items";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

interface NavbarProps {
  name: string;
  isActive: boolean;
  icon: IconType | LucideIcon;
}

export default function NavbarItems({
  name,
  isActive,
  icon: NavIcon
} : NavbarProps) {
  const { setActive } = useNavStore();
  
  const handleClick = () => {
    setActive(name);
  };
  return(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
          <div onClick={handleClick} className={`${isActive ? 'bg-blue-400' : ''} rounded-md px-2 py-2`}>
            <NavIcon className="w-6 h-6" />
          </div>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
  )
}