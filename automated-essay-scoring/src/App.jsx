import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import EssayScoring from "./Pages/EssayScoring";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/essayscoring" element={<EssayScoring />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
