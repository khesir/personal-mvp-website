/* eslint-disable @typescript-eslint/no-explicit-any */
import {fetchProjects} from '@/app/api/projects';
import {Badge} from '@/components/ui/badge';
import {Skeleton} from '@/components/ui/skeleton';
import {dateParser} from '@/lib/utils';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Masonry from 'react-masonry-css';
import {ArrowUpRight, Github, RefreshCw} from 'lucide-react';
import {motion} from 'framer-motion';
import {Card, CardContent, CardFooter} from '@/components/ui/card';
import {toast} from 'sonner';
const containerVariants = {
	initial: {},
	animate: {
		transition: {
			staggerChildren: 0.3,
		},
	},
};

const cardVariants = {
	initial: {opacity: 0, y: 30},
	animate: {opacity: 1, y: 0, transition: {duration: 0.3}},
};

export function TopProjects() {
	const [projects, setProjects] = useState([]);
	const [res, setRes] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const fetchData = async () => {
		setRes(null);
		setLoading(true);
		try {
			const data = await fetchProjects();
			setProjects(data);
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

	const breakpointColumnsObj = {
		default: 3,
		2000: 2,
		900: 1,
	};
	if (res) {
		return (
			<div className="flex flex-col w-full gap-3 dark:bg-slate-800 dark:border-gray-700">
				<div className="flex justify-between">
					<Link to={'/projects'}>
						<p className="font-semibold text-2xl mb-2">Projects</p>
					</Link>
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
	if (loading || !projects) {
		return (
			<>
				<div className="flex justify-between">
					<Link to={'/projects'}>
						<p className="font-semibold text-2xl mb-2">Projects</p>
					</Link>
					<div className="flex flex-col items-end pt-2">
						<Link
							to={'/projects'}
							className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60"
						>
							See more
						</Link>
					</div>
				</div>
				<div className="flex justify-center">
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column"
					>
						<Skeleton className="h-[300px] shadow-lg  w-[350px] bg-slate-500 dark:bg-slate-900" />
						<Skeleton className="h-[300px] shadow-lg w-[350px] bg-slate-500 dark:bg-slate-900" />
						<Skeleton className="h-[300px] shadow-lg w-[350px] bg-slate-500 dark:bg-slate-900" />
						<Skeleton className="h-[300px] shadow-lg w-[350px] bg-slate-500 dark:bg-slate-900" />
						<Skeleton className="h-[300px] shadow-lg w-[350px] bg-slate-500 dark:bg-slate-900" />
						<Skeleton className="h-[300px] shadow-lg w-[350px] bg-slate-500 dark:bg-slate-900" />
					</Masonry>
				</div>
			</>
		);
	}

	if (projects.length === 0 && !loading) {
		return <div> No Data Available</div>;
	}
	return (
		<div className="flex flex-col w-full gap-3 dark:bg-slate-800 dark:border-gray-700 mb-5">
			<div className="flex justify-between">
				<Link to={'/projects'}>
					<p className="font-semibold text-2xl mb-2">Projects</p>
				</Link>
				<div className="flex flex-col items-end pt-2">
					<Link
						to={'/projects'}
						className="font-semibold text-md hover:underline text-blue-600 dark:text-blue-400/60"
					>
						See more
					</Link>
				</div>
			</div>
			<div className="flex flex-col">
				<motion.div
					variants={containerVariants}
					initial="initial"
					animate="animate"
					className="flex justify-center"
				>
					<Masonry
						breakpointCols={breakpointColumnsObj}
						className="my-masonry-grid"
						columnClassName="my-masonry-grid_column"
					>
						{projects.map((d: any, i) => (
							<motion.div
								key={i}
								variants={cardVariants}
								className="w-full shadow-lg hover:border-slate-500 dark:hover:border-white dark:bg-slate-900 border dark:border-none relative flex flex-col rounded-3xl items-start justify-between overflow-hidden dark:border-gray-700 cursor-pointer"
							>
								<div
									className="w-full overflow-hidden rounded-3xl h-[200px] border-transparent"
									onClick={() =>
										navigate(
											`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`,
										)
									}
								>
									<img
										src={
											d.properties.Image.files[0].file.url ||
											'/img/profile3.jpg'
										}
										className="w-full h-full object-cover pointer-events-none"
									/>
								</div>
								<div className="pt-3 px-5 w-full">
									<div className="w-full flex justify-evenly gap-2">
										<div className="flex-1">
											<Link
												to={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`}
												className={`text-[1.1rem] font-semibold text-black dark:text-white ${location.pathname === '/' ? 'text-sm' : 'text-lg'}`}
											>
												{d.properties.Name.title[0].plain_text}
											</Link>
										</div>
										<div className="flex gap-2">
											{d.properties.URL.url !== null && (
												<a
													href={d.properties.URL.url}
													target="_blank"
													rel="noreferrer"
												>
													<Github />
												</a>
											)}
											{d.properties.Deployment.url !== null && (
												<a
													href={d.properties.Deployment.url}
													target="_blank"
													rel="noreferrer"
												>
													<ArrowUpRight />
												</a>
											)}
										</div>
									</div>
									<div>
										<p className="font-semibold text-xs text-slate-500 dark:text-slate-400">
											Released Date:{' '}
											{d.properties['Released Date']?.date?.start
												? dateParser(d.properties['Released Date'].date.start)
												: 'In progress'}
										</p>
									</div>
								</div>

								<div className="font-semibold text-sm px-5 pb-3 pt-3">
									<div className="flex gap-1 flex-wrap">
										{d.relatedData.map((data: any, index: any) => (
											<Badge key={index}>
												{data.properties['Name'].title[0].plain_text}
											</Badge>
										))}
									</div>
								</div>
							</motion.div>
						))}
					</Masonry>
				</motion.div>
			</div>
		</div>
	);
}
