import { supabase } from "../../lib/supabase";

const fetchTimeline = async () => {
  const { data, error } = await supabase.from("timeline").select("*");

  if (error) {
    console.log("Timeline supabase error", error);
    return;
  }

  // console.log("Length", data.length);
  // console.log("Timeline supabase data", data);
  return data;
};

export default fetchTimeline;
