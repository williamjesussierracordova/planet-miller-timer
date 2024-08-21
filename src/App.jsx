import { Route, Routes } from "react-router-dom";
import Inicio from "./Home"
import About from "../src/components/about"

function App(){
  return (
      <>
          <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/about" element={<About />} />
          </Routes>
      </>
  )
}

export default App;