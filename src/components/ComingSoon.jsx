const ComingSoon = () => {
  return (
    <div
      className={`h-full px-4 col-span-4 rounded-2xl
        flex flex-col justify-center items-center text-center
        border border-gray-200 dark:border-gray-700`}
    >
      {/* Your content */}
      <h1 className="text-4xl font-bold text-indigo-500">Coming soon 🚧</h1>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        We’re working on this feature.
      </p>
    </div>
  );
};

export default ComingSoon;
