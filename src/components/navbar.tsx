import { useLocation, useNavigate } from "react-router-dom";
import { navdata } from "./constant/data";
import { Button } from "./ui/Button";

export function Navbar() {
  const location = useLocation();
	const pathname = location.pathname;
  const navigate = useNavigate();
  return(
    <div className="flex justify-between md:justify-around gap-5 border-gray-300 dark:border-gray-700  py-2
            md:px-3 z-20 border-b-2 ">
      {
        navdata.map((data, index) => (
          <div className={`${data.link == pathname ? 'bg-blue-400' : ''} rounded-md flex items-center gap-3 cursor-pointer`} key={index}>
            <div className="flex gap-3 px-3 items-center" onClick={() => navigate(data.link)}>
              <data.emoji className="dark:text-white" />
              <span className="font-semibold dark:text-white text-sm block">{data.name}</span>
            </div>
          </div>  
        ))
      }
      <a  href="https://drive.google.com/file/d/12xX3AlgSTGDO7RLvOTI3B6HyzzG-ZqCJ/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <Button>CV / Resume</Button>
      </a>
    </div>
  )
}