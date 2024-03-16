import ExperienceCard from '@/components/ExperienceCard'
import { NormalLayout } from '@/layout/layout'
import { experienceData} from '@/metadata/data'

export default function Experience() {
  return (
    <NormalLayout>
        <div className="bg-[#2D6F7D] text-white-100 rounded-xl flex flex-col w-full p-10 mb-">
          <h1 className=" text-3xl font-bold">Experience</h1>
              <div className=" flex flex-col gap-5">
                  {experienceData.map((d,i) => (
                    <ExperienceCard 
                      key={i}
                      startedDate= {d.startedDate}
                      endedDate={d.endedDate}
                      title={d.title}
                      description={d.description}
                      skills={d.skills}
                    />
                  ))}
              </div>
        </div>
    </NormalLayout>
  )
}
