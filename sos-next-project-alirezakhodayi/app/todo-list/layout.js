"use client";
import { supabase } from "@/utils/supabase";
import { Provider } from "react-supabase";

export default function TodoListLayout({ children }) {
  return (
    <Provider value={supabase}>
      <main dir="ltr">{children}</main>
    </Provider>
  );
}
