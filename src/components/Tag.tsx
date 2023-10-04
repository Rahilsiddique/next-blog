import clsx from "clsx";
import Link from "next/link";
import React from "react";

const Tag = ({ tag, i }: any) => {
  return (
    <div key={i} className="cursor-pointer text-slate-400">
      <Link href={"/tags/" + tag}>#{tag}</Link>
    </div>
  );
};

export default Tag;
