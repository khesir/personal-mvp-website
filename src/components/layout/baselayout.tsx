import { Github, Mail, TwitterIcon } from "lucide-react";

interface ContentLayoutProps {
	children: React.ReactNode;
}
export function Layout({children}: ContentLayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex-grow">
                <div className="h-full flex justify-center pt-10">
                    {children}
                </div>
            </div>
            <footer className="flex justify-center mt-5">
                <div className="2xl:w-2/5 xl:w-3/5 lg:w-3/5 sm:w-4/5 w-10/12 flex justify-between items-center">
                    <p className="text-gray-500 font-semibold text-sm p-3">
                        Made with 💜 by khesir. Powered by Vercel
                    </p>
                    <div className="flex items-center gap-2">
                        <a href="mailto:khesir.dev@gmail.com" target="_blank" className="text-inherit border border-gray-400 p-1 rounded-md">
                            <Mail className="w-6 h-6"/>
                        </a>
                        <a href="https://github.com/khesir" target="_blank" className="text-inherit border border-gray-400 p-1 rounded-md">
                            <Github className="w-6 h-6"/>
                        </a>
                        <a href="https://x.com/khesirr" target="_blank" className="text-inherit border border-gray-400 p-1 rounded-md">
                            <TwitterIcon className="w-6 h-6"/>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    )
}