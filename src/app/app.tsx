import { BrowserRouter, Route, Routes as Router} from "react-router-dom";

import SandBoxPage from "./sandbox/SandBoxPage";
import { GuestchatPage } from "./pages/guestchatPage";
import { BlogPage } from "./pages/blogPage";
import { ProjectPage } from "./pages/projectPage";
import Homepage from "./pages/homePage";
import { ReadPage } from "./pages/readingPage";
import { BaseLayout } from "@/components/layout/pagelayout";

export default function App() {
  return (
    <BrowserRouter>
      <Router> 
          <Route element={<BaseLayout/>}>
            <Route path="/progress-report" element={<GuestchatPage />}/>
            <Route path="/guest-book" element={<GuestchatPage />}/>
            <Route path='/blogs' element={<BlogPage />}/>
            <Route path='/projects' element={<ProjectPage />}/>
            <Route path='/' index element={<Homepage />}/>
            <Route path='/blogs/view/:id' element={<ReadPage name="blogs" />}/> 
            <Route path='/projects/view/:id' element={<ReadPage name="projects" />}/> 
          </Route>
          <Route path="/sandbox" element={<SandBoxPage />}/>
      </Router>
    </BrowserRouter>
  )
}
