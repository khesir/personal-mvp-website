import {Experties} from '@/components/constant/data';
import {Button} from '@/components/ui/Button';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';

export function ExpertiseCard() {
	return (
		<Card
			className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700 h-[370px]"
			x-chunk="dashboard-05-chunk-4"
		>
			<CardHeader className="">
				<CardTitle className="group flex items-center gap-1 text-xl cursor-pointer">
					Expertise
				</CardTitle>
			</CardHeader>

			<CardContent className="flex flex-wrap justify-center gap-5">
				{Experties.map((data, index) => (
					<div key={index} className="flex flex-col items-center">
						<Card className="p-2">
							<Button variant={'ghost'} size={'icon'} className="">
								<data.emoji className="w-10 h-10" />
							</Button>
						</Card>
						<span className="text-xs font-semibold">{data.name}</span>
					</div>
				))}
			</CardContent>
		</Card>
	);
}
