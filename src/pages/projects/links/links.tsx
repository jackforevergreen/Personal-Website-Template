import React from "react";
import insta from "./assets/insta.png";
import linkedin from "./assets/linkedin.png";
import website from "./assets/website.png";
import twitter from "./assets/x.png";
import youtube from "./assets/yt.png";

const links = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@yourchannel",
    icon: youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/yourhandle",
    icon: insta,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/yourhandle",
    icon: twitter,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yourhandle",
    icon: linkedin,
  },
  {
    label: "Website",
    href: "https://www.yourwebsite.com",
    icon: website,
  },
];

const Links: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>Connect With Me</h2>
    <p style={{ fontSize: "16px", marginBottom: "30px", lineHeight: "1.6" }}>
      These are my main social and content links — feel free to reach out or
      follow along.
    </p>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
      }}
    >
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            padding: "12px 20px",
            backgroundColor: "#f7f7f7",
            border: "1px solid #ccc",
            borderRadius: "8px",
            textDecoration: "none",
            color: "#000",
            fontSize: "16px",
            width: "100%",
            maxWidth: "300px",
            transition: "background 0.2s ease-in-out",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#eaeaea")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#f7f7f7")
          }
        >
          <img
            src={link.icon}
            alt={`${link.label} icon`}
            style={{ width: "20px", height: "20px", objectFit: "contain" }}
          />
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

export default Links;
