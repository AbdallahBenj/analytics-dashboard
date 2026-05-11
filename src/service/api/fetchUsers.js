import { supabase } from "../../lib/supabase.js";

const fetchUsers = async () => {
  const { data, error } = await supabase
    .from("users")
    .select("*")

  if (error) {
    console.log("Users supabase error", error);
    return;
  }

  // console.log("Length:", data.length);
  // console.log("Users supabase data", data);
  return data;
};

export default fetchUsers;
