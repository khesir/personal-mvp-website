import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";


interface CookingCardProps {
    title: string;
    description: string;
    status: string
    languages?: string[];
    link: string;
    emoji : IconType | LucideIcon;
}

export const CookingCard : React.FC<CookingCardProps> = ({

    title, 
    description, 
    status,
    languages,
    link,
    emoji: EmojiIcon}) => {
    return(
        <div className='relative rounded-lg p-2 transition-shadow duration-300 ease-in-out hover:shadow-lg hover:bg-blue-200'>
           
            <div className="flex gap-2 items-center" >
                <div className="text-xl">
                    <EmojiIcon/>
                </div>
                <a href={link} target="_blank">
                    <h2 className="text-lg font-bold">{title}</h2>
                </a>
                <p className="text-xs font-semibold">( {status} )</p>
            </div>
            
            {(languages?.length ?? 0) > 0 && (
            <div className="flex gap-3">
                {(languages ?? []).map((item, index) => (
                    <div 
                        key={index}
                        className="text-sm bg font-semibold text-gray-600"
                    >{item}</div>
                ))}
            </div>
            )}

            <p className="text-sm">{description}</p>
        </div>
    )
}