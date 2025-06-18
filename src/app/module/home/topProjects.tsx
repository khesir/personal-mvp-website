/* eslint-disable @typescript-eslint/no-explicit-any */
import {fetchProjects} from '@/app/api/projects';
import {Badge} from '@/components/ui/badge';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import {dateParser} from '@/lib/utils';
import {useState, useEffect} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Masonry from 'react-masonry-css';

export function TopProjects() {
	const [projects, setProjects] = useState([]);
	const [res, setRes] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const data = await fetchProjects();
				console.log(data);
				setProjects(data);
			} catch (e: any) {
				setRes(e.toString());
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);
	if (loading) {
		return (
			<>
				{Array.from({length: 3}, (_, index) => (
					<Skeleton
						key={index}
						className="h-[350px]  flex-1  dark:bg-slate-700"
					/>
				))}
			</>
		);
	}
	if (res) {
		return <div> {res} </div>;
	}
	if (projects.length === 0) {
		return <div> No Data Available</div>;
	}
	const breakpointColumnsObj = {
		default: 3,
		1100: 2,
		700: 2,
		500: 1,
	};
	return (
		<Masonry
			breakpointCols={breakpointColumnsObj}
			className="my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{projects.map((d: any, i) => (
				<div
					key={i}
					onClick={() =>
						navigate(
							`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}` +
								`?id=${d.id}`,
						)
					}
				>
					<Card className="relative flex flex-col items-start justify-between w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700 cursor-pointer">
						<CardHeader className="h-[200px] w-full">
							<div className="w-full overflow-hidden rounded-3xl border">
								<img
									src={
										d.properties.Image.files[0].file.url || '/img/profile3.jpg'
									}
									className="w-full h-full object-cover pointer-events-none"
								/>
							</div>
						</CardHeader>
						<CardContent>
							<CardTitle className="w-full font-semibold text-xl  hover:underline">
								<Link
									to={`/projects/view/${d.properties.Name.title[0].plain_text.replace(/\s+/g, '-')}?id=${d.id}`}
									className={`text-blue-600 dark:text-blue-400 ${location.pathname === '/' ? 'text-sm' : 'text-lg'}`}
								>
									{d.properties.Name.title[0].plain_text}
								</Link>
							</CardTitle>
							<CardDescription className="font-semibold text-sm">
								<div className="flex gap-1 flex-wrap">
									{d.properties['Languages']?.multi_select.map(
										(data: any, index: any) => (
											<Badge key={index} variant={'outline'}>
												{data.name}
											</Badge>
										),
									)}
								</div>
							</CardDescription>
						</CardContent>
						<CardFooter>
							{' '}
							<p className="font-semibold text-sm text-slate-500 dark:text-slate-400">
								{d.properties['Released Date']?.date?.start
									? dateParser(d.properties['Released Date'].date.start)
									: 'In progress'}
							</p>
						</CardFooter>
						{/* <div className="absolute bottom-1 right-1 flex">
              <Button size={'icon'} variant={'outline'}><Github /></Button>
              <Button size={'icon'} variant={'outline'}><Rocket /></Button>
            </div> */}
					</Card>
				</div>
			))}
		</Masonry>
	);
}
