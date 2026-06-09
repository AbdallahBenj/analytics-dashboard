import { useState } from "react";
import { supabase } from "../lib/supabase.js";
import adminLogin from "../service/supabase/adminLogin.js";
import useAdminLoginStore from "../store/useAdminLoginStore.js";

import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import { Waveform } from "ldrs/react";
import "ldrs/react/Waveform.css";

const AdminLoginDialog = () => {
  type FormData = {
    email: string;
    password: string;
  };

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  type Error = {
    email: string;
    password: string;
  };

  const isDialogOpen = useAdminLoginStore((state) => state.isDialogOpen);
  const setDialogOpen = useAdminLoginStore((state) => state.setDialogOpen);

  const isLoading = useAdminLoginStore((state) => state.isLoading);
  const setLoading = useAdminLoginStore((state) => state.setLoading);

  const loginError = useAdminLoginStore((state) => state.loginError);
  const setLoginError = useAdminLoginStore((state) => state.setLoginError);

  // const [isLoading, setLoading] = useState(false);
  // const [isDialogOpen, setDialogOpen] = useState(true);

  const [inputsError, setInputsError] = useState<Error>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginError("");

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      if (!value.trim()) {
        setInputsError((prev) => ({
          ...prev,
          password: "Password is required!",
        }));
      } else if (!/^.{8,}$/.test(value)) {
        setInputsError((prev) => ({
          ...prev,
          password: "Password is not valid!",
        }));
      } else {
        setInputsError((prev) => ({ ...prev, password: "" }));
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        setInputsError((prev) => ({ ...prev, email: "Email is required!" }));
        // return;
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        setInputsError((prev) => ({ ...prev, email: "Email is not valid!" }));
      } else {
        setInputsError((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const isEmailValid = /^\S+@\S+\.\S+$/.test(formData.email);
  const isPasswordValid = /^.{8,}$/.test(formData.password);
  const isFormValid = isPasswordValid && isEmailValid;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.password.trim()) {
      setInputsError((prev) => ({
        ...prev,
        password: "Password is required!",
      }));
      return;
    }

    if (!formData.email.trim()) {
      setInputsError((prev) => ({ ...prev, email: "Email is required!" }));
      return;
    }

    if (!isPasswordValid) {
      setInputsError((prev) => ({
        ...prev,
        password: "Password is not valid!",
      }));
      return;
    }

    if (!isEmailValid) {
      setInputsError((prev) => ({ ...prev, email: "Email is not valid!" }));
      return;
    }

    // Set supabase function

    await adminLogin(formData.email, formData.password);

    setFormData({
      password: "",
      email: "",
    });
  };

  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => {
        setDialogOpen(false);
        setInputsError({ password: "", email: "" });
      }}
      className="relative z-50"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Dialog container */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        {isLoading ? ( // Default values shown
          <Waveform size="50" stroke="5" speed="1" color="#615fff" />
        ) : (
          <DialogPanel
            className="max-w-lg w-md space-y-4 border p-12 rounded-2xl
              text-gray-700 dark:text-gray-300
  
              bg-gray-100/90 dark:bg-gray-900/90
              backdrop-blur-md
              
              border-white/20 dark:border-white/10
              
              shadow-md shadow-black/10
              hover:shadow-lg hover:shadow-black/20
              transition-all duration-300"
          >
            <DialogTitle className="font-bold text-xl text-indigo-500">
              Admin login
            </DialogTitle>

            <Description className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Please enter your email and password!
              <span className="block text-md font-bold text-red-500 m-2">
                {loginError}
              </span>
            </Description>

            <form onSubmit={handleSubmit}>
              {/* Email */}

              <div className=" mb-2">
                <label
                  htmlFor="email"
                  className="block text-md font-medium mb-1 mt-2"
                >
                  Email:
                </label>
                <input
                  required
                  autoFocus
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  placeholder="Enter your email.."
                  className="w-full 
              px-3 py-2 mb-2 border 
              border-gray-300 rounded-lg
              focus:outline-none focus:ring-2 
              focus:ring-indigo-500 focus:border-indigo-500
              focus:invalid:ring-red-500 focus:invalid:border-red-500
              transition"
                />
                {inputsError?.email && (
                  <p className="text-red-500 text-sm font-medium mb-2">
                    {inputsError?.email}
                  </p>
                )}
              </div>

              {/* Password */}

              <div className=" mb-2">
                <label
                  htmlFor="name"
                  className="block text-md font-medium mb-1"
                >
                  Password:
                </label>
                <input
                  required
                  id="password"
                  name="password"
                  type="password"
                  minLength={8}
                  maxLength={8}
                  value={formData.password || ""}
                  onChange={handleChange}
                  placeholder="Enter your password.."
                  className="w-full 
              px-3 py-1.5 mb-2 border 
              border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 
              focus:ring-indigo-500 focus:border-indigo-500
              focus:invalid:ring-red-500 focus:invalid:border-red-500
              transition"
                />
                {inputsError?.password && (
                  <p className="text-red-500 text-sm font-medium mb-2">
                    {inputsError?.password}
                  </p>
                )}
              </div>

              {/* Button */}

              <div className="flex gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setDialogOpen(false);
                    setFormData({ password: "", email: "" });
                    setInputsError({ password: "", email: "" });
                  }}
                  className="cursor-pointer
                  flex justify-center items-center
                  px-3 py-1.5 rounded-md 
                  text-center font-medium
                  text-gray-600 dark:text-gray-300 
                  bg-gray-500/20 dark:bg-gray-500/20 
                  hover:bg-gray-500/30 dark:hover:bg-gray-500/30
                  transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!isFormValid}
                  className="cursor-pointer flex-1
                  px-3 py-1.5 rounded-md 
                  text-center font-medium 
                  text-gray-300 bg-indigo-500 hover:bg-indigo-600 
                  transition flex items-center justify-center shadow
                  disabled:opacity-50"
                >
                  Login
                </button>
              </div>
            </form>
          </DialogPanel>
        )}
      </div>
    </Dialog>
  );
};

export default AdminLoginDialog;
