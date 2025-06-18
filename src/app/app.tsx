import {BrowserRouter, Route, Routes as Router} from 'react-router-dom';

import SandBoxPage from './sandbox/SandBoxPage';
import {GuestchatPage} from './module/guestChat/guestchatPage';
import {ReadPage} from './_components/readPage/readingPage';
import {BaseLayout} from '@/app/layouts/pagelayout';
import AboutMe from './module/aboutme/aboutMe';
import {ServicePage} from './module/services/servicePage';
import SkillSetPage from './module/skillset/skillset';
import {BlogPage} from './module/blogs/blogPage';
import Homepage from './module/home/homePage';
import {ProgressPage} from './module/progress/progress';
import {ProjectPage} from './module/projects/projectPage';

export default function App() {
	return (
		<BrowserRouter>
			<Router>
				<Route element={<BaseLayout />}>
					<Route path="/progress-report" element={<ProgressPage />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/guest-book" element={<GuestchatPage />} />
					<Route path="/blogs" element={<BlogPage />} />
					<Route path="/projects" element={<ProjectPage />} />
					<Route path="/" index element={<Homepage />} />
					<Route path="/services" element={<ServicePage />} />
					<Route
						path="/blogs/view/:title"
						element={<ReadPage name="blogs" />}
					/>
					<Route
						path="/projects/view/:title"
						element={<ReadPage name="projects" />}
					/>
					{/* <Route
						path="/progress/view/:title"
						element={<ReadPage name="progress" />}
					/> */}
				</Route>
				<Route path="/sandbox" element={<SandBoxPage />} />
				<Route path="*" />
				<Route path="/about/skillset" element={<SkillSetPage />} />
			</Router>
		</BrowserRouter>
	);
}
