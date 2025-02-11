import Link from "next/link";

const portableTextComponents = {
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-5xl font-light mb-2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-4xl font-light mb-2">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-3xl font-light mb-2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-xl font-light mb-2">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="ml-5 italic text-lg">{children}</blockquote>
    ),
  },
  marks: {
    link: (children: any) => (
      <Link
        href={children.value.href}
        className="text-blue hover:opacity-50 duration-300"
      >
        {children.text}
      </Link>
    ),
  },
};

export default portableTextComponents;
