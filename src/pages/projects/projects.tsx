import React from "react";
import { Layout, styles } from "../../layout";
import CustomLink from "../components/hoverlink";

const Projects: React.FC = () => {
  const projectLinks = [
    {
      section: "Projects",
      links: [
        {
          title: "Linktree Clone",
          path: "/links",
          description: "Linktree Clone to Demo Site.",
        },
        {
          title: "Workout Tracker",
          path: "/landing",
          description:
            "My first firebase project that I built to track my workouts. You can log all your lifts with your google account to see progress over time.",
        },

        {
          title: "IRA Stocks",
          path: "/stocks/ira",
          description:
            "Part of my Independent Study in my final semester of Pitt. I ranked public equities and explored retirement and compounding.",
        },
      ],
    },
  ];

  return (
    <Layout title="Projects">
      <p style={styles.paragraph}>
        Here are two super simple basic projects I included as Demo. You can put
        anything here that you want. If you aren't working to build software,
        any type of project will work.
      </p>

      <h2 style={styles.subHeader}>Project Links</h2>
      <div style={{ display: "flex", gap: "80px", flexWrap: "wrap" }}>
        {projectLinks.map((section, index) => (
          <div key={index} style={{ minWidth: "200px" }}>
            <h3 style={styles.sectionTitle}>{section.section}</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} style={{ marginBottom: "20px" }}>
                  <CustomLink href={link.path}>{link.title}</CustomLink>

                  <p>{link.description}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Projects;
