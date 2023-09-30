import { getPostsByAuthor } from "@/helper/getPostsByAuthor";
import Link from "next/link";

const page = (props: any) => {
  const authorname = props.params.slug;
  const posts = getPostsByAuthor(authorname);
  return (
    <div>
      all the post by {authorname}
      <div>
        {posts.map((e, i) => (
          <Link key={i} href={`/${e?.author}/${e?.slug}`}>
            {e?.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
