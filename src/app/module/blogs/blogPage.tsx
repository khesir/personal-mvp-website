import {usePathname} from '@/hooks/use-pathname-store';
import {useLocation} from 'react-router-dom';
import {useEffect} from 'react';
import {BlogList} from '@/app/_components/blogList';

export function BlogPage() {
	const {setPathname} = usePathname();
	const location = useLocation();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<div className="space-y-5 dark:text-white">
			<p className="font-semibold text-2xl mb-2">Blogs</p>
			<div className="flex flex-col gap-5">
				<BlogList />
			</div>
		</div>
	);
}
