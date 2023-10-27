import { getPostMetadata } from "@/helper/getPostMetadata";
import Link from "next/link";

interface searchProps {
  searchParams: { ascDesc?: string };
}
export const dynamic='force-dynamic';

 const page = ({ searchParams }: searchProps) => {
  const ascDesc = searchParams?.ascDesc || "asc";
  const toggleOptions = ["asc", "desc"];
  const data = getPostMetadata();
  const tags = data.flatMap((e) => e.tags.flat((tag: any) => tag));
  const finalTags = tags.reduce((acc: any, curr: any) => {
    acc[curr] = (acc[curr] || 0) + 1;
    return acc;
  }, {});
  const sortedList = [...Object.entries(finalTags)].sort((a, b) => {
    if (ascDesc === "asc") return a[0].localeCompare(b[0]);
    else return b[0].localeCompare(a[0]);
  });
  return (
    <div className="flex justify-self-center gap-2 cursor-pointer max-w-2xl flex-wrap">
      <div>
        <label>Sort Order: </label>

        {toggleOptions.map((option, i) => (
          <Link href={`?ascDesc=${option}`} key={i}>
            {option === "asc" ? "Ascending" : "Descending"}
          </Link>
        ))}
      </div>

      {sortedList.map(([tagName, count], i) => (
        <Link key={i} href={`tags/${tagName}`}>
          <div className="border border-blue-400 px-2 rounded-lg hover:bg-blue-400">
            {tagName + " " + count}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default page;