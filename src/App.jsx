import Header from "./layout/Header";
import SectionsHeader from "./layout/SectionsHeader";
import Sidebar from "./layout/Sidebar";
import Main from "./layout/Main";

const isSidebarLayout = true;

function App() {
  return (
    <div className="h-full flex">
      {isSidebarLayout && <Sidebar />}
      <div className="w-full h-full flex flex-col">
        <Header isSidebarLayout={isSidebarLayout} />
        <SectionsHeader isSidebarLayout={isSidebarLayout} />
        <Main isSidebarLayout={isSidebarLayout} />
      </div>
    </div>
  );
}

export default App;
