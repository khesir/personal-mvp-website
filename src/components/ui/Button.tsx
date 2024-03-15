import { Link } from "react-router-dom"

type Props = {
    links: {
        title: string,
        href: string
    }[],
}

export default function MenuButton({links} : Props) {
  return (
    <div className=" flex justify-around w-full gap-5 my-3 text-white-100 ">
        {links.map((link, index) =>(
            <Link 
                key={index}
                to={link.href}
                className=" w-3/5 p-1 text-center bg-[#4B9DAF] rounded">
                <span className=" text-lg">{link.title}</span>
            </Link>
        ))}
    </div>
  )
}
