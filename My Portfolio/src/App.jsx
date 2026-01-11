import './App.css'
import { Route, Routes } from "react-router";
import Home from "./components/Home/Home";
import Nav from "./components/NavBar/NavBar";

function App() {

  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          {/* <Route path="/contact-me" element={<ContactMe />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

export default App
