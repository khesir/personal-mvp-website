import { BlogList } from "../_components/blogList";
import { usePathname } from "@/hooks/use-pathname-store";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export function BlogPage() {
  const {setPathname} = usePathname();
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]); 
  return(
    <>
      <Helmet>
          <title>Aj | Blogs</title>
          <meta name="description" content="Blog post about personal interest niche tech and other interest that I have" />
          <link rel="canonical" href={`/blogs`}/>
      </Helmet>
    <div className="space-y-5 dark:text-white">
      <p className="font-semibold text-2xl mb-2">Blogs</p>
      <div className="flex flex-col gap-5">
          <BlogList />
      </div>
    </div>
    </>
  )
}