import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./header"; // 👈 Add this
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Media from "./pages/Media";
import Resume from "./pages/Resume";
import Video from "./pages/Video";
import Blogs from "./pages/blog/Blog";
import LandingPage from "./pages/projects/fitness/landing/landing";
import Linktree from "./pages/projects/links/links";
import Projects from "./pages/projects/projects";
import Ira from "./pages/projects/stocks/ira";

const App: React.FC = () => (
  <Router>
    <AppWithNav />
  </Router>
);

const AppWithNav: React.FC = () => {
  const [isProjectsOpen, setIsProjectsOpen] = React.useState(false);

  const styles: Record<string, React.CSSProperties> = {
    mainContainer: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      fontFamily: "'Inter', sans-serif",
    },
    main: {
      flex: 1,
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      backgroundColor: "white",
    },
  };

  return (
    <div style={styles.mainContainer}>
      <Header
        isProjectsOpen={isProjectsOpen}
        setIsProjectsOpen={setIsProjectsOpen}
      />
      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/video" element={<Video />} />
          <Route path="/blog/*" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stocks/ira" element={<Ira />} />
          <Route path="/media" element={<Media />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/links" element={<Linktree />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
