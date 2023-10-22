import { getPostMetadata } from "@/helper/getPostMetadata";
import { getPostsByAuthor } from "@/helper/getPostsByAuthor";
import Link from "next/link";

const page = () => {
  const data = getPostMetadata();
  const newData = data.reduce((prev: any, curr: any) => {
    const posts = getPostsByAuthor(curr.author);
    if (!prev.some((e: any) => e?.author === curr.author)) {
      prev.push({ ...curr, posts });
    }
    return prev;
  }, []);

  return (
    <div className="author-card">
      {newData.map((e: any, i: any) => (
        <div className="author-card-content" key={i}>
          <div className="author-pfp">{e.author.charAt(0).toUpperCase()}</div>
          <Link href={`authors/${e.author}`} passHref>
            <div className="cursor-pointer hover:underline md:text-xl font-semibold">
              {e.author}
            </div>
          </Link>
          <p className="text-xs md:text-sm font-medium text-gray-200">
            Blogs by author: {e.posts.length}
          </p>
        </div>
      ))}
    </div>
  );
};

export default page;
