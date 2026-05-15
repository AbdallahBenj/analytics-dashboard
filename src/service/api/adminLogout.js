import { supabase } from "../../lib/supabase.js";
import useAuthStore from "../../store/useAuthStore.ts";

const adminLogout = async () => {
  const { setEditor, setIsAdmin } = useAuthStore.getState();

  await supabase.auth.signOut();

  setEditor(null);
  setIsAdmin(false);

  console.log("User Logged out");
};

export default adminLogout;
