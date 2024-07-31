"use client";
import { Paragraph } from "@/components/Paragraph";
import Image from "next/image";

import { motion } from "framer-motion";
import Link from "next/link";

export default function About() {
  const images = [
    "/images/about1.jpg",
    "/images/about2.jpg",
    "/images/about3.jpg",
    "/images/about4.jpg",
  ];
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 my-10">
        {images.map((image, index) => (
          <motion.div
            key={image}
            initial={{
              opacity: 0,
              y: -50,
              rotate: 0,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotate: index % 2 === 0 ? 3 : -3,
            }}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          >
            <Image
              src={image}
              width={200}
              height={400}
              alt="about"
              className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
            />
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl">
        <Paragraph className=" mt-4">
          Hey there, I&apos;m Abir Dutta - a passionate full stack developer,
          avid tech writer, and an open-source enthusiast. Welcome to my corner
          of the digital world!
        </Paragraph>
        <Paragraph className=" mt-4">
          Since the early days of my journey, I&apos;ve been captivated by the
          art of crafting exceptional web applications and GEN AI apps. With
          over a year of experience in the MERN stack, I thrive on turning lines
          of code into functional and elegant solutions. My goal is to not just
          create software, but to build digital marvels that seamlessly merge
          form and function.
        </Paragraph>

        <Paragraph className=" mt-4">
          But my journey doesn&apos;t stop at coding. With a heart full of words
          and a mind brimming with ideas, I&apos;ve ventured into the realm of
          writing. From tech articles that unravel complex concepts to creative
          tales that ignite the imagination, I weave words to inform, entertain,
          and inspire. You can find many of my tech articles on{" "}
          <Link
            href="https://deadmanabir.hashnode.dev/"
            target="_blank"
            className="font-black"
          >
            Hashnode.
          </Link>
        </Paragraph>
        <Paragraph className=" mt-4">
          What sets me apart is my unwavering love for open-source. I believe in
          the power of collaborative development and enjoy exploring, building,
          and maintaining open-source projects. This passion ensures that every
          project I undertake not only works flawlessly under the hood but also
          contributes to the broader tech community.
        </Paragraph>
        <Paragraph className=" mt-4">
          Currently, I am looking for new remote developer roles. If you have an
          opportunity that aligns with my skills and passion, I&apos;d love to
          connect and discuss how we can work together.
        </Paragraph>

        <Paragraph className=" mt-4">
          Thank you for being here, and I can&apos;t wait to embark on this
          adventure with you.
        </Paragraph>
        <Paragraph className=" mt-4">
          My{" "}
          <Link
            href="https://github.com/DeadmanAbir"
            target="_blank"
            className="font-black"
          >
            GitHub
          </Link>
        </Paragraph>
      </div>
    </div>
  );
}
