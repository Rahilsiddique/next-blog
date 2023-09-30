import Image from "next/image";
import Link from "next/link";

const PostPreview = ({ title, author, date, tags, img, key, slug }: any) => {
  const newDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div key={key}>
      <Image
        src={"/" + img}
        alt="img"
        width={400}
        height={400}
        className="rounded-lg"
      />
      <div className="flex gap-2 pt-1">
        {tags.map((e: any, i: any) => (
          <span
            key={i}
            className="border-1 bg-blue-400 gap-2 px-2 rounded-sm cursor-pointer"
          >
            {e}
          </span>
        ))}
      </div>
      <div className="font-bold text-xl">
        <Link href={`/${author}/${slug}`}>{title}</Link>
      </div>
      <div className="flex gap-2 font-normal text-gray-500">
        <div>{author}</div>
        <div>{newDate}</div>
      </div>
    </div>
  );
};

export default PostPreview;
