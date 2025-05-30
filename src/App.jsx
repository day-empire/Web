import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Certification from "./components/Certification";
import ContactForm from './components/ContactForm';
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFoud";
import Canonical from "./Canonical";
import "./App.css";

function App() {
  const location = useLocation();
  const canonicalMap = {
    "/": "https://dayempire.com",
    "/about-us": "https://dayempire.com/about-us",
    "/contact-us": "https://dayempire.com/contact-us",
    "/privacy": "https://dayempire.com/privacy",
    "/terms": "https://dayempire.com/terms",
};

  return (
  <>
      <ScrollToTop />
      <Canonical url={canonicalMap[location.pathname] || "https://dayempire.com"} />
      <Header />
      <main className="mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/terms" element={<Terms />} />
          <Route path='/privacy' element={<Privacy />}/>
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </main>
      <ContactForm />
      <Certification />
      <Footer />
  </>
  );
}

export default App;





