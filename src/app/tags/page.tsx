import { getPostMetadata } from "@/helper/getPostMetadata";
import Link from "next/link";

interface searchProps {
  searchParams: { sort?: string | undefined };
}
export const dynamic = "force-dynamic";

const page = ({ searchParams }: searchProps) => {
  const sortType = searchParams.sort || "alphabet";
  const toggleOptions = ["alphabet", "asc", "desc"];
  const data = getPostMetadata() as any[];
  const tags = data.flatMap((e: any) => e.tags.flat((tag: any) => tag));
  const finalTags: { [key: string]: number } = tags.reduce(
    (acc: { [key: string]: number }, curr: any) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },
    {}
  );
  const sortedList = [...Object.entries(finalTags)].sort((a, b) => {
    if (sortType === "alphabet") return a[0].localeCompare(b[0]);
    else if (sortType === "asc") return a[1] - b[1];
    else return b[1] - a[1];
  });

  return (
    <div className="flex justify-self-center gap-2 cursor-pointer max-w-2xl flex-wrap">
      <div>
        <label>Sort Order: </label>

        {toggleOptions.map((option, i) => (
          <Link href={`?sort=${option}`} key={option}>
            {option === "asc"
              ? "Ascending"
              : option === "desc"
              ? "Descending"
              : "Alphabetical"}
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
};

export default page;
