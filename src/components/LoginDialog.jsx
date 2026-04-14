import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

import useStoreLogin from "../store/useStoreLogin";

const LoginDialog = () => {
  const setUserLogin = useStoreLogin((state) => state.setUserLogin);
  const loginOpen = useStoreLogin((state) => state.loginOpen);
  const setLoginOpen = useStoreLogin((state) => state.setLoginOpen);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "name") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, name: "Name is required!" }));
      } else {
        setErrors((prev) => ({ ...prev, name: "" }));
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        setErrors((prev) => ({ ...prev, email: "Email is required!" }));
        // return;
      } else if (!/^\S+@\S+\.\S+$/.test(value)) {
        setErrors((prev) => ({ ...prev, email: "Email is not valid!" }));
      } else {
        setErrors((prev) => ({ ...prev, email: "" }));
      }
    }
  };

  const isEmailValid = /^\S+@\S+\.\S+$/.test(formData.email);
  const isFormValid = formData.name.trim() && isEmailValid;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrors((prev) => ({ ...prev, name: "Name is required!" }));
      return;
    }

    if (!formData.email.trim()) {
      setErrors((prev) => ({ ...prev, email: "Email is required!" }));
      return;
    }

    if (!isEmailValid) {
      setErrors((prev) => ({ ...prev, email: "Email is not valid!" }));
      return;
    }

    setUserLogin({ ...formData });
    setFormData({
      name: "",
      email: "",
    });
    setLoginOpen(false);
  };

  return (
    <Dialog
      open={loginOpen}
      onClose={() => {
        setLoginOpen(false);
        setErrors({ name: "", email: "" });
      }}
      className="relative z-50"
    >
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />

      {/* Dialog container */}
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel
          className="max-w-lg space-y-4 border p-12 rounded-2xl
              text-gray-700 dark:text-gray-300
  
              bg-gray-100/90 dark:bg-gray-900/90
              backdrop-blur-md
              
              border-white/20 dark:border-white/10
              
              shadow-md shadow-black/10
              hover:shadow-lg hover:shadow-black/20
              transition-all duration-300"
        >
          <DialogTitle className="font-bold text-xl text-indigo-500">
            Login
          </DialogTitle>

          <Description className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Please enter your name and email!
          </Description>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name" className="block text-md font-medium mb-1">
              Name:
            </label>
            <input
              required
              autoFocus
              id="name"
              name="name"
              type="text"
              value={formData.name || ""}
              onChange={handleChange}
              placeholder="Enter your name.."
              className="w-full 
              px-3 py-1.5 mb-2 border 
              border-gray-300 rounded-lg 
              focus:outline-none focus:ring-2 
              focus:ring-indigo-500 focus:border-indigo-500
              focus:invalid:ring-red-500 focus:invalid:border-red-500
              transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm font-medium mb-2">
                {errors.name}
              </p>
            )}
            <label
              htmlFor="email"
              className="block text-md font-medium mb-1 mt-2"
            >
              Email:
            </label>
            <input
              required
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
            {errors.email && (
              <p className="text-red-500 text-sm font-medium mb-2">
                {errors.email}
              </p>
            )}

            <div className="flex gap-4 mt-4">
              <button
                type="button"
                onClick={() => {
                  setLoginOpen(false);
                  setFormData({ name: "", email: "" });
                  setErrors({ name: "", email: "" });
                }}
                className="cursor-pointer
                  px-3 py-1.5 rounded-md 
                  text-center font-medium
                  text-gray-600 dark:text-gray-300 
                  bg-gray-500/20 dark:bg-gray-500/20 
                  hover:bg-gray-500/30 dark:hover:bg-gray-500/30
                  transition flex items-center justify-center"
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
      </div>
    </Dialog>
  );
};

export default LoginDialog;
