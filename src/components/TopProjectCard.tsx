
type CardProps = {
    title: string,
    imgLink: string,
    description: string,
    status:{
        name: string
    }[]
}

export default function TopProjectCard({title, imgLink, description, status}: CardProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly gap-5 hover:border rounded-lg p-5">
        
        {/* Content */}
        <div className='flex flex-col gap-2 justify-between'>
            <h1 className="font-semibold text-lg">{title}</h1>
            <p className='text-justify'>{description}</p>
            <div className=' flex flex-wrap gap-2'>
                    {status.map((d, i) => (
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
        {/* Image */}
        <div className="w-full h-56 sm:w-4/6 sm:max-h-40 overflow-hidden">
            <img 
                src={imgLink}
                alt="project image"
                className="object-contain w-full h-full"
            />
        </div>
    </div>
  )
}
