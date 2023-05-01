import Navbar from "../navbar";
import { supabase } from "@/utils/supabase";

import PostsContainer from "./posts-container";

export default async function Blog() {
  const { data } = await supabase.from("posts").select();
  return (
    <main>
      <Navbar />
      Hi - Blog Page
      <PostsContainer data={data} />
    </main>
  );
}
