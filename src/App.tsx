import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Partners from './pages/Partners';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<About />} />
          <Route path="/dich-vu" element={<Services />} />
          <Route path="/doi-tac" element={<Partners />} />
          <Route path="/tin-tuc" element={<News />} />
          <Route path="/tin-tuc/:id" element={<NewsDetail />} />
          <Route path="/lien-he" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
