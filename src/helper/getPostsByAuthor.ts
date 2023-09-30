import fs from "fs";
import matter from "gray-matter";

export const getPostsByAuthor = (authorname: any) => {
  const folder = "src/posts";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((e) => e.endsWith(".md"));
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`src/posts/${fileName}`, "utf8");
    const matterResult = matter(fileContent);
    if (matterResult.data.author !== authorname) return;
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      previewImg: matterResult.data.imgPreview,
      author: matterResult.data.author,
      slug: fileName.replace(".md", ""),
      category: matterResult.data.category,
      tags: matterResult.data.tags
    };
  });
  return posts;
};
