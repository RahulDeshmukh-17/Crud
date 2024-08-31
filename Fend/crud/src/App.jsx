import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Add from "./components/Add"
import Home from "./components/Home"
import Update from "./components/Update"
import Navbar from './layout/Navbar'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
function App() {

  return (
    <Router>
      <Navbar/>

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Add" element={<Add />} />
      <Route exact path="/Update/:id" element={<Update />} />
      
    </Routes>

      {/* <Home/> */}
    </Router>

    
  )
}

export default App
