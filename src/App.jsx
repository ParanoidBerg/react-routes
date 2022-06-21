import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
