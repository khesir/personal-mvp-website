import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectList } from "../_components/projectsList";

export function ProjectPage() {
  
  return(
    <div className="space-y-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-xl">
        Projects
      </CardTitle>
      <CardDescription>
        <ProjectList />
      </CardDescription>
      </CardHeader>    
    </Card>
    </div>
  )
}