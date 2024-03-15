import Navbar from "@/components/ui/Navbar"

export function NormalLayout({
    children
} : Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className="">
            <div className="max-w-7xl min-h-fit mx-auto border flex justify-center items-center">
                <div className="flex flex-col items-center w-full sm:w-[780px] border">
                    {/* Navbar */}
                    <Navbar/>
 
                    {children}
                </div>
            </div>
        </div>
    )
}