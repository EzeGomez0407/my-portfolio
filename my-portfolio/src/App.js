import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Nav from "./components/NavBar/NavBar";
// import ContactMe from "./pages/ContactMe/ContactMe";

function App() {
  // const cld = new Cloudinary({cloud: {cloudName: "dhn7thh3k"}})

  return (
    <div className="App">
          {/* <AdvancedImage cldImg={img}/> */}

      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          {/* <Route path="/contact-me" element={<ContactMe />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
