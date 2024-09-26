import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function GuestChatSection() {
  return(
    <div className="space-y-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-lg">
        Currently Under development
      </CardTitle>
      <CardDescription>
        ye it's not working yet
      </CardDescription>
      </CardHeader>    
    </Card>
    </div>
  )
}