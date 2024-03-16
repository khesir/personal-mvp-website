import { getAllPublicRepo } from '@/actions/gitApi'
import ProjectCard, { ProjectCardProps } from '@/components/ProjectCard'
import { NormalLayout } from '@/layout/layout'
import { useEffect, useState } from 'react'

export default function Project() {
  
  const [projectData, setprojectData] = useState<ProjectCardProps[]>([])
  const [isDataSet, setisDataSet] = useState<Boolean>(false)
  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    try {
      
      const response = await getAllPublicRepo();
     
      if(!response) {
        setisDataSet(false)
      } else {
        const extractedData = response.map((item:any) => ({
          name: item.name,
          description: item.description,
          languages_url: item.languages_url,
          stargazers_count: item.stargazers_count,
          svn_url: item.svn_url
        }));
        setprojectData(extractedData)
        setisDataSet(true)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    console.log(projectData); // Log projectData after it has been updated
  }, [projectData]);

  return (
    <NormalLayout>
        <div className="bg-[#2D6F7D] text-white-100 rounded-xl flex flex-col w-full p-10 mb-">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className=" text-3xl font-bold">Project</h1>
              <p>Project are based on my github public projects. These card are generated using githup rest api</p>
            </div> 
            <div className='flex flex-col gap-5'>
            {projectData.length > 0 ? (
              projectData.map((d, i) => (
                <ProjectCard
                  key={i}
                  name={d.name}
                  description={d.description}
                  languages_url={d.languages_url}
                  stargazers_count={d.stargazers_count}
                  svn_url={d.svn_url}
                />
              ))
            ) : isDataSet ? (
              <p>No project data available.</p>
            ) : (
              <p className='flex justify-center text-2xl font-semibold border rounded-10'>Loading...</p>
            )}
            </div>
          </div>
        </div>
    </NormalLayout>
  )
}