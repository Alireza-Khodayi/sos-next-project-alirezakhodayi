import Navigation from "@/app/components/navbar";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import { notFound } from "next/navigation";
import PostContainer from "./components/post-container";

export async function generateStaticParams() {
  const { data: posts } = await supabase.from("posts").select("id");
  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({ params: { id } }) {
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
      <br />
      <br />

      <PostContainer>
        <Image
          alt={post.post_title}
          src={`/images/articles/${post.keyword}.webp`}
          width={350}
          height={200}
        />
        <h1>{post.post_title}</h1>
        <p>{post.post_content}</p>
        <p>کلمه کلیدی :{post.keyword}</p>
      </PostContainer>
    </main>
  );
}
