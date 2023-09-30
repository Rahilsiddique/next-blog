import PostPreview from "@/components/PostPreview";
import { getPostsByTag } from "@/helper/getPostsByTag";

const page = (props: any) => {
  const [slug] = props.params.slug;
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
