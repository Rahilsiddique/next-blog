"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const Page = () => {
  const [finalTags, setFinalTags] = useState({});

  useEffect(() => {
    fetch("/api/gettag")
      .then((response) => response.json())
      .then((data) => {
        setFinalTags(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [sortType, setSortType] = useState("alphabet");
  const toggleOptions = ["alphabet", "asc", "desc"];
  const sortedList = [...Object.entries(finalTags)].sort((a: any, b: any) => {
    if (sortType === "alphabet") return a[0].localeCompare(b[0]);
    else if (sortType === "asc") return a[1] - b[1];
    else return b[1] - a[1];
  });

  return (
    <div className="flex justify-self-center gap-2 cursor-pointer max-w-2xl flex-wrap">
      {sortedList.map(([tagName, count], i) => (
        <Link key={i} href={`tags/${tagName}`}>
          <div className="border border-blue-400 px-2 rounded-lg hover:bg-blue-400">
            {tagName + " " + count}
          </div>
        </Link>
      ))}

      <div>
        <label>Sort Order: </label>
        {toggleOptions.map((option, i) => (
          <button
            key={option}
            onClick={() => setSortType(option)}
            className={sortType === option ? "active" : ""}
          >
            {option === "asc"
              ? "Ascending"
              : option === "desc"
              ? "Descending"
              : "Alphabetical"}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Page;
