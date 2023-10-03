import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/helper/getPostMetadata";
import { getPostsByAuthor } from "@/helper/getPostsByAuthor";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.author,
  }));
};

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
