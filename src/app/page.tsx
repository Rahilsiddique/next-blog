import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/helper/getPostMetadata";

export const metadata = {
  openGraph: {
    title: "Blogs 🤯",
    description: "One stop ",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600
      },
      {
        url: "https://nextjs.org/og-alt.png",
        width: 1800,
        height: 1600,
        alt: "My custom alt"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function Home() {
  const posts = getPostMetadata();
  return (
    <main className=" grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 md:mx-6 sm:mx-24 gap-6 py-2">
      {posts.map((e, i) => (
        <PostPreview {...e} key={i} />
      ))}
    </main>
  );
}
