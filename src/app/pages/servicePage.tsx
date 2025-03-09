import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export function ServicePage() {
	const {setPathname} = usePathname();
	const location = useLocation();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<Card
			className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700"
			x-chunk="dashboard-05-chunk-4"
		>
			<CardHeader className="group flex items-center gap-1 text-xl cursor-pointer">
				<CardTitle>Services</CardTitle>
				<CardDescription>Still working on it</CardDescription>
			</CardHeader>

			{/* <CardContent className="flex flex-wrap justify-center gap-5">
				{Services.map((data, index) => (
					<div key={index} className="flex flex-col items-center gap-3">
						<Card className="p-2">
							<Button variant={'ghost'} size={'icon'} className="">
								<data.emoji className="w-10 h-10" />
							</Button>
						</Card>
						<span className="text-xs font-semibold">{data.name}</span>
					</div>
				))}
			</CardContent> */}
		</Card>
	);
}
