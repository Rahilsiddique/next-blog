"use client";

import { useState, useEffect, SetStateAction } from "react";
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
  const toggleOptions = [
    { value: "alphabet", label: "Alphabetical" },
    { value: "asc", label: "Ascending" },
    { value: "desc", label: "Descending" },
  ];
  const sortedList = [...Object.entries(finalTags)].sort((a: any, b: any) => {
    if (sortType === "alphabet") return a[0].localeCompare(b[0]);
    else if (sortType === "asc") return a[1] - b[1];
    else return b[1] - a[1];
  });

  const handleSortChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSortType(e.target.value);
  };

  return (
    <div className="flex justify-self-center gap-2 cursor-pointer max-w-2xl flex-wrap">
    
    <label>Sort Order: </label>
    <select value={sortType} onChange={handleSortChange}>
      {toggleOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label} 
        </option>
      ))}
    </select>
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

export default Page;
