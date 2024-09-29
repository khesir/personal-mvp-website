import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavStore } from "@/hooks/use-navbar-items";
import { BsChevronDoubleRight } from "react-icons/bs";

export function MainContent() {
  const { setActive } = useNavStore();
  
  const handleClick = (name: string) => {
    setActive(name);
  };
  return(
    <div className="space-y-5">
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-2 text-lg cursor-default">
        Recent Activity
      </CardTitle>
      <CardDescription>
        No data found
      </CardDescription>
      </CardHeader>    
    </Card>
      <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-1 text-lg cursor-default">
        <p>Recent Project</p>
        <a onClick={() => handleClick('Projects')} className="cursor-pointer"><BsChevronDoubleRight className="w-3 h-3" /></a>
      </CardTitle>
      <CardDescription>
        No data found
      </CardDescription>
      </CardHeader>    
    </Card>
    <Card className="overflow-hidden" x-chunk="dashboard-05-chunk-4">
      <CardHeader >
      <CardTitle className="group flex items-center gap-1 text-lg cursor-default">
        <p>Recent Blog</p>
        <a onClick={() => handleClick('Blogs')} className="cursor-pointer"><BsChevronDoubleRight className="w-3 h-3" /></a>
      </CardTitle>
      <CardDescription>
        No data found
      </CardDescription>
      </CardHeader>    
    </Card>
    </div>
  )
}