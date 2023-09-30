import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = () => {
  const folder = "src/posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`src/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      img: matterResult.data.img,
      author: matterResult.data.author,
      slug: fileName.replace(".md", ""),
      category: matterResult.data.category,
      tags: matterResult.data.tags
    };
  });
  return posts;
};
