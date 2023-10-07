import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { getPostMetadata } from "@/helper/getPostMetadata";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/helper/getPostBySlug";
import Image from "next/image";
import Link from "next/link";
import Tag from "@/components/Tag";

const getPortfolioContent = (slug: string) => {
  const folder = "src/posts";
  const file = `${folder}/${slug}.md`;
  if (!slug || !fs.existsSync(file)) {
    notFound();
  }
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: [post.author, post.slug]
  }));
};

export const generateMetadata = async ({ params: { slug } }: any) => {
  const post = getPostBySlug(slug.toString().split(",")[1]);
  return {
    title: post?.title,
    description: post?.title,
    keywords: post?.tags,
    creator: post?.author,
    openGraph: {
      images: [{ url: post?.img }]
    }
  };
};

const page = (props: any) => {
  const slug = props.params.slug;
  const post = getPortfolioContent(slug.toString().split(",")[1]);
  const postInfo = getPostBySlug(slug.toString().split(",")[1]);
  const newDate = new Date(postInfo?.date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <div className="flex flex-col items-center">
      <article className="prose">
        <Image
          src={"/" + postInfo?.img}
          alt="img"
          height={700}
          width={700}
          className="overflow-hidden rounded-xl"
        />
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default page;
