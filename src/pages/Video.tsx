import React from "react";
import CustomLink from "../pages/components/hoverlink"; // adjust path as needed

export interface VideoItemProps {
  title: string;
  date: string;
  views: number;
  description: string;
  link: string;
}

// Define the VideoItem component
export const VideoItem: React.FC<VideoItemProps> = ({
  title,
  date,
  views,
  description,
  link,
}) => (
  <div style={{ marginBottom: "40px" }}>
    <h3 style={{ marginBottom: "10px" }}>{title}</h3>
    <p style={{ marginBottom: "10px", fontStyle: "italic" }}>{date}</p>
    <p>{description}</p>
    <p>{views} views</p>
    <CustomLink href={link} target="_blank" rel="noopener noreferrer">
      Watch video
    </CustomLink>
  </div>
);

// Define the VideoList component
const Video: React.FC = () => (
  <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
    <h2 style={{ marginBottom: "40px" }}>My Videos</h2>

    <VideoItem
      title="How to Plant a Tree with Forevergreen | Big Idea Competition"
      date="Apr 11, 2024"
      views={109}
      description="A video we made for the Big Idea Competition at University of Pittsburgh, which won $2,000"
      link="https://www.youtube.com/watch?v=mnO2GUelElM"
    />
  </div>
);

export default Video;
