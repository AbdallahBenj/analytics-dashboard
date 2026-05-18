const DataTypeNotice = () => {
  const demoMode = "Demo Mode — Showing mock analytics data";
  // const liveMode = "Live Mode — Connected to Supabase";
  return (
    <div className="w-full h-fit bg-indigo-500">
      <p className="text-gray-100 text-center text-sm">{demoMode}</p>
    </div>
  );
};

export default DataTypeNotice;
