import { Outlet } from "react-router-dom";

import MainHeader from "./MainHeader";

const MainLayout = () => {
  return (
    <div
      className=" 
      min-h-screen
      flex flex-col"
    >
      {/* Pages content */}
      <MainHeader />
      <Outlet />
    </div>
  );
};

export default MainLayout;
