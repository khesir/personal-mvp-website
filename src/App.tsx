import { BrowserRouter, Route, Routes as Router} from "react-router-dom";


import {Layout} from '@/layout/layout'
import CardPage from '@/pages/CardPage'
import SandBoxPage from "./pages/SandBoxPage";

// import About from "./pages/About";
// import Project from "./pages/Project";
// import Experience from "./pages/Experience";

export default function App() {
  return (
    <BrowserRouter>
      <Router> 
        <Route path="/" element={<Layout/>}>
          <Route path='/' index element={<CardPage/>}/>
          <Route path="/sandbox" element={<SandBoxPage/>}/>
        </Route>
      </Router>
    </BrowserRouter>
  )
}
