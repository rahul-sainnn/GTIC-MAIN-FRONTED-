import { Route, Routes } from 'react-router-dom';
import Header from './components/utilities/Header/Header';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Footer from './components/utilities/Footer/Footer';
import Schedule from './components/pages/Schedule/Schedule';
import Sponsors from './components/pages/Sponsors/Sponsors';
import Speakers from './components/pages/Speakers/Speakers'
import BookSeat from './components/pages/BookSeat/BookSeat';

const AppRoutes = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/agenda" element={<Schedule />} />
        <Route path="/speaker" element={<Speakers />} />
        {/* <Route path="/contact" element={<ContactUs />} /> */}
        <Route path="/sponsor" element={<Sponsors />} />
        <Route path="/book-seat" element={<BookSeat />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

const NotFound = () => {
  return <h1>Page Not Found</h1>;
};

export default AppRoutes;
