
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import ProjectsPage from './ProjectsPage';

function App() {



  return (
    <>


      <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<ProjectsPage />} />

        </Routes>
      </Router>

    </>
  );
}

export default App;
