import {Card, CardHeader, CardContent, CardFooter} from '@/components/ui/card';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';

import {Github, TwitterIcon, Mail, LinkedinIcon} from 'lucide-react';

import {TopProjects} from '@/app/module/home/topProjects';
import {Button} from '@/components/ui/Button';

export default function Homepage() {
	const {setPathname} = usePathname();
	const location = useLocation();
	const navigate = useNavigate();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);

	return (
		<div className="dark:text-white flex flex-col gap-3 mt-5">
			<Card className="w-full flex flex-row items-center justify-center overflow-hidden dark:bg-slate-800 dark:border-gray-700">
				<CardHeader className=" w-[250px]">
					<div className="w-full overflow-hidden rounded-3xl border">
						<img
							src={'/img/profile3.jpg'}
							className="w-full h-full object-cover pointer-events-none"
						/>
					</div>
				</CardHeader>

				<CardContent className="flex-[3] w-full">
					<div className="text-xl block font-semibold">Khesir (AJ)</div>
					<div>Software Engineer</div>
					<div className="mt-5">
						Backend and game developer focused on scalable architecture for
						games and software.
					</div>

					<div className="space-x-3 mt-3">
						<Button variant={'outline'}>Contact Me</Button>
						<Button onClick={() => navigate('skillset')}>More Details</Button>
					</div>
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
							href="https://www.linkedin.com/in/ajtollo/"
							target="_blank"
							className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md"
							rel="noreferrer"
						>
							<LinkedinIcon className="w-6 h-6" />
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
