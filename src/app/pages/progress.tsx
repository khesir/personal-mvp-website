import { usePathname } from "@/hooks/use-pathname-store";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ProgressList } from "../_components/progressList";
import { Helmet } from "react-helmet-async";

export function ProgressPage() {
  const {setPathname} = usePathname();
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]); 
  return(
    <>
      <Helmet>
          <title>Khesir | Progress-report</title>
          <meta name="description" content="Welcome to my website" />
          <link rel="canonical" href="/progres"/>
      </Helmet>
    <div className="space-y-5 dark:text-white">
        <p className="font-semibold text-2xl mb-2">Progress report</p>
        <ProgressList />
    </div>
    </>
  )
}