import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function BlogSection() {
  return(
    <div className="space-y-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-lg">
        Blogs
      </CardTitle>
      <CardDescription>
        Currently Under development
      </CardDescription>
      </CardHeader>    
    </Card>
    </div>
  )
}