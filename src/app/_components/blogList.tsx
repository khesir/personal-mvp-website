/* eslint-disable @typescript-eslint/no-explicit-any */
import { Skeleton } from "@/components/ui/skeleton";
import { dateParser } from "@/lib/utils";
import axios from "axios";
import { useState, useEffect } from "react";

export function BlogList () {
  const [projects, setProjects] = useState([]);
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const data = await axios.get('https://personal-backend-psi.vercel.app/blogs?pageSize=5')
        console.log(data.data.result)
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
    return <div className='flex flex-col gap-5'>
    {Array.from({ length: 5 }, (_, index) => (
      <Skeleton key={index} className="h-[50px] w-full dark:bg-slate-700" />
    ))}
  </div>
  }
  if (res) {
    return <div> {res} </div>
  }
  return(
    <>
      {projects.map((d:any,i) => (
      <div className="flex flex-col cursor-default gap-2" key={i}>
        <a className="font-semibold text-lg hover:underline decoration-2 cursor-pointer text-blue-600 dark:text-blue-400" href={`/blogs/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`}>
          {d.properties.Name.title[0].plain_text}
        </a>
        <p className="font-semibold text-sm text-slate-500 dark:text-slate-400">{d.properties['Released Date']?.date?.start ? dateParser(d.properties['Released Date'].date.start) : 'In progress'}</p>
      </div>
    ))}
    </>
  )
}