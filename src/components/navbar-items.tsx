import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  name: string;
  icon: IconType | LucideIcon;
  link: string;
}

export default function NavbarItems({
  name,
  icon: NavIcon,
  link,
} : NavbarProps) {
  const location = useLocation();
	const pathname = location.pathname;
  
  return(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Link to={link}>
              <div className={`${link == pathname ? 'bg-blue-400' : ''} rounded-md px-2 py-2`}>
                <NavIcon className="w-4 h-4" />
              </div>  
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>{name}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
  )
}