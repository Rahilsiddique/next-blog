import { getPostMetadata } from "./getPostMetadata";

export const getPostBySlug = (slug: String) => {
  const data = getPostMetadata();
  return data.find((e) => e.slug === slug);
};
