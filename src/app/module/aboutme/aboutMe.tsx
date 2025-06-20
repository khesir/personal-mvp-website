import {Card, CardHeader, CardContent, CardFooter} from '@/components/ui/card';
import {Github, TwitterIcon, Twitch} from 'lucide-react';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/Button';

export default function AboutMe() {
	const {setPathname} = usePathname();
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<>
			<div>
				{' '}
				<Button onClick={() => navigate('/')}>Back</Button>
			</div>
			<div className="flex w-full justify-between gap-5">
				<Card className="w-full h-fit md:w-[400px] lg:w-[300px] flex flex-col md:flex-col items-center md:items-start overflow-hidden dark:bg-slate-800 dark:border-gray-700">
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
								href="https://www.twitch.tv/khesir"
								className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md"
								rel="noreferrer"
							>
								<Twitch className="w-6 h-6" />
							</a>
						</div>
					</CardFooter>
				</Card>
				<Card className="flex-[5] dark:bg-slate-800 dark:border-gray-700 p-5">
					Yo! Nice to meet you — I’m Aj (also known as Khesir), a Software
					Engineer with a focus on backend and game development.
					<br />
					<br />
					While I specialize in backend, I’m more of a full-stack developer — I
					enjoy handling the whole lifecycle of an app: frontend, backend,
					deployment, and even DevOps. But when it comes down to what I really
					dive deep into, it’s backend architecture and logic.
					<br />
					<br />
					{/* Programming */}
					Whatever kind of project it is — even no-code — I enjoy working on it
					as long as it teaches or reinforces real programming principles.
					Things like state management, understanding data types, working with
					classes, and building logic with conditions are what matter most to
					me. I’m into solving real-life problems through code, especially when
					it comes to scalability and structure. I naturally find myself asking,
					“Is this scalable?” or “Is this implementation logically sound?” — not
					just during testing, but right from the design and development phase.
					I like thinking a few steps ahead and building things that make sense
					long-term.
					<br />
					<br />
					{/* Game Development */}
					I’m also a game developer — I work with Lua scripting and engines like
					Unity. For me, game dev is like the ultimate challenge; it blends
					logic, creativity, and systems all at once. Honestly, I see it as a
					life skill I want to pursue deeply.
					<br />
					<br />
					{/* Future Aspects */}
					Outside of code and games, I’ve got a bunch of other interests too.
					The skills I’ve built branch out into things like art and cooking —
					and if life opens that door, I’d love to dive into those worlds as
					well.
				</Card>
				{/* <div className="flex-[5] text-white">
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
			</div> */}
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
		</>
	);
}
