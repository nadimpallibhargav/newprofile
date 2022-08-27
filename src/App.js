import { Route, Routes } from "react-router-dom";
import Work from "./pages/Work";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/portfolio" element={<About />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
