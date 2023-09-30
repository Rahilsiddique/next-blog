import { getPostsByTag } from "@/helper/getPostsByTag";
import Link from "next/link";

const page = (props: any) => {
  const [slug] = props.params.slug;
  const ans = getPostsByTag(slug);
  console.log(slug);

  return (
    <div className="flex flex-col">
      {ans.map((e, i) => (
        <Link key={i} href={`/${e?.author}/${e?.slug}`}>
          {e?.title}
        </Link>
      ))}
    </div>
  );
};

export default page;
