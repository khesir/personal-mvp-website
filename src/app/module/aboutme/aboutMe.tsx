import {Card, CardHeader, CardContent, CardFooter} from '@/components/ui/card';
import {Github, TwitterIcon, Mail} from 'lucide-react';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {FaDiscord} from 'react-icons/fa';

export default function AboutMe() {
	const {setPathname} = usePathname();
	const location = useLocation();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<div className="flex w-full justify-between">
			<Card className="w-full md:w-[400px] lg:w-[300px] flex flex-col md:flex-col items-center md:items-start overflow-hidden dark:bg-slate-800 dark:border-gray-700">
				<CardHeader className="flex-[5] w-full">
					<div className="w-full h-[200px] md:h-full overflow-hidden rounded-3xl border">
						<img
							src={'/img/profile3.jpg'}
							className="w-full h-full object-cover pointer-events-none"
						/>
					</div>
				</CardHeader>

				<CardContent className="flex-[3] w-full">
					<div className="text-xl block font-semibold">Khesir ( Aj )</div>
					<div>
						Backend and game developer focused on scalable architecture for
						games and software.
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
			<div className="flex-[5] text-white">
				<div className="flex flex-col">
					<h1 className="text-xl font-bold">Technologies</h1>
					<ul className="list-disc pl-5">
						<li className="font-semibold">Frontend</li>
						<p className="text-slate-600">
							React.js, Next.js, Svelte.js, Zustand, Tailwind
						</p>
						<li className="font-semibold">Backend</li>
						<p className="text-slate-600">
							Express, Nest.js, Flask, Go-Httprouter, Socket.io
						</p>
						<li className="font-semibold">Database</li>
						<p className="text-slate-600">MongoDB, Mysql, Posgress</p>
						<li className="font-semibold">Networking</li>
						<p className="text-slate-600">Nginx, Traefik</p>
						<li className="font-semibold">Devops</li>
						<p className="text-slate-600">
							Docker, Git, Github, Github Actions
						</p>

						<li className="font-semibold">Hosting & Servers</li>
						<p className="text-slate-600">
							Hostinger, VPS Management, Digital ocean, AWS
						</p>
						<li className="font-semibold">Gamedev/Graphics</li>
						<p className="text-slate-600">Pygame, Unity, Unreal</p>
						<li className="font-semibold">Mobile App Development</li>
						<p className="text-slate-600">Capacitor, React-native</p>
						<li className="font-semibold italic">and more...</li>
					</ul>
				</div>
			</div>
			{/* <Card
				className="flex flex-col items-center dark:bg-slate-800 dark:border-gray-700"
				x-chunk="dashboard-05-chunk-4"
			>
				<CardHeader>
					<CardTitle className="flex justify-center text-xl">
						Software Engineer
					</CardTitle>
					With {new Date().getFullYear() - 2022} years of development experience
				</CardHeader>
				<CardFooter>
					<Button onClick={() => navigate('skillset')}>View Skillset</Button>
				</CardFooter>
			</Card>
			<Card className="flex flex-col items-center dark:bg-slate-800 dark:border-gray-700">
				<CardHeader>
					<CardTitle className="flex justify-center text-xl">
						Art Portfolio
					</CardTitle>
				</CardHeader>
				<CardFooter>
					<Button
						onClick={() => window.open('https://x.com/khesirr/media', '_blank')}
					>
						View Works
					</Button>
				</CardFooter>
			</Card> */}
		</div>
	);
}
