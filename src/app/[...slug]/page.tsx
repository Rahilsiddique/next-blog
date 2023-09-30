import PostPreview from "@/components/PostPreview";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPortfolioContent = (slug: string) => {
  const folder = "src/posts";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const page = (props: any) => {
  const slug = props.params.slug;
  const post = getPortfolioContent(slug.toString().split(",")[1]);
  return (
    <div>
      <article className="prose lg:prose-xl">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default page;
