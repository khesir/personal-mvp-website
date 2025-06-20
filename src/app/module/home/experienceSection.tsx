/* eslint-disable @typescript-eslint/no-explicit-any */
import {fetchExperiences} from '@/app/api/experience';
import {Badge} from '@/components/ui/badge';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {Dialog, DialogContent, DialogTitle} from '@/components/ui/dialog';
import {Popover, PopoverTrigger} from '@/components/ui/popover';
import {Skeleton} from '@/components/ui/skeleton';
import {dateParser} from '@/lib/utils';
import {motion} from 'framer-motion';
import {ArrowUpRight, RefreshCw} from 'lucide-react';
import {useEffect, useState} from 'react';
import {toast} from 'sonner';

import {MarkDownComponent} from '@/app/_components/readPage/readingPage';
import {Link} from 'react-router-dom';
import {ScrollArea} from '@/components/ui/scroll-area';
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

export function ExperienceSection({
	pageSize = 4,
	displayHeader = true,
}: {
	pageSize: number;
	displayHeader: boolean;
}) {
	const [experiences, setExperiences] = useState<any>([]);
	const [res, setRes] = useState(null);
	const [loading, setLoading] = useState(false);

	// Dialog Control
	const [open, setOpen] = useState(false);
	const [selectedExperience, setSelectedExperience] = useState<number | null>();
	const openDialog = (rowId: number) => {
		setOpen(true);
		setSelectedExperience(rowId);
	};

	const fetchData = async () => {
		setRes(null);
		setLoading(true);
		try {
			const res = await fetchExperiences(pageSize);
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
				{displayHeader && (
					<div className="flex justify-between">
						<p className="font-semibold text-2xl mb-2">Recent Experiences</p>
					</div>
				)}
				<Card
					className="flex justify-between rounded-3xl pt-5 hover:dark:bg-slate-800 hover:bg-slate-300 transition-all"
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
				{displayHeader && (
					<div className="flex justify-between">
						<p className="font-semibold text-2xl mb-2">Recent Experiences</p>
						<div className="flex flex-col items-end pt-2">
							<Link
								to={'/projects'}
								className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60"
							>
								See more
							</Link>
						</div>
					</div>
				)}
				<div className="flex flex-col gap-3 3xl:mx-28">
					<Skeleton className="h-[150px] w-full rounded-3xl bg-slate-500 dark:bg-slate-900" />
					<Skeleton className="h-[150px] w-full rounded-3xl bg-slate-500 dark:bg-slate-900" />
					<Skeleton className="h-[150px] w-full rounded-3xl bg-slate-500 dark:bg-slate-900" />
					<Skeleton className="h-[150px] w-full rounded-3xl bg-slate-500 dark:bg-slate-900" />
				</div>
			</>
		);
	}

	if (experiences.length === 0 && !loading) {
		return <div> No Data Available</div>;
	}
	return (
		<div className="flex flex-col w-full gap-3 dark:bg-slate-800 dark:border-gray-700 mb-5">
			{displayHeader && (
				<div className="flex justify-between">
					<p className="font-semibold text-2xl mb-2">Recent Experiences</p>
					<div className="flex flex-col items-end pt-2">
						<Link
							to={'/experiences'}
							className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60"
						>
							See more
						</Link>
					</div>
				</div>
			)}
			<motion.div
				variants={containerVariants}
				initial="initial"
				animate="animate"
				className="flex flex-col gap-3 2xl:mx-28"
			>
				{experiences.map((d: any, i: number) => (
					<motion.div
						key={i}
						variants={cardVariants}
						onClick={() => openDialog(i)}
						className="group h-[130px] w-full duration-200 hover:border-slate-500 dark:bg-slate-900 border dark:border-none relative flex rounded-3xl items-start justify-start overflow-hidden dark:border-gray-700 cursor-pointer"
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
								<div className="flex gap-3">
									<div
										className={`text-[1.1rem] font-semibold text-black dark:text-white ${location.pathname === '/' ? 'text-sm' : 'text-lg'}`}
									>
										{d.properties.Position.title[0]?.plain_text}
									</div>
									<Popover>
										<PopoverTrigger>
											<ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
										</PopoverTrigger>
									</Popover>
								</div>
								<div>
									<p className="font-semibold text-xs text-slate-500 dark:text-slate-400">
										{d.properties.CompanyName.rich_text[0].plain_text} -{' '}
										{d.properties.JobType.select.name}
									</p>
								</div>
								<div>
									<p className="font-semibold text-xs text-slate-500 dark:text-slate-400">
										{dateParser(d.properties['Duration'].date.start)} -{' '}
										{d.properties['Duration']?.date?.end
											? dateParser(d.properties['Duration'].date.end)
											: 'Present'}
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
			<Dialog open={open} onOpenChange={setOpen}>
				<DialogContent className="dark:text-white sm:max-w-[90%] xl:max-w-[50%] dark:bg-slate-800">
					<DialogTitle>
						{selectedExperience !== null &&
							selectedExperience !== undefined &&
							experiences[selectedExperience]?.properties?.Position?.title?.[0]
								?.plain_text}{' '}
						(
						{dateParser(
							selectedExperience !== null &&
								selectedExperience !== undefined &&
								experiences[selectedExperience]?.properties['Duration'].date
									.start,
						)}{' '}
						-{' '}
						{selectedExperience !== null &&
						selectedExperience !== undefined &&
						experiences[selectedExperience]?.properties['Duration']?.date?.end
							? dateParser(
									selectedExperience !== null &&
										selectedExperience !== undefined &&
										experiences[selectedExperience]?.properties['Duration'].date
											.end,
								)
							: 'Present'}
						)
					</DialogTitle>
					<div className="font-semibold text-sm flex items-center">
						<div className="text-xs mr-2">Highlighted Skill:</div>
						<div className="flex gap-1 flex-wrap">
							{selectedExperience !== null &&
								selectedExperience !== undefined &&
								experiences[selectedExperience]?.highlightSkills?.map(
									(data: any, index: any) => (
										<Badge key={index}>
											{data.properties['Name'].title[0].plain_text}
										</Badge>
									),
								)}
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div>
							Company Name:{' '}
							{selectedExperience !== null &&
								selectedExperience !== undefined &&
								experiences[selectedExperience]?.properties.CompanyName
									.rich_text[0].plain_text}
						</div>
						<div>
							Postion:{' '}
							{selectedExperience !== null &&
								selectedExperience !== undefined &&
								experiences[selectedExperience]?.properties.Position?.title?.[0]
									?.plain_text}
						</div>
						<div>
							Work Environment:{' '}
							{selectedExperience !== null &&
								selectedExperience !== undefined &&
								experiences[selectedExperience]?.properties.JobType.select.name}
						</div>
						<div>
							Employment Type:{' '}
							{selectedExperience !== null &&
								selectedExperience !== undefined &&
								experiences[selectedExperience]?.properties.EmploymentType
									?.select.name}
						</div>
					</div>
					<div className="border"></div>
					<ScrollArea className="max-h-[500px] dark:bg-slate-700 rounded-md px-3">
						<MarkDownComponent
							markdown={
								(selectedExperience !== null &&
									selectedExperience !== undefined &&
									experiences[selectedExperience]?.properties.pageMd) ||
								'Not set yet'
							}
						/>
					</ScrollArea>
				</DialogContent>
			</Dialog>
		</div>
	);
}
