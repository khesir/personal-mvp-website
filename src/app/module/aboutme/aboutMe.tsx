import {Card, CardContent} from '@/components/ui/card';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect, useRef, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/Button';
import {Icon} from '@iconify/react';
import {motion} from 'framer-motion';

// Iconify icon names for the respective languages
const csharpIcon = 'devicon:csharp';
const typescriptIcon = 'devicon:typescript';
const pythonIcon = 'devicon:python';
const cplusplusIcon = 'devicon:cplusplus';
const luaIcon = 'devicon:lua';
import {create} from 'zustand';
type EventState = {
	isFinished: boolean;
	setFinished: (finished: boolean) => void;
	reset: () => void;
};

export const useEventFinishedStore = create<EventState>((set) => ({
	isFinished: false,
	setFinished: (finished) => set({isFinished: finished}),
	reset: () => set({isFinished: false}),
}));
export default function AboutMe() {
	const {setPathname} = usePathname();
	const navigate = useNavigate();
	const location = useLocation();
	const skipRef = useRef(false);

	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	const paragraphs = [
		'Yo! Nice to meet you — I’m Aj (also known as Khesir), a Software Engineer with a focus on backend and game development.',
		'While I specialize in backend, I’m more of a full-stack developer — I enjoy handling the whole lifecycle of an app: frontend, backend, deployment, and even DevOps. But when it comes down to what I really dive deep into, it’s backend architecture and logic.',
		'Whatever kind of project it is — even no-code — I enjoy working on it as long as it teaches or reinforces real programming principles. Things like data-structures, state management, understanding data types, working with classes, and building logic with conditions are what matter most to me. I’m into solving real-life problems through code, especially when it comes to scalability and structure. I naturally find myself asking, “Is this scalable?” or “Is this implementation logically sound?” — not just during testing, but right from the design and development phase. I like thinking a few steps ahead and building things that make sense long-term.',
		'I’m also a game developer — I work with Lua scripting like love2d, other modding stuffs and engines like Unity. For me, game dev is like the ultimate challenge; it blends logic, creativity, and systems all at once. Honestly, I see it as a life skill I want to pursue deeply.',
		'Outside of code and games, I’ve got a bunch of other interests too. The skills I’ve built branch out into things like art and cooking — and if life opens that door, I’d love to dive into those worlds as well.',
	];
	const [activeIndex, setActiveIndex] = useState(0);
	useEffect(() => {
		const handleSpace = (e: KeyboardEvent) => {
			if (e.code === 'Space') {
				useEventFinishedStore.getState().setFinished(true);
				setActiveIndex(paragraphs.length - 1);
			}
		};
		window.addEventListener('keydown', handleSpace);
		return () => window.removeEventListener('keydown', handleSpace);
	}, [paragraphs.length]);
	return (
		<>
			<div className="flex w-full flex-col gap-5 dark:text-white ">
				<motion.div
					className="shadow-lg sm:border rounded-3xl w-full flex flex-col md:flex-row items-center justify-center overflow-hidden dark:bg-slate-800 dark:border-gray-700"
					initial={{y: -100, opacity: 0}}
					whileInView={{y: 0, opacity: 1}}
					viewport={{once: true, amount: 0.3}}
					transition={{type: 'spring', stiffness: 60, damping: 15}}
				>
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
							<Icon icon={typescriptIcon} className="w-8 h-8" />
							<Icon icon={pythonIcon} className="w-8 h-8" />
							<Icon icon={csharpIcon} className="w-8 h-8" />
							<Icon icon={cplusplusIcon} className="w-8 h-8" />
							<Icon icon={luaIcon} className="w-8 h-8" />
						</div>
					</CardContent>
				</motion.div>
				<motion.div
					className="shadow-lg border flex justify-between items-center p-5 rounded-3xl mb-5 dark:bg-slate-800 dark:border-gray-700"
					initial={{y: 100, opacity: 0}}
					whileInView={{y: 0, opacity: 1}}
					viewport={{once: true, amount: 0.3}}
					transition={{type: 'spring', stiffness: 60, damping: 15}}
				>
					<span className="font-semibold">Going back now?</span>
					<Button size="sm" onClick={() => navigate('/')}>
						Click here
					</Button>
				</motion.div>
				<motion.div
					initial={{opacity: 0, y: 40}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, ease: 'easeOut'}}
				>
					<Card className="dark:bg-slate-800 dark:border-gray-700 p-5">
						{paragraphs.map((text, i) =>
							i <= activeIndex ? (
								<TypingText
									key={i}
									text={text}
									className="mb-3"
									forceDone={skipRef.current}
									onDone={() => {
										if (i === activeIndex) setActiveIndex((prev) => prev + 1);
										if (i === paragraphs.length - 1) {
											// Trigger zustand event when last paragraph finishes
											useEventFinishedStore.getState().setFinished(true);
										}
									}}
								/>
							) : null,
						)}
					</Card>
				</motion.div>
				{!useEventFinishedStore.getState().isFinished && (
					<motion.div
						className="text-center mt-4"
						initial={{y: 0}}
						animate={{y: [0, -10, 0]}}
						transition={{duration: 1.8, repeat: Infinity, ease: 'easeInOut'}}
					>
						Press <span className="font-bold">Space</span> to skip
					</motion.div>
				)}
			</div>
		</>
	);
}
type TypingTextProps = {
	text: string;
	speed?: number; // ms per character
	className?: string;
	onDone?: () => void;
	forceDone?: boolean; // NEW: Skip animation if true
};
export function TypingText({
	text,
	speed = 5,
	className = '',
	onDone,
	forceDone = false,
}: TypingTextProps) {
	const [displayedText, setDisplayedText] = useState(forceDone ? text : '');
	const frameRef = useRef<number>();
	const indexRef = useRef(0);
	const lastTimeRef = useRef(0);
	const isActive = useRef(true);

	useEffect(() => {
		if (forceDone) {
			setDisplayedText(text); // instantly show full text
			return;
		}

		isActive.current = true;

		const type = (time: number) => {
			if (!isActive.current) return;
			if (time - lastTimeRef.current >= speed) {
				setDisplayedText(text.slice(0, indexRef.current + 1));
				indexRef.current += 1;
				lastTimeRef.current = time;
			}

			if (indexRef.current < text.length) {
				frameRef.current = requestAnimationFrame(type);
			} else if (onDone && isActive.current) {
				onDone();
			}
		};

		frameRef.current = requestAnimationFrame(type);

		return () => {
			isActive.current = false;
			cancelAnimationFrame(frameRef.current!);
		};
	}, [text, speed, onDone, forceDone]);

	return <div className={className}>{displayedText}</div>;
}
