/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function TopProjects () {
  const [projects, setProjects] = useState([]);
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await axios.get('https://personal-backend-psi.vercel.app/projects?pageSize=3')
        setProjects(data.data.result.results)
      } catch(e: any)  {
        setRes(e.toString())
      } finally {
        setLoading(false)
      }
    };

    fetchData();
  },[])
  if (loading) {
    return (
      <>
        {Array.from({ length: 3 }, (_, index) => (
        <Skeleton key={index} className="h-[350px]  flex-1  dark:bg-slate-700" />
      ))}
      </>
    )
  }
  if (res) {
    return <div> {res} </div>
  }
  if (projects.length === 0) {
    return <div> No Data Available</div>
  }
  return(
    <>
      {projects.map((d:any,i) => (
        <a href={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`}>
          <Card className="p-0 m-0 relative w-full h-[350px] overflow-hidden dark:bg-slate-800 dark:border-gray-700 cursor-pointer"  x-chunk="dashboard-05-chunk-4" key={i}>
            <div className="w-full h-[150px] flex-shrink-0">
              <img 
                  src={d.properties['Image'].files.length === 0 ? '/img/placeholder.jpg': d.properties['Image'].files[0].file.url}
                  className="w-full h-full object-center object-cover"
              />
            </div>
            <CardHeader className="flex-grow w-full">
              <CardTitle className="font-semibold text-[15px]  hover:underline p-0 m-0" >
                  <Link to={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`} className="text-blue-600 dark:text-blue-400">
                    {d.properties.Name.title[0].plain_text}
                  </Link>
              </CardTitle>
              <CardDescription>
              {d.properties['Languages']?.multi_select.map((data : any, index : any) => (
                <Badge key={index} variant={'outline'}>{data.name}</Badge>
                ))}
              </CardDescription>
            </CardHeader>
              <CardContent className="min-h-full overflow-hidden">
                <div className="truncate-text h-full text-justify text-[13px]">
                  {d.properties.Description.rich_text[0]?.plain_text}
                </div>
              </CardContent>
                {/* <p className="font-semibold text-sm text-slate-500 dark:text-slate-400">{d.properties['Released Date']?.date?.start ? dateParser(d.properties['Released Date'].date.start) : 'In progress'}</p> */}
            {/* <div className="absolute bottom-1 right-1 flex">
              <Button size={'icon'} variant={'outline'}><Github /></Button>
              <Button size={'icon'} variant={'outline'}><Rocket /></Button>
            </div> */}
          </Card>
      </a>

    ))}
    </>
  )
}