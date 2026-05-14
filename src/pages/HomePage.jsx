import { useNavigate } from "react-router-dom";

import insightFlowImageLight from "../images/insight-flow-light-screenshot.png";
import insightFlowImageDark from "../images/insight-flow-dark-screenshot.png";

import MainHeader from "../layout/MainHeader";

// test SupabaseData
import { useEffect, useRef } from "react";
import fetchAllSupabaseData from "../service/api/fetchAllSupabaseData.js";
import insertSupabaseData from "../service/api/insertSupabaseData.js";
import useAdminLoginStore from "../store/useAdminLoginStore.js";
import useAuthStore from "../store/useAuthStore.js";
// test SupabaseData end

const HomePage = () => {
  const Navigate = useNavigate();

  //test SupabaseData
  const setDialogOpen = useAdminLoginStore((state) => state.setDialogOpen);
  const user = useAuthStore((state) => state.user);

  const homeRef = useRef(false);

  useEffect(() => {
    if (homeRef.current) return;

    homeRef.current = true;
    insertSupabaseData();
    fetchAllSupabaseData();
  }, []);
  //test SupabaseData end

  return (
    <>
      <main
        className="grid place-items-center flex-1
        p-4 sm:p-6 md:p-8 lg:p-10
        bg-gray-100 dark:bg-gray-800/25"
      >
        <div
          className="text-center md:text-left 
          flex flex-col-reverse items-center
          md:grid md:grid-cols-2 gap-6
          max-w-7xl"
        >
          <div className="flex flex-col justify-center max-w-lg">
            <h1
              className="mt-4 text-5xl 
            font-semibold tracking-tight text-balance 
            text-gray-950 dark:text-white"
            >
              Understand your data.
            </h1>

            <h2
              className="mt-2 text-4xl sm:text-5xl
              font-semibold tracking-tight text-balance
              bg-linear-to-r from-indigo-400 to-indigo-900 bg-clip-text text-transparent"
            >
              Grow your business.
            </h2>

            <p
              className="
              mt-8 md:mt-10 text-lg sm:text-xl/8
            text-pretty text-gray-500 dark:text-gray-400"
            >
              InsightFlow is an analytics platform that helps you track
              performance, gain insight, and make data-driven decisions.
            </p>

            <div
              className="mt-10 md:mt-12 w-full
            flex flex-col md:flex-row items-center justify-center md:justify-start gap-4"
            >
              <a
                href="/dashboard/overview"
                className="rounded-md px-12 py-3
                flex justify-center items-center
                w-full max-w-md md:w-1/2
                text-sm font-semibold text-white 
                bg-indigo-500 shadow-xs hover:bg-indigo-400
                focus-visible:outline-2 focus-visible:outline-offset-2 
                focus-visible:outline-indigo-500"
              >
                Live Demo
              </a>
              <button
                onClick={
                  !user
                    ? () => setDialogOpen(true)
                    : () => Navigate("/dashboard/overview")
                }
                // href="/"
                className="rounded-md px-12 py-3
                flex justify-center items-center
                w-full max-w-md md:w-1/2
                text-sm font-semibold 
                shadow-xs border border-indigo-500
                text-indigo-500 
                hover:bg-indigo-500
                hover:text-white
              "
              >
                Dashboard
              </button>
            </div>
          </div>
          <div>
            {/* Light mode image */}
            <img
              src={insightFlowImageLight}
              alt="Home Page Light"
              className="block dark:hidden shadow-2xl"
            />

            {/* Dark mode image */}
            <img
              src={insightFlowImageDark}
              alt="Home Page Dark"
              className="hidden dark:block shadow-2xl"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
