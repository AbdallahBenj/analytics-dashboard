import Header from "./Header";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";
import Main from "./Main";

let layoutType = "sidebar" | "header";
layoutType = "sidebar";

const DashboardLayout = () => {
  return (
    <div className="h-full flex">
      {layoutType === "sidebar" && <Sidebar />}
      <div className="w-full h-full flex flex-col">
        <Header layoutType={layoutType} />
        <PageHeader layoutType={layoutType} />
        <Main layoutType={layoutType} />
      </div>
    </div>
  );
};

export default DashboardLayout;
