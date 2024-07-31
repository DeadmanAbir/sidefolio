import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

export const Socials = () => {
  const stack = [
    {
      title: "LinkedIn",
      src: "/images/logos/LinkedIn logo.svg",
      href: "https://www.linkedin.com/in/abir-dutta-408759223/",
      className: "h-10 w-14",
    },
    {
      title: "Twitter",
      src: "/images/logos/twitter.png",
      href: "https://x.com/ItsDutta99",
      className: "h-10 w-10",
    },
    {
      title: "GitHub",
      src: "/images/logos/github.png",
      href: "https://github.com/DeadmanAbir",
      className: "h-10 w-8",
    },
    // {
    //   title: "Discord",
    //   src: "/images/logos/discord.png",
    //   href: "fbgfbtgb",
    //   className: "h-10 w-10",
    // },
  ];
  return (
    <div>
      <Heading
        as="h1"
        className="font-black text-xxl md:text-xxl lg:text-xxl mt-20 mb-4"
      >
        Socials
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Link href={item.href} target="_blank" key={item.src}>
            <Image
              src={item.src}
              key={item.src}
              width={`200`}
              height={`200`}
              alt={item.title}
              className={twMerge("object-contain mr-4 mb-4", item.className)}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
