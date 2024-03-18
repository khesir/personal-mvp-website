import { NormalLayout } from "@/layout/layout";
import { Link } from "react-router-dom";
import TopProjectCard from "@/components/TopProjectCard";
import { FaCode, FaGitAlt, FaTasks, FaTerminal } from "react-icons/fa";
import SkillIcon from "@/components/SkillIcon";
import { educationData, latestExperience, top3data } from "@/metadata/data";
import ExperienceCard from "@/components/ExperienceCard";

export default function About() {
  
  return (
    <NormalLayout>
        <div className="bg-[#2D6F7D] text-white-100 sm:rounded-xl flex flex-col max-w-full p-10 mb-0 sm:mb-5 gap-10">
             {/* About me */}
            <div className="flex w-full gap-10">
              <div className=" flex flex-col gap-5 w-full">
                <h1 className=" text-3xl font-bold">Information</h1>
                <ul className="flex flex-col gap-2 text-justify border p-5 rounded-lg">
                  <li className="text-lg font-semibold">About me</li>
                  <li>Currently a Computer Science Student In Ateneo De Davao University</li>
                  <li>Experience in web-development mostly using typescript, react, nextJS and some javascript framework.</li>
                  <li>Interested in Graphics and Software Engineering</li>
                </ul>

              </div>
             
              {/* Insert P5.js container */}
              {/* <div id="p-container" className="w-full sm:w-3/6 h-auto">
                <ReactP5Wrapper sketch={sketch} />
              </div> */}
            </div>
            {/* Skills */}
            <div className="flex flex-col gap-5">
              <h1 className=" text-3xl font-bold">Skills</h1>
              <div className="flex flex-col gap-8 ">
                
                <SkillIcon
                  title="Development"
                  description="I am a passionate developer proficient in a wide range of technologies, including Typescript, JavaScript, Java, C#, and Python. With a strong foundation in software development principles, I thrive in creating innovative and efficient solutions to complex problems."
                  skills= {[
                    { name: "Typescript" },
                    { name: "Javascript" },
                    { name: "Java" },
                    { name: "C#" },
                    { name: "Python"}
                  ]}
                >
                  <FaCode className=" text-7xl text-white" />
                </SkillIcon>
                <SkillIcon
                  title="Project Management"
                  description="I excel in project management, combining technical expertise with effective leadership to drive successful outcomes. Skilled in Agile Framework, UML Design, Collaboration, and Leadership, I lead teams through the entire project lifecycle, ensuring timely delivery and high-quality results."
                  skills= {[
                    { name: "Agile Framework" },
                    { name: "Scrum Framework" },
                    { name: "UML Design" },
                    { name: "Collaboration" },
                    { name: "Leadership" },
                  ]}
                >
                  <FaTasks className="text-7xl text-white" />
                </SkillIcon>
                <SkillIcon
                  title="Data structure and Algorithm"
                  description="I have a deep understanding of data structures and algorithms, leveraging this knowledge to design robust and scalable software solutions."
                  skills= {[
                    { name: "Problem Solving" }
                  ]}
                >
                  <FaTerminal className="text-7xl text-white" />
                </SkillIcon>
                <SkillIcon
                  title="Collaboration and Version Control"
                  description="I excel in collaboration and version control, leveraging tools like GitHub, GitBash, and Docker to manage projects efficiently. With expertise in these technologies, I streamline development workflows, facilitate team collaboration, and ensure code quality and stability throughout the software development lifecycle."
                  skills= {[
                    { name: "Github" },
                    { name: "Gitbash" },
                    { name: "Docker" },
 
                  ]}
                >
                  <FaGitAlt className="text-7xl text-white" />
                </SkillIcon>
                
              </div>
            </div>

            {/* Projects */}
            <div className="flex flex-col gap-10 w-full">
              <h1 className=" text-3xl font-bold">Top 3 projects</h1>
              <div className=" flex flex-col gap-5">
                {top3data.map((d,i) =>(
                  <TopProjectCard
                  key={i}
                  title = {d.title}
                  imgLink = {d.imgLink}
                  link = {d.link}
                  description = {d.description}
                  status = {d.status}
                />
                ))}
              </div>
              <Link target="_blank" to={"https://github.com/khesir"}>
                <span className=" flex justify-end text-lg  hover:cursor-pointer hover:text-[#91ffff]">See more on Github</span>
              </Link>
            </div>

            
            {/* Experience */}
            <div className="flex flex-col gap-5">
              <h1 className=" text-3xl font-bold">Experience</h1>
              <div className=" flex flex-col gap-5">
                  {latestExperience.map((d,i) => (
                    <ExperienceCard 
                      key={i}
                      startedDate= {d.startedDate}
                      endedDate={d.endedDate}
                      title={d.title}
                      position={d.position}
                      description={d.description}
                      skills={d.skills}
                    />
                  ))}
              </div>
            </div>
            {/* Education */}
            <div className="flex flex-col gap-5">
              <h1 className=" text-3xl font-bold">Education</h1>
              <div className=" flex flex-col gap-5">
                  {educationData.map((d,i) => (
                    <ExperienceCard 
                      key={i}
                      startedDate= {d.startedDate}
                      endedDate={d.endedDate}
                      title={d.title}
                      description={d.description}
                      skills={d.skills}
                    />
                  ))}
              </div>
            </div>
            
            <div className="flex flex-col justify-center items-center gap-5">
              <h1 className="text-center text-lg font-semibold">Would you like to reach out?</h1>
              <div>
                <Link
                  to={"#"}
                  className="py-3 px-10 rounded-md bg-[#4B9DAF] shadow-md"
                >
                  Contact Me
                </Link>
              </div>
            </div>
        </div>
    </NormalLayout>
  )
}


