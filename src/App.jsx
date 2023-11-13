import MainTemplate from './templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Attractions from './pages/Attractions';
import Gallery from './pages/Gallery';
import Tickets from './pages/Tickets';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
