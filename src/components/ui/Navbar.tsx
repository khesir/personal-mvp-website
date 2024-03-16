import MenuButton from "./Button";


export default function Navbar() {
  return (
    <>
      <div className="w-full flex justify-around px-2">
        <MenuButton
          links ={[
            {
              title: "About",
              href: "/about"
            },
            {
              title: "Projects",
              href: "/projects"
            },
            {
              title: "Experience",
              href: "/experience"
            }
          ]}
        />
      </div>

    
    </>
  )
}
