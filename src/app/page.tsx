import PostPreview from "@/components/PostPreview";
import { getPostMetadata } from "@/helper/getPostMetadata";
export default function Home() {
  const posts = getPostMetadata();
  return (
    <main className="grid grid-cols-2 gap-3 py-2">
      {posts.map((e, i) => (
        <PostPreview {...e} key={i} />
      ))}
    </main>
  );
}
