import { Outlet } from "react-router-dom"


export function Layout() {
    return (
       
        <div className="w-full h-screen bg-[#1A202C] m-0">
            <div className="h-full flex justify-center items-center">
                <Outlet/>
            </div>
        </div>
    )
}