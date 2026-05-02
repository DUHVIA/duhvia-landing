import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>} />
            <Route path="/sobre-nosotros" element={<About/>} />
            <Route path="/servicios" element={<Services/>} />
            <Route path="/portafolio" element={<Portfolio/>} />
            <Route path="/portafolio/:slug" element={<ProjectDetail/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/blog/:slug" element={<BlogDetail/>} />
            <Route path="/contacto" element={<Contact/>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
