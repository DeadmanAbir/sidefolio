"use client";

const Contact = () => {
  return (
    <button
      onClick={() => {
        window.location.href = `mailto:abirdutta90990@gmail.com`;
      }}
      className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-black text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
    >
      Contact Me
    </button>
  );
};

export default Contact;
