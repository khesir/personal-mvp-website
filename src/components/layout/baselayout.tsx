interface ContentLayoutProps {
	children: React.ReactNode;
}
export function Layout({children}: ContentLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col dark:bg-slate-800 ">
            <div className="flex-grow">
                <div className="h-full flex justify-center pt-10">
                    {children}
                </div>
            </div>
            <footer className="flex justify-center my-10">
                <div className=" flex flex-col sm:flex-row justify-between items-center">
                    <p className="flex text-gray-500 font-semibold text-sm p-3">
                        Made with 💜 by khesir. Powered by Vercel
                    </p>
                    {/* <div className="flex items-center gap-2">
                    {
                        navdata.map((data, index) => (
                            <NavbarItems 
                                key={index}
                                name={data.name}
                                link={data.link} isNav={false} emoji={data.emoji}/>
                        ))
                    }
                    </div> */}
                </div>
            </footer>
        </div>
    )
}