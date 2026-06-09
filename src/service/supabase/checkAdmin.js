import { supabase } from "../../lib/supabase.js";
import useAuthStore from "../../store/useAuthStore.js";

const checkAdmin = async () => {
  const { setIsAdmin } = useAuthStore.getState();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return;

  const { data, error } = await supabase
    .from("profiles")
    .select("role")
    .eq("user_id", user.id)
    .single();

  if (error) {
    console.log(error.message);
    return false;
  }

  const admin = data?.role === "admin";

  setIsAdmin(admin);

  return admin;
};

export default checkAdmin;
