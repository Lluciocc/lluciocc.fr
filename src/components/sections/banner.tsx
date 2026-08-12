import { AnimatePresence, motion } from "motion/react";
import React from "react";

const bannerAnimStates = {
  initial: {
    opacity: 0,
    y: "-100%",
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: "-100%",
  },
};

const Banner = () => {
  const [show, setShow] = React.useState(false);
  const handleClose = () => {
    setShow(false);
    localStorage.setItem("showGithubBanner", "false");
  };

  React.useEffect(() => {
    if (localStorage.getItem("showGithubBanner") !== "false") {
      setTimeout(() => {
        setShow(true);
      }, 500);
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          variants={bannerAnimStates}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed gap-4 p-5 mb-6 overflow-hidden text-sm border border-indigo-600 rounded-lg shadow-lg top-8 right-8 text-indigo-50 bg-indigo-950"
        >
          <p className="block mb-2 text-2xl font-bold">Hey!</p>
          <p className="pr-8 text-indigo-200 max-w-64">
            Take a look at my GitHub profile to see what I'm building and
            contributing to.
          </p>
          <div className="flex items-center gap-2">
            <a
              className="flex items-center gap-2 px-3 py-2 pr-4 mt-4 text-xs bg-indigo-900 rounded-lg hover:bg-indigo-800 text-indigo-50 w-fit hover:no-underline"
              href="https://github.com/lluciocc"
              target="_blank"
              rel="noreferrer"
              onClick={handleClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 19c-4.5 1.5-4.5-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-6 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.75c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                />
              </svg>
              View Profile
            </a>
            <button
              onClick={handleClose}
              className="flex items-center gap-2 px-3 py-2 pr-4 mt-4 text-xs border border-indigo-900 rounded-lg bg-indigo-950 hover:bg-indigo-900 text-indigo-50 w-fit hover:no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
              No thanks
            </button>
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Banner;
