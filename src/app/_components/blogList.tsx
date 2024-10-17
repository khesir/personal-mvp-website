/* eslint-disable @typescript-eslint/no-explicit-any */
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
    return <div> Fetching data </div>
  }
  if (res) {
    return <div> {res} </div>
  }
  return(
    <>
      {projects.map((d:any,i) => (
      <div className="flex flex-col cursor-default gap-2" key={i}>
        <a className="font-semibold text-lg hover:underline decoration-2 cursor-pointer text-blue-600 dark:text-blue-400" href={'/blogs/view/'+d.id}>
          {d.properties.Name.title[0].plain_text}
        </a>
        <p className="font-semibold text-sm text-slate-500">
          {dateParser(d.created_time)}
        </p>
      </div>
    ))}
    </>
  )
}