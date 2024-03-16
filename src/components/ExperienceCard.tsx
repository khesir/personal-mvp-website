
type Props = {
    startedDate: string,
    endedDate: string,
    title: string,
    description: string,
    skills: {
        name: string
    }[]
}

export default function ExperienceCard({startedDate,endedDate,title,description,skills}:Props) {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly gap-5 hover:border rounded-lg p-5">
        {/* Duration */}
        <div className="w-full h-56 sm:w-4/6 sm:max-h-40 hidden sm:block">
            <span>{startedDate}</span>
            <span> — </span>
            <span>{endedDate}</span>
        </div>
        {/* Content */}
        <div className='flex flex-col gap-2 justify-between'>
            <div className="inline visible sm:hidden">
                <span>{startedDate}</span>
                <span> — </span>
                <span>{endedDate}</span>
            </div>
            <h1 className="font-semibold text-lg">{title}</h1>
            <p className='text-justify'>{description}</p>
            <div className=' flex flex-wrap gap-2'>
                    {skills.map((d, i) => (
                        <div 
                            key={i}
                            className=' px-5 bg-[#91ffff7e] rounded-2xl inline'
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
