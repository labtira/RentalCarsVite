import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Book from './pages/Book';
import ProductsPage from './pages/ProductsPage';
import CarDetails from './pages/CarDetails';
import TermsAndConditions from './pages/TermsAndConditions';
import Contact from './pages/Contact';
import About from './pages/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import English from './assets/img/Flag_Uk.png';
import German from './assets/img/Flag_of_Germany.png';
import French from './assets/img/Flag_of_France.png';

function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Helmet>
        <title>Valued Academy Online Language School - Learn English, French, and German</title>
        <meta name="description" content="Join our online language school to learn English, French, and German with expert teachers." />
      </Helmet>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/book/english" element={ <Book language="english" image={English}/> } />
        <Route path="/book/german" element={ <Book language="german" image={German} /> } />
        <Route path="/book/french" element={ <Book language="french" image={French} /> } />
        <Route path="/products" element={ <ProductsPage /> } />
        <Route path="/products/:id" element={ <CarDetails /> } />
        <Route path="/terms" element={ <TermsAndConditions /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="/about" element={ <About /> } />
      </Routes>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
