import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  isProjectsOpen: boolean;
  setIsProjectsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({
  isProjectsOpen,
  setIsProjectsOpen,
}) => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resume", label: "Resume" },
  ];

  const projectItems = [
    { path: "/blogs", label: "Blogs" },
    { path: "/video", label: "Video" },
    { path: "/media", label: "Media" },
    { path: "/projects", label: "Projects" },
    { path: "/links", label: "Links" },
  ];

  const styles: Record<string, React.CSSProperties> = {
    header: {
      backgroundColor: "white",
      padding: "20px 10px",
      textAlign: "center",
      fontFamily: "sans-serif",
    },
    title: {
      fontSize: "24px",
      marginBottom: "20px",
    },
    nav: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "15px",
    },
    link: {
      color: "black",
      textDecoration: "none",
      fontSize: "16px",
      padding: "5px",
    },
    dropdownContainer: {
      position: "relative",
      display: "inline-block",
    },
    dropdownButton: {
      background: "none",
      border: "none",
      color: "black",
      fontSize: "16px",
      cursor: "pointer",
      padding: "5px",
    },
    dropdownContent: {
      display: isProjectsOpen ? "block" : "none",
      position: "absolute",
      backgroundColor: "white",
      minWidth: "140px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      zIndex: 1,
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      borderRadius: "4px",
    },
    dropdownLink: {
      color: "black",
      textDecoration: "none",
      padding: "8px 12px",
      display: "block",
      textAlign: "center",
    },
  };

  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Website Template</h1>
      <nav style={styles.nav}>
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.link,
              fontWeight: location.pathname === item.path ? "bold" : "normal",
            }}
          >
            {item.label}
          </Link>
        ))}

        <div
          style={styles.dropdownContainer}
          onMouseEnter={() => setIsProjectsOpen(true)}
          onMouseLeave={() => setIsProjectsOpen(false)}
        >
          <button style={styles.dropdownButton}>More ▾</button>
          <div style={styles.dropdownContent}>
            {projectItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  ...styles.dropdownLink,
                  fontWeight:
                    location.pathname === item.path ? "bold" : "normal",
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
