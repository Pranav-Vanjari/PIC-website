import { BrowserRouter as Router, Routes, Route, useLocation, Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import BG from "./pages/bg";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import Event from "./pages/event";
import Team from "./pages/team";
import Contact from "./pages/contact";
import ScrollToTop from "./components/scroll";

// 👇 Redirect only on the very first page load (not when clicking)
function RedirectOnFirstLoad() {
  const navigate = useNavigate();
  const location = useLocation();
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Only redirect once, and only if not already at "/"
    if (!hasRedirected.current && location.pathname !== "/") {
      hasRedirected.current = true;
      navigate("/", { replace: true });
    }
  }, [location, navigate]);

  return null;
}

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <RedirectOnFirstLoad /> {/* 👈 redirect only once at startup */}

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Keep this height div as your landing BG area */}
        <div style={{ height: "100vh" }}></div>

        {/* Routes — only one visible at a time */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          {/* fallback for unknown paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        <Footer />
      </div>

      <BG /> {/* background stays fixed behind all */}
    </Router>
  );
}

export default App;
