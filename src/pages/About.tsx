import React from "react";
import { Layout, styles } from "../layout";
import CustomLink from "./components/hoverlink";

const About: React.FC = () => (
  <Layout title="About This Website">
    <p style={styles.paragraph}>
      Hey! My name is Jack Pearson. When I first started learning to code, I
      constantly ran into frustrating issues trying to get templates up and
      running. Whether it was dependency errors, confusing file structures, or
      just too much going on — I often found myself stuck before I could even
      build something meaningful.
    </p>

    <p style={styles.paragraph}>
      So, I built this personal website template with one goal:{" "}
      <strong>make it easy for anyone to start building their own site</strong>.
      It's written in <strong>React + TypeScript</strong>, uses{" "}
      <strong>basic CSS</strong> (no heavy frameworks), and is designed to be
      modular, clear, and simple to deploy.
    </p>

    <p style={styles.paragraph}>
      If you're just getting started, I hope this gives you a clean foundation
      to build on — whether you're showcasing projects, sharing your writing, or
      just experimenting. You can explore the pages, customize the layout, and
      publish your own site with a few small edits.
    </p>

    <p style={styles.paragraph}>
      I graduated from the University of Pittsburgh, and I started a
      climate-focused startup called{" "}
      <CustomLink href="https://www.forevergreen.earth">
        Forevergreen
      </CustomLink>
      . I love building projects that blend sustainability, tech, and community.
    </p>

    <h2 style={styles.subHeader}>Things I Enjoy</h2>
    <ul style={styles.list}>
      <li style={styles.listItem}>Finance & Business</li>
      <li style={styles.listItem}>Software Development</li>
      <li style={styles.listItem}>Writing & Content Creation</li>
      <li style={styles.listItem}>Sustainability & Climate Tech</li>
      <li style={styles.listItem}>Helping Others Learn Faster</li>
    </ul>
  </Layout>
);

export default About;
