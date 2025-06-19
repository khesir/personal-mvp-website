interface ContentLayoutProps {
	children: React.ReactNode;
}
export function Layout({children}: ContentLayoutProps) {
	return (
		<div className="min-h-screen flex flex-col dark:bg-slate-800 ">
			<div className="flex-grow mb-5">
				<div className="h-full flex justify-center pt-10">{children}</div>
			</div>
			<footer className="text-center text-sm text-gray-500 font-medium px-4 py-6">
				<p>
					Made with 💜 by <span className="font-semibold">Khesir (Aj)</span>.
					Powered by{' '}
					<a
						href="https://vercel.com"
						className="underline hover:text-gray-700"
						target="_blank"
						rel="noopener noreferrer"
					>
						Vercel
					</a>
					. Built with <span className="font-semibold">React</span>,{' '}
					<span className="font-semibold">Nest.js</span>,{' '}
					<span className="font-semibold">Discord Webhooks</span>, and{' '}
					<span className="font-semibold">Notion SDK</span>.
				</p>
			</footer>
		</div>
	);
}
