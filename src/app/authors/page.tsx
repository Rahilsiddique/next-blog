import { getPostMetadata } from "@/helper/getPostMetadata";
import Link from "next/link";

const page = () => {
  const data = getPostMetadata();
  return (
    <div>
      {data.map((e, i) => (
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
