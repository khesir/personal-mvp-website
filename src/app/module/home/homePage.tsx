import {Card, CardContent} from '@/components/ui/card';
import {useLocation, useNavigate} from 'react-router-dom';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect, useState} from 'react';

import {TopProjects} from '@/app/module/home/topProjects';
import {Button} from '@/components/ui/Button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {toast} from 'sonner';
import {ExperienceSection} from './experienceSection';
import {Icon} from '@iconify/react';

// Iconify icon names for the respective languages
const csharpIcon = 'devicon:csharp';
const typescriptIcon = 'devicon:typescript';
const pythonIcon = 'devicon:python';
const cplusplusIcon = 'devicon:cplusplus';
const luaIcon = 'devicon:lua';
export default function Homepage() {
	const {setPathname} = usePathname();
	const location = useLocation();
	const navigate = useNavigate();

	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [emailError, setEmailError] = useState('');
	const [messageError, setMessageError] = useState('');
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);

	const onSubmit = async () => {
		let valid = true;
		setEmailError('');
		setMessageError('');
		setLoading(true);
		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			setEmailError('Please enter a valid email.');
			valid = false;
		}
		if (!message) {
			setMessageError('Please enter a message.');
			valid = false;
		}
		if (!valid) return;

		const payload = {
			content: '<@409467545951928322> Someone Reached out',
			allowed_mentions: {
				users: ['409467545951928322'],
			},
			embeds: [
				{
					description: 'Source: Personal Website',
					color: 0x00bfff,
					fields: [
						{
							name: 'Email',
							value: email,
							inline: true,
						},
						{
							name: 'Message',
							value: message,
							inline: false,
						},
						{
							name: 'Quick Reply',
							value: `[📧 Reply via Gmail](https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)})`,
						},
					],
					footer: {
						text: 'Sent via webhook',
					},
					timestamp: new Date().toISOString(),
				},
			],
		};
		try {
			setLoading(true);
			const resPromise = fetch(import.meta.env.VITE_WEBHOOK_CONTACT, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});
			await toast.promise(resPromise, {
				loading: 'Sending...',
				success: 'Message sent successfully!',
				error: 'Error sending message, please try again later',
			});
		} catch (err) {
			toast.error(`Error sending embed: ${err}`);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className="dark:text-white flex flex-col gap-3 mt-5">
			<div className=" sm:border rounded-3xl w-full flex flex-col md:flex-row items-center justify-center overflow-hidden dark:bg-slate-800 dark:border-gray-700 ">
				<div className="w-[250px] h-[250px]">
					<div className="w-full overflow-hidden rounded-3xl border">
						<img
							src={'/img/profile3.jpg'}
							className="w-full h-full object-cover pointer-events-none"
						/>
					</div>
				</div>

				<CardContent className="flex-[3] w-full ">
					<div className="text-xl block font-semibold">Khesir (AJ)</div>
					<div>Software Engineer</div>
					<div className="mt-5">
						Yo! Nice to meet you — I’m Aj (also known as Khesir), a Software
						Engineer specializing in backend and game development.
					</div>

					<div className="mt-2">
						I focus on building scalable architectures for both games and
						software platforms.
					</div>

					<div className="space-x-3 md:flex mt-3 hidden">
						{/* <Button
							variant={'outline'}
							onClick={() => {
								const el = document.getElementById('contact');
								if (el) el.scrollIntoView({behavior: 'smooth'});
							}}
						>
							Contact Me
						</Button> */}
						<Icon icon={typescriptIcon} className="w-8 h-8" />
						<Icon icon={pythonIcon} className="w-8 h-8" />
						<Icon icon={csharpIcon} className="w-8 h-8" />
						<Icon icon={cplusplusIcon} className="w-8 h-8" />
						<Icon icon={luaIcon} className="w-8 h-8" />
					</div>
				</CardContent>
			</div>
			{/* <iframe
				frameBorder="0"
				className="w-full h-[180px] 3xl:h-[180px] rounded-3xl"
				src="https://git-graph.vercel.app/embed/khesir?showColorLegend=false&showWeekdayLabels=false&showMonthLabels=true&showTotalCount=false&blockMargin=2&blockRadius=5&blockSize=17&fontSize=15&weekStart=6&year=2025"
			></iframe> */}
			<Card className="flex justify-between items-center p-5  rounded-3xl mb-5 dark:bg-slate-800 dark:border-gray-700">
				Interested more about me?
				<Button size={'sm'} onClick={() => navigate('about')}>
					Click here
				</Button>
			</Card>
			<TopProjects />
			<ExperienceSection pageSize={4} displayHeader={true} />
			<div
				id="contact"
				className="sm:border rounded-3xl w-full flex flex-col md:flex-row items-center justify-center overflow-hidden dark:bg-slate-800 dark:border-gray-700 p-5 "
			>
				<div>
					<div className="text-xl font-semibold flex justify-center">
						Contact Me
					</div>
					<div className="flex flex-col md:flex-row justify-between">
						<div className=" flex flex-1 flex-col gap-3 p-5">
							<div className="grid w-full gap-3">
								<Label htmlFor="email">Email</Label>
								<Input
									placeholder="Email"
									id="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									type="email"
									disabled={loading}
									required
								/>
								{emailError && (
									<span className="text-red-500 text-xs">{emailError}</span>
								)}
							</div>
							<div className="grid w-full gap-3">
								<Label htmlFor="message">Message</Label>
								<Textarea
									placeholder="Type your message here."
									id="message"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
									disabled={loading}
									required
								/>
								{messageError && (
									<span className="text-red-500 text-xs">{messageError}</span>
								)}
							</div>
							<Button onClick={onSubmit}>Submit</Button>
						</div>
						<Card className="flex-1 mt-5 flex flex-col justify-center text-center dark:bg-slate-800 dark:border-gray-700">
							<CardContent className="text-[1.1rem]  rounded-3xl font-semibold">
								Have an idea in mind? Let’s make it happen! Just fill out the
								contact form on the left — I’ll get back to you as soon as I can
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
			<div className="text-xs flex justify-center gap-5">
				<a href="https://github.com/khesir">Github</a>
				<a href="https://x.com/khesirr">Twitter</a>
				<a href="https://www.twitch.tv/khesir">Twitch</a>
			</div>
		</div>
	);
}
