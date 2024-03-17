import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/NavBar/navbar";
import MainPage from "./pages/MainPage/mainPage";
import CatalogPage from "./pages/CatalogPage/catalogPage";
import ContactPage from "./pages/ContactPage/contactPage";
import PricePage from './pages/PricePage/pricePage';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/price" element={<PricePage />} />
      </Routes>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
