import { ProjectList } from "../_components/projectsList";
import { useLocation } from "react-router-dom";
import { usePathname } from "@/hooks/use-pathname-store";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function ProjectPage() {
  const {setPathname} = usePathname();
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]); 
  return(
    <>
      <Helmet>
          <title>Aj | Projects</title>
          <meta name="description" content="A collection of projects that I have created or lead" />
          <link rel="canonical" href="/projects"/>
      </Helmet>
    <div className="space-y-5 dark:text-white">
      <p className="font-semibold text-2xl mb-2">
        Projects
      </p>
      <ProjectList />

    </div>
    </>
  )
}