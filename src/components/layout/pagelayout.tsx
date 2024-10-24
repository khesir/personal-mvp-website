import { Banner } from "../banner-section";
import { Outlet } from "react-router-dom";
import { Layout } from "./baselayout";
import { Navbar } from "../navbar";

export function BaseLayout () {
  return (
    <Layout>
      <div className="2xl:w-[70%] xl:w-3/5 lg:w-3/5 sm:w-4/5 w-10/12 h-full ">
          <div className="flex flex-col gap-5">
              <Banner />
              <Navbar />
              <Outlet /> 
          </div>
      </div>
   </Layout>
  )
}