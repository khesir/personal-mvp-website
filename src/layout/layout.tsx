import ProfileCard from "@/components/ProfileCard"
import Navbar from "@/components/ui/Navbar"

export function NormalLayout({
    children
} : Readonly<{
    children: React.ReactNode
}>) {
    return (
        // Insert Particles or BG
        <div className="">
            <div className="max-w-7xl min-h-fit mx-auto flex justify-center items-center">
                <div className="flex flex-col items-center w-full sm:w-[780px]">
                    <ProfileCard/>
                    <Navbar/>
                    {children}
                </div>
            </div>
        </div>
    )
}