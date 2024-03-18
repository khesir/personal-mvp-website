
type Props = {
    startedDate: string,
    endedDate: string,
    title: string,
    position?: string,
    description: string,
    skills: {
        name: string
    }[]
}

export default function ExperienceCard({startedDate,endedDate,position,title,description,skills}:Props) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 hover:border rounded-lg p-5">
        {/* Duration */}
        <div className=" w-full sm:w-1/4 h-56 sm:max-h-40 hidden sm:block">
            <span>{startedDate}</span>
            <span> — </span>
            <span>{endedDate}</span>
        </div>
        {/* Content */}
        <div className='flex flex-col gap-2 w-full sm:w-3/4 justify-between'>
            <div className="inline visible sm:hidden">
                <span>{startedDate}</span>
                <span> — </span>
                <span>{endedDate}</span>
            </div>
            <div>    
                <h1 className="font-semibold text-lg">{title}</h1>
                <p>{position}</p>
            </div>
            <p className='text-justify'>{description}</p>
            <div className=' flex flex-wrap gap-2'>
                    {skills.map((d, i) => (
                        <div 
                            key={i}
                            className=' px-5 bg-[#91ffff7e] rounded-2xl inline hover:bg-slate-300 cursor-default'
                        >
                            <span className='text-[#91ffff] opacity-100 text-sm'>
                                {d.name}
                            </span>
                        </div>
                    ))}
                </div>
        </div>

    </div>
  )
}
