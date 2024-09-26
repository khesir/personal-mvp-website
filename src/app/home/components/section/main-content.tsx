import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function MainContent() {
  return(
    <div className="space-y-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-lg">
        Recent Activity
      </CardTitle>
      <CardDescription>
        No data found
      </CardDescription>
      </CardHeader>    
    </Card>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-lg">
        Recent Project
      </CardTitle>
      <CardDescription>
        No data found
      </CardDescription>
      </CardHeader>    
    </Card>
    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-lg">
        Recent Blog
      </CardTitle>
      <CardDescription>
        No data found
      </CardDescription>
      </CardHeader>    
    </Card>
    </div>
  )
}