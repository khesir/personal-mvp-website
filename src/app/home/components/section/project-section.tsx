import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ProjectSection() {
  return(
    <div className="space-y-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-lg">
        Projects
      </CardTitle>
      <CardDescription>
        still working on it
      </CardDescription>
      </CardHeader>    
    </Card>
    </div>
  )
}