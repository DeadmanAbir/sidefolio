import Contact from "@/components/Contact";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { Socials } from "@/components/Socials";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact | Abir Dutta",
  description:
    "Abir Dutta is a full stack developer. He is currently building and offering GEN AI applications.",
};

export default function Projects() {
  return (
    <Container>
      <span className="text-4xl">✉️</span>
      <Heading className="font-black mb-2">Contact Me</Heading>
      <Paragraph className="mb-10 max-w-xl">
        Reach out to me over email or can reach out to me via my socials.
      </Paragraph>
      <Contact />

      <Socials />
    </Container>
  );
}
