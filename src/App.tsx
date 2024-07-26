import { BrowserRouter, Route, Routes as Router} from "react-router-dom";

import {Layout} from '@/layout/layout'
import CardPage from '@/pages/CardPage'

// import About from "./pages/About";
// import Project from "./pages/Project";
// import Experience from "./pages/Experience";

export default function App() {
  return (
    <BrowserRouter>
      <Router> 
        <Route path="/" element={<Layout/>}>
          <Route path='/' index element={<CardPage/>}/>
        </Route>
      </Router>
    </BrowserRouter>
  )
}
