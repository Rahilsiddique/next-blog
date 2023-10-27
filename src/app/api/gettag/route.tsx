import {NextResponse} from 'next/server';
import {getPostMetadata} from  "@/helper/getPostMetadata";

export async function GET() {
  const data = getPostMetadata() as any[];
  const tags = data.flatMap((e: any) => e.tags.flat((tag: any) => tag));
  const finalTags: { [key: string]: number } = tags.reduce(
    (acc: { [key: string]: number }, curr: any) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },
    {}
  );

  return NextResponse.json(finalTags);
}