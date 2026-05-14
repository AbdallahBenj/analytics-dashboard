import { supabase } from "../../lib/supabase.js";
import useAuthStore from "../../store/useAuthStore.ts";

const adminLogout = async () => {
  const { setUser, setIsAdmin } = useAuthStore.getState();

  await supabase.auth.signOut();

  setUser(null);
  setIsAdmin(false);

  console.log("User Logged out");
};

export default adminLogout;
