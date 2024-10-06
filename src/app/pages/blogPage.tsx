import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BlogList } from "../_components/blogList";

export function BlogPage() {
  return(
    <div className="space-y-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
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