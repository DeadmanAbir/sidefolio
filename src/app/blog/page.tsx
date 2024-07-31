import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blogs | Abir Dutta",
  description:
    "Abir Dutta is a full stack developer. He is currently building and offering GEN AI applications.",
};

export default async function Blog() {
  const data = await getAllBlogs();
  return (
    <Container>
      <span className="text-4xl">#️⃣</span>
      <Heading className="font-black pb-4">I write on Hashnode</Heading>
      <Paragraph className="pb-10">
        Checkout my{" "}
        <Highlight>
          <Link href="https://deadmanabir.hashnode.dev/" target="_blank">
            {" "}
            Hashnode Account
          </Link>
        </Highlight>
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
