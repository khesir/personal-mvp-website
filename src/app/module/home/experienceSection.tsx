/* eslint-disable @typescript-eslint/no-explicit-any */
import {fetchExperiences} from '@/app/api/experience';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import {motion} from 'framer-motion';
import {RefreshCw} from 'lucide-react';
import {useEffect, useState} from 'react';
import {toast} from 'sonner';

const containerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.01,
		},
	},
};

const cardVariants = {
	initial: {opacity: 0, y: 30},
	animate: {opacity: 1, y: 0, transition: {duration: 0.3}},
};

export function ExperienceSection() {
	const [experiences, setExperiences] = useState([]);
	const [res, setRes] = useState(null);
	const [loading, setLoading] = useState(false);
	const fetchData = async () => {
		setRes(null);
		setLoading(true);
		try {
			const res = await fetchExperiences();
			setExperiences(res);
		} catch (e: any) {
			toast.error(e instanceof Error ? e.message : String(e));
			setRes(e.toString());
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	if (res) {
		return (
			<div className="flex flex-col w-full gap-3 dark:bg-slate-800 dark:border-gray-700">
				<div className="flex justify-between">
					<p className="font-semibold text-2xl mb-2">Experiences</p>
				</div>
				<Card
					className="flex justify-between pt-5 hover:dark:bg-slate-800 hover:bg-slate-300 transition-all"
					onClick={() => fetchData()}
				>
					<CardContent>Something went wrong while fetching data</CardContent>
					<CardFooter>
						<RefreshCw />
					</CardFooter>
				</Card>
			</div>
		);
	}
	if (loading || !experiences) {
		return (
			<>
				<div className="flex justify-between">
					<p className="font-semibold text-2xl mb-2">Experiences</p>
				</div>
				<div className="flex flex-col gap-3 2xl:mx-28">
					<Skeleton className="h-[150px] w-full bg-slate-500 dark:bg-slate-900" />
					<Skeleton className="h-[150px] w-full bg-slate-500 dark:bg-slate-900" />
					<Skeleton className="h-[150px] w-full bg-slate-500 dark:bg-slate-900" />
					<Skeleton className="h-[150px] w-full bg-slate-500 dark:bg-slate-900" />
				</div>
			</>
		);
	}

	if (experiences.length === 0 && !loading) {
		return <div> No Data Available</div>;
	}
	return (
		<div className="flex flex-col w-full gap-3 dark:bg-slate-800 dark:border-gray-700 mb-5">
			<div className="flex justify-between">
				<p className="font-semibold text-2xl mb-2">Experiences</p>
			</div>
			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate"
				className="flex flex-col gap-3 2xl:mx-28"
			>
				{experiences.map((d: any, i) => (
					<motion.div
						key={i}
						variants={cardVariants}
						className="h-[130px] w-full dark:bg-slate-900 border dark:border-none relative flex rounded-3xl items-start justify-start overflow-hidden dark:border-gray-700 cursor-pointer"
					>
						{/* Image */}
						<div className="relative overflow-hidden rounded-3xl h-[100%] w-[130px]">
							<img
								src={
									d.properties.Image.files[0]?.file.url ||
									'/img/placeholder-2.jpg'
								}
								className="w-full h-full my-auto items-center object-contain pointer-events-none"
							/>
						</div>
						{/* Middle text */}
						<div className="h-full flex flex-col justify-between ml-3 p-3">
							<div className="flex flex-col">
								<div
									className={`text-[1.1rem] font-semibold text-black dark:text-white ${location.pathname === '/' ? 'text-sm' : 'text-lg'}`}
								>
									{d.properties.CompanyName.rich_text[0].plain_text}
								</div>
								<div>
									<p className="font-semibold text-xs text-slate-500 dark:text-slate-400">
										{d.properties.JobType.select.name} -{' '}
										{d.properties.Position.title[0]?.plain_text}
									</p>
								</div>
							</div>
							<div className="font-semibold text-sm flex items-center">
								<div className="text-xs mr-2">Highlighted Skill:</div>
								<div className="flex gap-1 flex-wrap">
									{d.highlightSkills.map((data: any, index: any) => (
										<Badge key={index}>
											{data.properties['Name'].title[0].plain_text}
										</Badge>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>
	);
}
