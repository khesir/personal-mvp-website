import { NormalLayout } from "@/layout/layout";
import { Link } from "react-router-dom";
import {ReactP5Wrapper}  from 'react-p5-wrapper';
import sketch from '@/sketch/sketch'

export default function About() {
  
  return (
    <NormalLayout>
        <div className="bg-[#2D6F7D] text-white-100 sm:rounded-xl flex flex-col max-w-full p-10 mb-5 gap-10">
             {/* About me */}
            <div className="flex flex-col sm:flex-row justify-evenly w-full">
              <div className=" flex flex-col gap-5 w-full sm:w-3/6">
                <h1 className=" text-4xl font-bold">About me</h1>
                <ul className="flex flex-col gap-2">
                  <li>- Currently a Computer Science Student In Ateneo De Davao University</li>
                  <li>- Experience in web-development mostly using typescript, react, nextJS and any Javascript Framework.</li>
                  <li>- Currently studying creative coding and mobile development</li>
                </ul>

                {/* Insert CV Link */}
                <div>
                  <Link
                    to={"#"}
                    className="py-2 px-10 rounded-md bg-[#4B9DAF]">
                    CV                  
                  </Link>
                </div>
              </div>
              {/* Insert P5.js container */}
              <div id="p-container" className="w-full sm:w-3/6 h-auto">
                <ReactP5Wrapper sketch={sketch} />
              </div>
            </div>

            {/* Projects */}
            <div className="flex flex-wrap">
            <h1 className=" text-4xl font-bold">Top 3 projects</h1>
            </div>

            {/* Skills */}
            <div className="flex flex-wrap">

            </div>
        </div>
    </NormalLayout>
  )
}


