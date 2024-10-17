import { Link, useLocation } from "react-router-dom";

interface NavbarProps {
  name: string;
  link: string;
  isNav: boolean
}

export default function NavbarItems({
  name,
  link,
  isNav = true,
} : NavbarProps) {
  const location = useLocation();
	const pathname = location.pathname;
  
  return(
    <Link to={link}>
    <div className={`${link == pathname && isNav ? 'bg-blue-400' : ''} rounded-md px-2 py-2`}>
      <span className="w-4 h-4 font-semibold dark:text-white">{name}</span>
    </div>  
  </Link>
  )
}