import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BG from "./pages/bg";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Event from "./pages/Event";
import Team from "./pages/team";
import Contact from "./pages/contact";
import ScrollToTop from "./components/scroll";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Keep this height div as your landing BG area */}
        <div style={{ height: "100vh" }}></div>

        {/* Routes — only one page visible at a time */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>

      <BG /> {/* background stays fixed behind all */}
    </Router>
  );
}

export default App;
