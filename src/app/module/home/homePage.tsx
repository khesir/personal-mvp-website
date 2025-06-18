import {Card, CardHeader, CardContent, CardFooter} from '@/components/ui/card';
import {Link, useLocation} from 'react-router-dom';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';

import {Github, TwitterIcon, Mail} from 'lucide-react';
import {TopProjects} from '../_components/topProjects';

import {FaDiscord} from 'react-icons/fa';

export default function Homepage() {
	const {setPathname} = usePathname();
	const location = useLocation();

	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<div className="dark:text-white flex flex-col md:flex-row gap-3 mt-5">
			<Card className="w-full md:w-[400px] flex flex-col md:flex-col items-center md:items-start overflow-hidden dark:bg-slate-800 dark:border-gray-700">
				<CardHeader className="flex-[5] w-full">
					<div className="w-full h-[200px] md:h-full overflow-hidden rounded-3xl border">
						<img
							src={'/img/profile3.jpg'}
							className="w-full h-full object-cover pointer-events-none"
						/>
					</div>
				</CardHeader>

				<CardContent className="flex-[3] w-full">
					<div className="text-xl block font-semibold">Khesir</div>
					<div>Artist, Game Developer, and Software Engineer</div>
					<div className="pt-5">Email me or pm me via discord for requests</div>
				</CardContent>

				<CardFooter className="flex-[1] w-full">
					<div className="flex flex-wrap items-center gap-2">
						<a
							href="https://github.com/khesir"
							target="_blank"
							className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md"
							rel="noreferrer"
						>
							<Github className="w-6 h-6" />
						</a>
						<a
							href="https://x.com/khesirr"
							target="_blank"
							className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md"
							rel="noreferrer"
						>
							<TwitterIcon className="w-6 h-6" />
						</a>
						<a
							href="mailto:khesir2002@gmail.com"
							className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md"
							rel="noreferrer"
						>
							<Mail className="w-6 h-6" />
						</a>
						<a
							href="https://discord.gg/B5YR7DPjFX"
							target="_blank"
							className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md"
							rel="noreferrer"
						>
							<FaDiscord className="w-6 h-6" />
						</a>
					</div>
				</CardFooter>
			</Card>
			<div className="flex flex-col w-full gap-3 dark:bg-slate-800 dark:border-gray-700">
				<div className="flex justify-between">
					<Link to={'/works'}>
						<p className="font-semibold text-2xl mb-2">Top Project</p>
					</Link>
					<div className="flex flex-col items-end pt-2">
						<Link
							to={'/works'}
							className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60"
						>
							See more
						</Link>
					</div>
				</div>
				<div className="flex flex-col">
					<TopProjects />
				</div>
			</div>
		</div>
	);
}
