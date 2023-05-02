import Navbar from "../navbar";
import { supabase } from "@/utils/supabase";
import PostsContainer from "./posts-container";
import PageTitle from "./components/title";

export const revalidate = 60;

export default async function Blog() {
  const { data } = await supabase.from("posts").select();
  return (
    <main>
      <Navbar />
      <PageTitle>وبلاگ</PageTitle>
      <PostsContainer data={data} />
    </main>
  );
}
