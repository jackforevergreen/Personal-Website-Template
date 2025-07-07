import React from "react";
import { Route, Routes } from "react-router-dom";
import { styles } from "../../layout";
import CustomLink from "../components/hoverlink"; // adjust path if needed
import TravelWithCreditCards from "./blogs/how-travel-with-credit-card-points";

export interface BlogPostProps {
  title: string;
  subTitle: string; // REMOVE THIS AND ANYWHERE IT SAYS SUBTITLE
  date: string;
  excerpt: string;
  slug: string;
}

// Define the BlogPostItem component
export const BlogPostItem: React.FC<BlogPostProps> = ({
  title,
  subTitle,
  date,
  excerpt,
  slug,
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    <p style={styles.note}>{subTitle}</p>
    <p style={{ marginBottom: "10px", fontStyle: "italic" }}>{date}</p>
    <p>{excerpt}</p>
    <CustomLink href={`/blog/${slug}`}>Read more</CustomLink>
  </div>
);

// Define the BlogList component
const BlogList: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>My Blog</h2>
    <BlogPostItem
      title="How I used credit cards to backpack to 5 countries"
      subTitle="SAMPLE BLOG :)"
      date="June 12, 2025"
      excerpt="I got to 5 countries and only spent $28 on flights."
      slug="how-travel-with-credit-card-points"
    />
  </div>
);

// Define the main Blog component with routes
const Blog: React.FC = () => (
  <Routes>
    <Route path="/" element={<BlogList />} />
    <Route
      path="/how-travel-with-credit-card-points"
      element={<TravelWithCreditCards />}
    />
  </Routes>
);

export default Blog;
