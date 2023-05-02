import Navigation from "@/app/navbar";
import { supabase } from "@/utils/supabase";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("posts").select("id");
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params: { id } }) {
  // fetch data
  const { data: post } = await supabase
    .from("posts")
    .select()
    .match({ id })
    .single();

  return {
    title: `SOS | ${post ? post.post_title : "Not Found"}`,
  };
}

export default async function SinglePost({ params: { id } }) {
  const { data: post } = await supabase
    .from("posts")
    .select()
    .match({ id })
    .single();
  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navigation />
      <p>{JSON.stringify(post)}</p>
    </main>
  );
}
