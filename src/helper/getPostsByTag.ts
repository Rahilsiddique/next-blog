import { getPostMetadata } from "./getPostMetadata";

export const getPostsByTag = (tag: any) => {
  const data = getPostMetadata();
  return data.filter((e) => e.tags.includes(tag));
};
