/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { dateParser } from "@/lib/utils";
import axios from "axios";
import { Github, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

export function ProjectList () {
  const [projects, setProjects] = useState([]);
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await axios.get('https://personal-backend-psi.vercel.app/projects/')
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
    return <div> Fetching data </div>
  }
  if (res) {
    return <div> {res} </div>
  }
  return(
    <>
      {projects.map((d:any,i) => (
        <a href={'/projects/view/'+d.id}>
          <Card className="relative overflow-hidden dark:bg-slate-800 dark:border-gray-700 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-400"  x-chunk="dashboard-05-chunk-4" key={i}>
            <div className="flex items-center justify-start h-full">
              <div className="w-[20%] h-full flex-shrink-0">
                  <img 
                      src={'/img/profile1.jpg'}
                      className="w-full h-full object-top object-cover"
                  />
              </div>
            <CardHeader className="flex-grow">
              <CardTitle className="font-semibold text-lg" >
                
                  {d.properties.Name.title[0].plain_text}
                
              </CardTitle>
              <CardDescription className="font-semibold text-sm">
                <div className="flex gap-1">
                  <Badge>test</Badge>
                  <Badge>test</Badge>
                  <Badge>test</Badge>
                  <Badge>test</Badge>
                </div>
                <p>{dateParser(d.created_time)}</p>
              </CardDescription>
            </CardHeader>
            </div>
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