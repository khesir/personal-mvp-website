import { Link } from "react-router-dom"

type CardProps = {
    title: string,
    imgLink: string,
    link: string,
    description: string,
    status:{
        name: string
    }[]
}

export default function TopProjectCard({title, imgLink, link ,description, status}: CardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-5 hover:border rounded-lg p-5">
        
        {/* Content */}
        <div className='flex flex-col gap-2 justify-between'>
            <Link to={link}>
                <h1 className="font-semibold text-lg hover:text-[#91ffff7e] transition duration-100">{title}</h1>
            </Link>
            <p className='text-justify'>{description}</p>
            <div className=' flex flex-wrap gap-2'>
                    {status.map((d, i) => (
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
        {/* Image */}
        { imgLink && <div className="w-full h-56 sm:w-4/6 sm:max-h-40 overflow-hidden">
            <img 
                src={imgLink}
                alt="project image"
                className="object-contain w-full h-full"
            />
        </div>}
    </div>
  )
}
