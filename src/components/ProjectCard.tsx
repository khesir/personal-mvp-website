import { getRepoLanguages } from '@/actions/gitApi'
import { useEffect, useState } from 'react'
import { FaRegStar, FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export type ProjectCardProps = {
    name: string,
    description: string,
    languages_url: string,
    stargazers_count : number
    svn_url: string,
}

export default function ProjectCard({name,description,stargazers_count,svn_url} : ProjectCardProps) {
    const [languagesData,setlanguagesData] = useState<string[]>([])
    useEffect(() => {
       handleData()
    },[])

    const handleData = async () =>{
        try {
            const data = await getRepoLanguages(name)
            setlanguagesData(data as string[]) // Add type assertion here
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className="flex flex-col justify-evenly gap-5 border rounded-lg p-5">
        
    {/* Content */}
        <div className='flex flex-col gap-2 justify-between'>
            <Link to={svn_url} >
                <h1 className="font-semibold text-lg">{name}</h1>
            </Link>
            <p className='text-justify'>{description}</p>
        </div>
        <div className=' flex gap-2'>
            <div className='flex flex-wrap items-center gap-2'>
                {languagesData.map((d,i) => (
                    <div 
                    key={i}
                    className=' px-5 bg-[#91ffff7e] rounded-2xl inline'
                >
                    <span className='text-[#91ffff] opacity-100 text-sm'>
                        {d}
                    </span>
                </div>
                ))}
            </div>
             <div className='flex gap-2 items-center'>
                <FaRegStar/>
                <span>{stargazers_count}</span>
            </div>
        </div>
       
    </div>
  )
}
