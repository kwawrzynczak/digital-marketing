import MainLayout from './layouts/MainLayout';
import Attractions from './pages/Attractions';
import Contact from './pages/Contact';
import Events from './pages/Events';
import FAQ from './pages/FAQ';
import Gallery from './pages/Gallery';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Prices from './pages/Prices';
import Feedback from './pages/Feedback';
import Tickets from './pages/Tickets';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
