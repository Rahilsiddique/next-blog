import PostPreview from "@/components/PostPreview";
import { getPostsByAuthor } from "@/helper/getPostsByAuthor";

const page = (props: any) => {
  const authorname = props.params.slug;
  const posts = getPostsByAuthor(authorname);

  return (
    <div>
      all the posts by {authorname}
      <div>
        {posts.map((e: any, i: any) => (
          <PostPreview {...e} key={i} />
        ))}
      </div>
    </div>
  );
};

export default page;
