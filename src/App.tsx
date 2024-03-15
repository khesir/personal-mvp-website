import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Project from "./pages/Project";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* About Page */}
        <Route index element={<About/>}/>
        
        {/* About Page */}
        <Route path="/about" element={<About/>}/>
        
        {/* Project Page */}
        <Route path="/projects" element={<Project/>} />

        {/* Project Description Page */}
        <Route path="/projects/:id" element={<Project/>} />
      
        <Route path="/experience" element={<Experience/>}/>
      </Routes>
    </BrowserRouter>
  )
}
