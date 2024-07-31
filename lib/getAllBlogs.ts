import glob from "fast-glob";
import * as path from "path";

async function importBlog(blogFileNames: any) {
  let { meta, default: component } = await import(
    `src/app/blog/${blogFileNames}`
  );
  return {
    slug: blogFileNames.replace(/(\/content)?\.mdx$/, ""),
    ...meta,
    component,
  };
}

export async function getAllBlogs() {
  const data = [
    {
      slug: "https://deadmanabir.hashnode.dev/building-a-chatbot-with-chat-history-using-langchain-jsts-a-step-by-step-guide",
      title:
        "Building a Chatbot with Chat History using Langchain JS/TS: A Step-by-Step Guide",
      description:
        "Creating custom chatbots using the verge of LLMs with ease. · In the dynamic landscape of 2024, the creation of chatbots tailored to specific data has...",
      date: "2023-02-23",
      image: "/images/blog 1.png",
      tags: ["Langchain", "Chatbot", "JavaScript", "TypeScript"],
    },
    {
      slug: "https://deadmanabir.hashnode.dev/uploading-files-to-azure-using-azure-node-sdk",
      title: "Uploading Files to Azure using Azure Node SDK",
      description:
        "Mastering File Uploads to Azure: A Beginner-Friendly Guide with Node.js · Hello everyone! I hope you're all doing well. Introduction- Recently, I found...",
      date: "2024-01-16",
      image: "/images/blog 2.png",
      tags: ["Azure", "Node.js", "JavaScript"],
    },
    {
      slug: "https://deadmanabir.hashnode.dev/building-a-quiz-generator-using-langchain-js-qdrant-db-open-ai",
      title: "Building a Quiz generator using Langchain Js, Qdrant DB, Open AI",
      description:
        "Transforming Ideas into Interactive Quizzes: A JavaScript Journey with Langchain, Qdrant DB, and Open AI · Introduction I'm currently working as a...",
      date: "2024-01-01",
      image: "/images/blog 4.png",
      tags: ["Langchain", "Qdrant DB", "Open AI", "JavaScript"],
    },
  ];
  return data;
}
