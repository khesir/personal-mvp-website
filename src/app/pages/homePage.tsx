import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Link, useLocation } from "react-router-dom"
import { BlogList } from "../_components/blogList"
import { usePathname } from "@/hooks/use-pathname-store"
import { useEffect } from "react"
import { Button } from "@/components/ui/Button"
import { Github, TwitterIcon, Linkedin } from "lucide-react"
import { Helmet } from "react-helmet-async"
import { TopProjects } from "../_components/topProjects"

export default function Homepage() {
    const {setPathname} = usePathname();
    const location = useLocation();
        
    useEffect(() => {
        setPathname(location.pathname);
    }, [location.pathname, setPathname]);
    return (
        <>
            <Helmet>
                <title>Aj Tollo | Home</title>
                <meta name="description" content="Welcome to my website" />
                <link rel="canonical" href="/"/>
            </Helmet>
            <Card className="overflow-hidden dark:bg-slate-800 dark:border-gray-700" x-chunk="dashboard-05-chunk-4">
                    <CardHeader>
                        <div className="flex justify-between flex-col sm:flex-row gap-3">
                            <div>
                                <CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
                                    Welcome! I'm Aj
                                </CardTitle>
                                <CardDescription>
                                    Software Engineer currently focusing on Fullstack Development
                                </CardDescription>
                            </div>
                            <div>
                                <div className="flex items-center gap-2">
                                    <a href="https://www.linkedin.com/in/ajtollo/" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                        <Linkedin className="w-6 h-6"/>
                                    </a>
                                    <a href="https://github.com/khesir" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                        <Github className="w-6 h-6"/>
                                    </a>
                                    <a href="https://x.com/khesirr" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                                        <TwitterIcon className="w-6 h-6"/>
                                    </a>
                                    <Link to={'/about'}>
                                        <Button>Learn more</Button>
                                    </Link>
                                    
                                </div>    
                            </div>    
                        </div>
                    </CardHeader>   
                </Card>
            <div className="dark:text-white flex flex-col gap-3">
            <div className="flex justify-between">
            <Link to={'/project'}>
                            <p className="font-semibold text-2xl mb-2">Top 3 Project</p>
                        </Link>
                        <div className="flex flex-col items-end pt-2">
                            <Link to={'/projects'} className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60">
                                See more
                            </Link>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <TopProjects />
                    </div>

                </div>
            <div className="space-y-5">
                <div className="dark:text-white">
                        <div className="flex justify-between">
                            <Link to={'/blog'}>
                                <p className="font-semibold text-2xl mb-2">Recent Blog</p>
                            </Link>
                            <div className="flex flex-col items-end pt-2">
                                <Link to={'/blogs'} className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60">
                                   See more
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <BlogList />
                    </div>
                </div>
            </div>
        </>
    )
}
