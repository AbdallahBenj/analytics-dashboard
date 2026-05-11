import { supabase } from "../../lib/supabase";

const fetchPayments = async () => {
  const { data, error } = await supabase.from("payments").select("*");

  if (error) {
    console.log("Payments supabase error", error);
    return;
  }

  // console.log("Length", data.length);
  // console.log("Payments supabase data", data);
  return data;
};

export default fetchPayments;
