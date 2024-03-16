import React from 'react'

type Props = {
        children: React.ReactNode,
        title: string,
        description: string,
        skills: {
            name: string
        }[]
}

function SkillIcon({ children, title, description,skills }: Props) {
    return (
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-7 p-2 hover:border">
            <div className='flex sm:justify-center sm:items-center'>
                {children}
            </div>
            <div className='flex flex-col gap-2'>
                <h1 className='font-semibold text-lg'>{title}</h1>
                <p className=' text-justify'>{description}</p>
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

export default SkillIcon