import {usePathname} from '@/hooks/use-pathname-store';
import {useEffect} from 'react';
import {Button} from '@/components/ui/Button';
import {useNavigate} from 'react-router-dom';
import {ExperienceSection} from '../home/experienceSection';

export function ExperiencePage() {
	const {setPathname} = usePathname();
	const navigate = useNavigate();
	useEffect(() => {
		setPathname(location.pathname);
	}, [location.pathname, setPathname]);
	return (
		<>
			<div className="space-y-5 dark:text-white">
				<div className="flex justify-between">
					<p className="font-semibold text-2xl mb-2">Experience</p>
					<Button onClick={() => navigate('/')}>Back</Button>
				</div>
				{/* SOON Add endless scroll */}
				<ExperienceSection pageSize={10} displayHeader={false} />
			</div>
		</>
	);
}
