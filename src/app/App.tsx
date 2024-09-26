import { BrowserRouter, Route, Routes as Router} from "react-router-dom";


import Homepage from '@/app/home/Homepage'
import SandBoxPage from "./sandbox/SandBoxPage";

export default function App() {
  return (
    <BrowserRouter>
      <Router> 
          <Route path='/' index element={<Homepage/>}/>
          <Route path="/sandbox" element={<SandBoxPage/>}/>
      </Router>
    </BrowserRouter>
  )
}
