import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { getPostMetadata } from "@/helper/getPostMetadata";
import { notFound } from "next/navigation";

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

const page = (props: any) => {
  const slug = props.params.slug;
  const post = getPortfolioContent(slug.toString().split(",")[1]);
  return (
    <div className="flex flex-col items-center">
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default page;
