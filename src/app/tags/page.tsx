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
    <div className="flex justify-self-center gap-2 cursor-pointer max-w-2xl flex-wrap">
      {Object.entries(finalTags).map((e, i) => (
        <Link key={i} href={`tags/${e[0]}`}>
          <div className="border border-blue-400 px-2 rounded-lg hover:bg-blue-400">
            {e[0] + " " + e[1]}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
