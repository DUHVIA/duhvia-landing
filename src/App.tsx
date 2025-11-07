import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sobre-nosotros" element={<About/>} />
          <Route path="/servicios" element={<Services/>} />
          <Route path="/portafolio" element={<Portfolio/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/contacto" element={<Contact/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
