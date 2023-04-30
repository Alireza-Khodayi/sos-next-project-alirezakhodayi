import { supabase } from "@/utils/supabase";

export default async function SinglePost({ params: { id } }) {
  const { data: post } = await supabase
    .from("posts")
    .select()
    .match({ id })
    .single();
  return <pre>{JSON.stringify(post)}</pre>;
}
