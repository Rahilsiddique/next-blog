import { getPostMetadata } from "./getPostMetadata";

export const getPostsByAuthor = (authorname: any) => {
  const data = getPostMetadata();
  return data.filter((e) => e.author === authorname);
};
