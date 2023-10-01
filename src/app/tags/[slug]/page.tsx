import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/helper/getPostMetadata";
import { getPostsByTag } from "@/helper/getPostsByTag";

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
  console.log(slug);

  const ans = getPostsByTag(slug);

  return (
    <div className="grid grid-cols-2">
      {ans.map((e: any, i: any) => (
        <PostPreview {...e} key={i} />
      ))}
    </div>
  );
};

export default page;
