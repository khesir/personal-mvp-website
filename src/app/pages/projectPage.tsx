import {ProjectList} from '../_components/projectsList';
import {useLocation} from 'react-router-dom';
import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';

export function ProjectPage() {
	const {setPathname} = usePathname();
	const location = useLocation();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<>
			<div className="space-y-5 dark:text-white">
				<p className="font-semibold text-2xl mb-2">Projects</p>
				<ProjectList />
			</div>
		</>
	);
}
