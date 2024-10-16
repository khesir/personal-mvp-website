import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BlogList } from "../_components/blogList";
import { usePathname } from "@/hooks/use-pathname-store";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export function BlogPage() {
  const {setPathname} = usePathname();
  const location = useLocation();
  useEffect(() => {
    setPathname(location.pathname);
  }, [location.pathname, setPathname]); 
  return(
    <div className="space-y-5">
<Card className="overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-xl">
        Blogs
      </CardTitle>
      <CardDescription>
        <BlogList />
      </CardDescription>
      </CardHeader>    
    </Card>
    </div>
  )
}