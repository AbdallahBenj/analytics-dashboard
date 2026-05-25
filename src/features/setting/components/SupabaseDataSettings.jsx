const SupabaseDataSettings = () => {
  return (
    <div
      className="relative primary-chart h-auto
            rounded-2xl p-4 cursor-pointer 
            col-span-4 md:col-span-4 lg:col-span-2
            flex flex-col

            bg-white/60 dark:bg-gray-900/40
            backdrop-blur-md
            
            border border-white/20 dark:border-white/10
            
            shadow-md shadow-black/10
            hover:shadow-xl hover:shadow-black/20
            hover:-translate-y-0.5
            transition-all duration-300"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div className="Title-chart mb-2 md:mb-4">
          <h3 className="text-lg font-bold mb-2 md:mb-4 text-gray-700 dark:text-gray-200">
            Supabase Data Options
          </h3>
          <p className="text-md font-semibold text-indigo-500 dark:text-indigo-400">
            test 01
            <span className="text-gray-600 dark:text-gray-300"> Option</span>
          </p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            Test 02
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupabaseDataSettings;
