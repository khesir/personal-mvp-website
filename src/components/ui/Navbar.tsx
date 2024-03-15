import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import MenuButton from "./Button";


export default function Navbar() {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center max-w-full p-5 bg-[#4B9DAF] sm:rounded-lg sm:mt-10 gap-5 ">
        
        {/* Image */}
        <div className="w-fit h-fit">
          <img 
            src="src/assets/img/profile1.jpg" 
            alt="profile Image" 
            width={400}
            height={400}
            className="rounded-lg sm:rounded-full object-cover max-w-full max-h-full" />            
        </div>

        <div className="flex flex-col max-h-full max-w-full justify-between p-5 gap-3 bg-[#2D6F7D] rounded-xl text-[#FFFFFF] text-wrap">
          <div>
            <h2 className=" text-3xl font-bold">Tollo, Aj R.</h2>
            <h3>Khesir</h3>
          </div>  
            <p>
              I'm a Computer Science student and full-stack developer with a strong passion for Graphics, Game, Bot, and Web/App development. 
            </p>
        </div>

        {/* Link */}
        <div className=" p-2 bg-[#2D6F7D] rounded-xl text-[#FFFFFF] flex flex-row sm:flex-col justify-around gap-5 ">
          <FaGithub size={40}/>
          <FaLinkedin size={40}/>
          <RiFilePaper2Line size={40}/>
        </div>
        
      {/* Buttons */}
      </div>
      <div className="w-full flex justify-around px-2">
        <MenuButton
          links ={[
            {
              title: "About",
              href: "/about"
            },
            {
              title: "Projects",
              href: "/projects"
            },
            {
              title: "Experience",
              href: "/experience"
            }
          ]}
        />
      </div>

    
    </>
  )
}
