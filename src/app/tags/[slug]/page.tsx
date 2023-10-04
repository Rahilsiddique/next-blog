import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/helper/getPostMetadata";
import { getPostsByTag } from "@/helper/getPostsByTag";
import Link from "next/link";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  const allTags = posts.reduce((acc: Array<string>, curr: any) => {
    return [...acc, curr.tags].flat();
  }, []);
  return allTags.map((tag) => ({
    slug: tag
  }));
};

const page = (props: any) => {
  const slug = props.params.slug;

  const ans = getPostsByTag(slug);

  return (
    <div>
      <div className="font-mono py-3">
        <span className="cursor-pointer">
          <Link href={"/tags"}>{"> tag > "}</Link>
        </span>
        {slug}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {ans.map((e: any, i: any) => (
          <PostPreview {...e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
