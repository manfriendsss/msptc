import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Partners from './pages/Partners';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import Contact from './pages/Contact';

const routes = [
  { path: '/', element: <Home /> },
  { path: '/gioi-thieu', element: <About /> },
  { path: '/dich-vu', element: <Services /> },
  { path: '/doi-tac', element: <Partners /> },
  { path: '/tin-tuc', element: <News /> },
  { path: '/tin-tuc/:id', element: <NewsDetail /> },
  { path: '/lien-he', element: <Contact /> },
];

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </Layout>
    </Router>
  );
}
