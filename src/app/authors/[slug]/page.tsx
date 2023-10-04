import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/helper/getPostMetadata";
import { getPostsByAuthor } from "@/helper/getPostsByAuthor";
import Link from "next/link";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.author
  }));
};

const page = (props: any) => {
  const authorname = props.params.slug;
  const posts = getPostsByAuthor(authorname);

  return (
    <div>
      <div className="py-3 font-mono">
        <Link href={"/authors"}>{"> author > "}</Link>
        {authorname}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((e: any, i: any) => (
          <PostPreview {...e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
