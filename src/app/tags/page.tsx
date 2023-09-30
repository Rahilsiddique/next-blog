import { getPostMetadata } from "@/helper/getPostMetadata";
import Link from "next/link";

const page = () => {
  const data = getPostMetadata();
  const tags = data.flatMap((e) => e.tags.flat((tag: any) => tag));
  const finalTags = tags.reduce((acc: any, curr: any) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="flex gap-2 cursor-pointer">
      {Object.entries(finalTags).map((e, i) => (
        <Link key={i} href={`tags/${e[0]}`}>
          <div>{e[0] + " " + e[1]}</div>
        </Link>
      ))}
    </div>
  );
};

export default page;
