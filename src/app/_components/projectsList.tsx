/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { dateParser } from "@/lib/utils";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function ProjectList () {
  const [projects, setProjects] = useState([]);
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation()

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
      <div className='flex flex-col gap-5'>
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton key={index} className="h-[150px] w-full dark:bg-slate-700" />
      ))}
    </div>
    )
  }
  if (res) {
    return <div> {res} </div>
  }
  if (projects.length === 0) {
    return <div> No Data Available</div>
  }
  console.log('wah')
  return(
    <div className="flex flex-col gap-5">
      {projects.map((d:any,i) => (
        <a href={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`}>
          <Card className="relative w-full h-[150px] overflow-hidden dark:bg-slate-800 dark:border-gray-700 cursor-pointer"  x-chunk="dashboard-05-chunk-4" key={i}>
            <div className="flex items-center justify-start h-full">
              <div className="w-[20%] h-full flex-shrink-0">
                  <img 
                      src={d.properties['Image'].files.length === 0 ? '/img/placeholder.jpg': d.properties['Image'].files[0].file.url}
                      className="w-full h-full object-top object-cover"
                  />
              </div>
            <CardHeader className="flex-grow">
              <CardTitle className="font-semibold text-lg  hover:underline" >
                  <Link to={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`} className={`text-blue-600 dark:text-blue-400 ${location.pathname === '/' ? 'text-sm' : 'text-lg'}`}>
                    {d.properties.Name.title[0].plain_text}
                  </Link>
              </CardTitle>
              <CardDescription className="font-semibold text-sm">
                <div className="flex gap-1">
                  {d.properties['Languages']?.multi_select.map((data : any, index : any) => (
                    <Badge key={index} variant={'outline'}>{data.name}</Badge>
                  ))}
                </div>
                <p className="font-semibold text-sm text-slate-500 dark:text-slate-400">{d.properties['Released Date']?.date?.start ? dateParser(d.properties['Released Date'].date.start) : 'In progress'}</p>
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
    </div>
  )
}