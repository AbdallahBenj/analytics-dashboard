import { supabase } from "../../lib/supabase.js";

const fetchSubscriptions = async () => {
  const { data, error } = await supabase.from("subscriptions").select("*");

  if (error) {
    console.log("Subscriptions supabase error", error);
    return;
  }

  // console.log("Length:", data.length);
  // console.log("Subscriptions supabase data", data);
  return data;
};

export default fetchSubscriptions;
