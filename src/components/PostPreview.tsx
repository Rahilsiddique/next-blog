import Image from "next/image";
import Link from "next/link";
import Tag from "./Tag";

const PostPreview = ({ title, author, date, tags, img, key, slug }: any) => {
  const newDate = new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return (
    <div key={key} className="flex flex-col gap-2">
      <div className="lg:h-64 lg:w-auto h-40 w-72 overflow-hidden relative rounded-lg">
        <Image
          src={"/" + img}
          alt="img"
          layout="fill"
          objectFit="cover"
          className="hover:scale-110 duration-200 overflow-hidden"
        />
      </div>
      <div className="flex gap-2 pt-1 flex-wrap">
        {tags.map((e: any, i: any) => (
          <Tag key={i} tag={e} />
        ))}
      </div>
      <div className="font-semibold text-xl lg:truncate">
        <Link
          href={`/${author}/${slug}`}
          data-te-toggle="tooltip"
          title={title}
        >
          {title}
        </Link>
      </div>
      <div className="flex gap-2 items-center font-normal text-gray-500">
        <Link className="flex gap-2 items-center" href={`/authors/${author}`}>
          <div className="author-pfp bg-blue-400 text-xs text-black w-5 h-5">
            {author.charAt(0).toUpperCase()}
          </div>
          <span className="h-1 bg-slate-300  w-1 rounded-full"></span>
          <div>{author}</div>
        </Link>
        <span className="h-1 bg-slate-300  w-1 rounded-full"></span>
        <div>{newDate}</div>
      </div>
    </div>
  );
};

export default PostPreview;
