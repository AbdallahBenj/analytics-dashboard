import { supabase } from "../../lib/supabase.js";
import useAuthStore from "../../store/useAuthStore.js";
import checkAdmin from "./checkAdmin.js";

const listenAuthChange = () => {
  const { setEditor } = useAuthStore.getState();
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((event, session) => {
    const user = session?.user ?? null;

    setEditor(user);

    checkAdmin();
  });

  return () => subscription.unsubscribe();
};

export default listenAuthChange;
