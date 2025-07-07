import React from "react";
import { Layout } from "../layout";
import CustomLink from "../pages/components/hoverlink";
import CustomSocialBar from "./components/socialbar";

const HomePage: React.FC = () => {
  return (
    <Layout title="Custom Personal Website Template">
      <section className="font-sans text-gray-800">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-4">Welcome 👋</h1>
          <p className="text-lg leading-relaxed mb-4">
            This is a{" "}
            <span className="font-semibold">
              fully customizable personal website template
            </span>{" "}
            built with <strong>React</strong> and <strong>TypeScript</strong>.
            It uses simple, readable <strong>CSS</strong> for styling and is
            easily extendable for portfolios, blogs, or project showcases.
          </p>
          <p className="text-base leading-relaxed text-gray-600">
            Whether you're a developer, designer, student, or just someone who
            wants a clean digital home—this template is designed to help you get
            up and running fast.
          </p>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Features 🚀</h2>
          <ul className="list-disc ml-6 text-base space-y-2">
            <li>React + TypeScript for modern, type-safe development</li>
            <li>Basic CSS for easy styling and full control</li>
            <li>Modular file structure with reusable components</li>
            <li>
              Routing powered by <code>react-router-dom</code>
            </li>
            <li>
              Deployed with <strong>Netlify</strong> (1-click deploy ready)
            </li>
          </ul>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Pages Included</h2>
          <div className="space-y-2 pl-4 border-l-4 border-blue-500">
            <p>
              • <CustomLink href="/resume">Resume</CustomLink>: Showcase your
              experience and skills
            </p>
            <p>
              • <CustomLink href="/blogs">Blog</CustomLink>: Share your
              thoughts, updates, or tutorials
            </p>
            <p>
              • <CustomLink href="/media">Media</CustomLink>: Highlight press
              features, podcasts, or interviews
            </p>
            <p>
              • <CustomLink href="/projects">Projects</CustomLink>: Document
              your portfolio or experiments
            </p>
            <p>
              • <CustomLink href="/video">Video</CustomLink>: Embed or link to
              video content
            </p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold mb-3">How to Customize 🛠</h2>
          <p className="text-base leading-relaxed text-gray-700">
            Everything is organized in the <code>/pages</code> folder. Just edit
            the existing content, or add your own. You can also customize the
            styles using global CSS or inline styles. Want to change the nav,
            header, or layout? Just update the components in{" "}
            <code>/components</code> and <code>/layout</code>.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-xl font-semibold mb-3">
            Deploying to Netlify 🌐
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            This site is ready to deploy on{" "}
            <CustomLink href="https://www.netlify.com/">Netlify</CustomLink>.
            Just connect your GitHub repo, select the root folder, and Netlify
            will handle the rest.
          </p>
        </div>

        <div>
          <CustomSocialBar />
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
