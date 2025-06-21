import {Background} from './background';
import '../css/style.css';
import {usePathname} from '@/hooks/use-pathname-store';
import {ModeToggle} from './providers/mode-toggle';
import {AboutMeCard} from './card/about-me-card';
import {motion} from 'framer-motion';

export function Banner() {
	const {pathname} = usePathname();

	return (
		<div className="relative w-full h-full">
			{pathname === '/' && (
				<>
					<AboutMeCard />
					<motion.div
						className="absolute shadow-lg bottom-3 left-3 bg-blue-400 flex justify-center items-center w-[65px] h-[65px] rounded-full z-20 cursor-pointer"
						initial={{rotate: 0}}
						animate={{rotate: -360}}
						transition={{duration: 1, ease: 'easeInOut'}}
					>
						<ModeToggle />
					</motion.div>
					<div className="absolute -bottom-10 -left-10 bg-current w-[150px] h-[150px] rounded-full z-10 bottom-button dark:text-slate-800 text-white" />
				</>
			)}
			{pathname !== '/' && (
				<div className="absolute -top-5 -right-5 bg-blue-400 flex justify-center items-center w-[65px] h-[65px] rounded-full z-20 cursor-pointer">
					<ModeToggle />
				</div>
			)}

			{/* About me */}
			{/* Project Card */}
			{/* Guest Card */}
			{/* Blog */}
			{/* Read Card */}
			<Background size={pathname === '/' ? 'h-[300px]' : 'h-[100px]'} />
		</div>
	);
}
