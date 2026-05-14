import { supabase } from "../../lib/supabase.js";
import useAdminLoginStore from "../../store/useAdminLoginStore.js";
import checkAdmin from "./checkAdmin.js";

const adminLogin = async (emailValue, passwordValue) => {
  const { setLoading, setLoginError, setDialogOpen } =
    useAdminLoginStore.getState();

  try {
    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailValue,
      password: passwordValue,
    });

    // login failed
    if (error) {
      console.log("Admin login error", error.message);

      setLoginError("Email or password is incorrect.");

      return null;
    }

    console.log("Login Success");
    setDialogOpen(false);
    return data;
  } catch (error) {
    console.log("Unexpected error:", error.message);
    setLoginError("Something went wrong. Please try again.");

    return null;
  } finally {
    checkAdmin();
    setLoading(false);
  }
};

export default adminLogin;
