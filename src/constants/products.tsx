import Agentgenesis from "public/images/Agentgenesis.png";
import Devscribe from "public/images/devscribe.png";
import Kirak from "public/images/kirak.png";

export const products = [
  {
    href: "https://www.agentgenesis.dev/",
    title: "Agentgenesis",
    description:
      "Agentgenesis is an open-source platform that provides a vast collection of copy-paste code snippets to streamline your AI development.",
    thumbnail: Agentgenesis,
    images: [Agentgenesis],
    stack: ["Nextjs", "Typescript", "Contentlayer"],
    github: "https://github.com/DeadmanAbir/AgentGenesis",
    slug: "agentgenesis",
    content: (
      <div>
        <p>
          Discover AgentGenesis, your go-to source for customizable Generative
          AI code snippets. Easily integrate these snippets into your
          applications to accelerate your AI development process. Our collection
          is designed to simplify and speed up the creation of AI systems.{" "}
        </p>
        <p>
          AgentGenesis offers a wide range of components and tools. This
          includes ChatModels such as OpenAI, Gemini, Anthropic, and more are
          coming soon. Additionally, our platform features specialized agents,
          like the LinkedIn Agent, which delivers summary responses to public
          LinkedIn profiles in a convenient tabular format. Stay tuned for many
          more exciting additions.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://dev-scribe-ai-7fj7.vercel.app/",
    title: "Devscribe AI",
    description:
      "AI-Assisted Chatbot for Faster Learning and Better Communication.",
    thumbnail: Devscribe,
    images: [Devscribe],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Langchain JS",
      "TrpC",
      "OpenAI",
    ],
    github: "https://github.com/DeadmanAbir/DevScribe-AI",
    slug: "devscribe",
    content: (
      <div>
        <p>
          Devscribe AI is an advanced AI assistant designed to help students
          excel in their studies and research in a short time.{" "}
        </p>
        <p>
          Devscribe AI acts as a chatbot that generates pre-made summaries, key
          concepts, and notes for English YouTube videos with transcriptions.
          This innovative feature allows students to chat with the video
          content, clarifying concepts without the need to watch the entire
          video.
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.kirak.ai/",
    title: "Kirak AI",
    description:
      "With Kirak AI, you can chat with PDFs, summarize videos, take smart notes, and instantly create flashcards and quizzes.",
    thumbnail: Kirak,
    images: [Kirak],
    stack: [
      "Nextjs",
      "Tailwindcss",
      "Typescript",
      "Langchain JS",
      "TrpC",
      "OpenAI",
    ],
    slug: "kirak",
    content: (
      <div>
        <p>
          Kirak AI is a personalized AI assistant designed to help users
          understand complex documents in an easier format.{" "}
        </p>
        <p>
          Kirak AI enables users to upload PDFs, DOCX, PPTs, images, and more.
          It generates summaries for these files and allows interactive chatting
          with the content, all within a single platform.
        </p>{" "}
      </div>
    ),
  },
];
