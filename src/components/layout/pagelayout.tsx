import { Banner } from "../banner-section";
import { Outlet } from "react-router-dom";
import { Layout } from "./baselayout";

export function BaseLayout () {
  return (
    <Layout>
      <div className="2xl:w-2/5 xl:w-3/5 lg:w-3/5 sm:w-4/5 w-10/12 h-full ">
          <div className="flex flex-col gap-14">
              <Banner />
              <Outlet /> 
          </div>
      </div>
   </Layout>
  )
}