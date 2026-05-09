import insightFlowImageLight from "../images/insight-flow-light-screenshot.png";
import insightFlowImageDark from "../images/insight-flow-dark-screenshot.png";

import MainHeader from "../layout/MainHeader";

const HomePage = () => {
  return (
    <>
      <main
        className="grid place-items-center flex-1
        px-4 py-4 sm:py-6 lg:px-8
        bg-gray-100 dark:bg-gray-800/25"
      >
        <div
          className="text-center md:text-left 
          flex flex-col-reverse md:grid md:grid-cols-2 gap-4
          max-w-7xl"
        >
          <div className="flex flex-col justify-center">
            <h1
              className="mt-4 text-5xl sm:text-5xl 
            font-semibold tracking-tight text-balance 
            text-gray-950 dark:text-white"
            >
              Understand your data.
            </h1>

            <h2
              className="mt-2 text-4xl font-semibold tracking-tight text-balance sm:text-5xl
              bg-linear-to-r from-indigo-400 to-indigo-900 bg-clip-text text-transparent"
            >
              Grow your business.
            </h2>

            <p className="mt-10 text-lg text-pretty text-gray-500 dark:text-gray-400 sm:text-xl/8">
              InsightFlow is an analytics platform that helps you track
              performance, gain insight, and make data-driven decisions.
            </p>

            <div className="mt-12 flex items-center justify-center md:justify-start gap-x-6">
              <a
                href="/dashboard/overview"
                className="rounded-md px-12 py-2.5 
                text-sm font-semibold text-white 
                bg-indigo-500 shadow-xs hover:bg-indigo-400
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Live Demo
              </a>
              {/* <a href="/" className="text-sm font-semibold text-white">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a> */}
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
