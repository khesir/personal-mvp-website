import {Card} from '@/components/ui/card';

export function workExperience() {
	return (
		<div className=" flex fle-col sm:flex-row gap-3">
			<div className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700">
				<p className="font-semibold text-xl mb-2">Work Experience</p>
				<div className="flex flex-col gap-2">
					<Card
						className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700"
						x-chunk="dashboard-05-chunk-4"
					>
						<div className="flex flex-col p-3 gap-1">
							<p className="text-sm font-semibold">
								SAMAHAN Systems Development · Full-time
							</p>
							<p className="text-xs">Fullstack Developer</p>
							<p className="text-xs text-gray-500">
								Jul 2024 - Present · 4 mos
							</p>
							<p className="text-xs text-gray-500">Davao City · Onsite</p>
						</div>
					</Card>
					<Card
						className="w-full overflow-hidden dark:bg-slate-800 dark:border-gray-700"
						x-chunk="dashboard-05-chunk-4"
					>
						<div className="flex flex-col p-3 gap-1">
							<p className="text-sm font-semibold">Freelancing</p>
							<p className="text-xs">Fullstack Developer</p>
							<p className="text-xs text-gray-500">
								Mark 2024 - Present · 8 mos
							</p>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
