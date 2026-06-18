import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import FindDonors from './pages/FindDonors';
import RequestBlood from './pages/RequestBlood';
import Camps from './pages/Camps';
import Donate from './pages/Donate';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Hospitals from './pages/Hospitals';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="find-donors" element={<FindDonors />} />
          <Route path="request-blood" element={<RequestBlood />} />
          <Route path="camps" element={<Camps />} />
          <Route path="donate" element={<Donate />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="hospitals" element={<Hospitals />} />
          {/* Catch-all redirect to Home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
