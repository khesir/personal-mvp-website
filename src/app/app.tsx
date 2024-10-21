import { BrowserRouter, Route, Routes as Router} from "react-router-dom";

import SandBoxPage from "./sandbox/SandBoxPage";
import { GuestchatPage } from "./pages/guestchatPage";
import { BlogPage } from "./pages/blogPage";
import { ProjectPage } from "./pages/projectPage";
import Homepage from "./pages/homePage";
import { ReadPage } from "./pages/readingPage";
import { BaseLayout } from "@/components/layout/pagelayout";
import { ProgressPage } from "./pages/progress";

export default function App() {
  return (
    <BrowserRouter>
      <Router> 
          <Route element={<BaseLayout/>}>
            <Route path="/progress-report" element={<ProgressPage />}/>
            <Route path="/guest-book" element={<GuestchatPage />}/>
            <Route path='/blogs' element={<BlogPage />}/>
            <Route path='/projects' element={<ProjectPage />}/>
            <Route path='/' index element={<Homepage />}/>
            <Route path='/blogs/view/:title' element={<ReadPage name="blogs" />}/> 
            <Route path='/projects/view/:title' element={<ReadPage name="projects" />}/> 
            <Route path='/progress/view/:title' element={<ReadPage name="progress" />}/> 
          </Route>
          <Route path="/sandbox" element={<SandBoxPage />}/>
      </Router>
    </BrowserRouter>
  )
}
