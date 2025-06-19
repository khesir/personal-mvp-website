import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';
import {ProjectList} from '@/app/_components/projectsList';
import {Button} from '@/components/ui/Button';
import {useNavigate} from 'react-router-dom';

export function ProjectPage() {
	const {setPathname} = usePathname();
	const navigate = useNavigate();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<>
			<div className="space-y-5 dark:text-white">
				<div className="flex justify-between">
					<p className="font-semibold text-2xl mb-2">Projects</p>
					<Button onClick={() => navigate('/')}>Back</Button>
				</div>
				<ProjectList />
			</div>
		</>
	);
}
