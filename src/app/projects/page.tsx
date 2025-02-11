import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
interface SanityObject {
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
      _type: string;
    };
    _type: "image";
    alt: string;
  };
}
export default async function Page() {
  const projects = await client.fetch(
    `*[_type == "project"][]{mainImage,"slug":slug.current}`
  );
  return (
    <div className="max-sm:mx-5 mx-10 mt-32">
      <section className="flex max-lg:flex-col-reverse lg:space-x-6 max-w-screen-xl mx-auto">
        <div className="opacity-50 h-fit lg:w-1/2 max-lg:mr-auto mt-3 font">
          <p>{projects && projects.length} featured projects</p>
          <p>from 2002 to 2024</p>
        </div>
        <div className="lg:w-1/2">
          <h1 className="max-sm:text-4xl text-5xl font-light leading-tight max-w-xl text-right ml-auto">
            Browse projects dating all the way back to the early two thousands.
          </h1>
        </div>
      </section>
      <section className="max-sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 grid mb-10 mt-24 gap-6">
        {projects &&
          projects.map((i: SanityObject, index: number) => {
            return (
              <Link href={"/projects/" + i.slug} key={index} className="mb-4">
                <img
                  src={urlFor(i.mainImage).width(1000).url()}
                  alt={i.mainImage.alt}
                  className="size-full object-cover aspect-video rounded-lg"
                />
              </Link>
            );
          })}
      </section>
    </div>
  );
}
