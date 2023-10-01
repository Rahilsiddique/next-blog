import { getPostMetadata } from "@/helper/getPostMetadata";
import Link from "next/link";

const page = () => {
  const data = getPostMetadata();
  const newData = data.reduce((prev: any, curr: any) => {
    if (!prev.some((e: any) => e?.author === curr.author)) {
      prev.push(curr);
    }
    return prev;
  }, []);

  return (
    <div>
      {newData.map((e: any, i: any) => (
        <Link key={i} href={`authors/${e.author}`}>
          <div key={i} className="cursor-pointer">
            {e.author}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default page;
