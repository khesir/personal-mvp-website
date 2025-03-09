import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {Button} from '@/components/ui/Button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from '@/components/ui/card';
import {Github, TwitterIcon, MailPlusIcon} from 'lucide-react';
import {ProgressList} from '../_components/progressList';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {FaDiscord} from 'react-icons/fa';
import {Experties} from '@/components/constant/data';
import {ExpertiseCard} from '../_components/experitise';

export default function AboutMe() {
	const navigate = useNavigate();
	const {setPathname} = usePathname();
	const location = useLocation();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<>
			<Card
				className="overflow-hidden dark:bg-slate-800 dark:border-gray-700"
				x-chunk="dashboard-05-chunk-4"
			>
				<CardHeader>
					<div className="flex justify-between flex-col md:flex-row gap-3">
						<div className=" w-full h-[300px] overflow-hidden rounded-3xl border md:order-1 md:hidden block">
							<img
								src={'/img/profile3.jpg'}
								className="w-full h-full object-cover pointer-events-none"
							/>
						</div>
						<div>
							<CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
								Yo, Hey! I&apos;m Khesir
							</CardTitle>
							<CardDescription>
								Artist, Game Developer, and Software Engineer
							</CardDescription>
						</div>
						<div>
							<div className="flex items-center gap-2">
								{/* <a href="https://www.linkedin.com/in/ajtollo/" target="_blank" className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md">
                        <Linkedin className="w-6 h-6"/>
                    </a> */}
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
									href="https://discord.gg/B5YR7DPjFX"
									target="_blank"
									className="text-current border dark:border-black-1 border-gray-400 p-1 rounded-md"
									rel="noreferrer"
								>
									<FaDiscord className="w-6 h-6" />
								</a>
								<Button>
									<MailPlusIcon className="mr-3 h-4 w-4" /> Mail me
								</Button>
							</div>
						</div>
					</div>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col md:flex-row gap-5 mb-5">
						{/* Profile Picture */}
						<div className=" w-[40%] h-[300px] overflow-hidden rounded-3xl border md:order-1 md:block hidden">
							<img
								src={'/img/profile3.jpg'}
								className="w-full h-full object-cover pointer-events-none"
							/>
						</div>
						{/* Who I am */}
						<div className="w-full md:w-[60%] mb-5">
							<h1 className="font-semibold text-lg mb-1">Who I am?</h1>
							<div>
								I&apos;m a Software Engineer specializing in Backend Services
								and Servers, with a long-term goal of becoming a Technical
								Artist focused on Procedural Generation and Custom Engine
								Expansion. Passionate about the intersection of technology and
								art.
								<br />
								<br />
								Want to exchange ideas? Feel free to reach out to me
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card
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
			</Card>
		</>
	);
}
