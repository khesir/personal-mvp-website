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
        const data = await axios.get('https://personal-backend-psi.vercel.app/blogs/')
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
      <div className="flex justify-between items-center cursor-default" key={i}>
        <a className="font-semibold text-lg hover:underline decoration-2 cursor-pointer" href={'/blogs/view/'+d.id}>
          {d.properties.Name.title[0].plain_text}
        </a>
        <p className="font-semibold text-sm">
          {dateParser(d.created_time)}
        </p>
      </div>
    ))}
    </>
  )
}