import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import About from "./container/About";
import Services from "./container/Services";
import Lawyer from "./container/Lawyer";
import Contact from "./container/Contact";
import Layout from "./container/Layout";
import NotFound from "./container/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />} >
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Lawyer" element={<Lawyer />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
