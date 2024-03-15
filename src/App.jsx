import { useSelector } from "react-redux";
import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const { open } = useSelector((state) => state.app);
  return (
    <h1 className="text-center max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="flex w-full">
        <div className={`${open ? "w-[200px]" : "w-[100px]"}`}>
          <Sidebar />
        </div>
        <div
          className={`${
            open ? "w-[calc(100vw-220px)]" : "w-[calc(100vw-100px)]"
          }`}
        >
          <Feed />
        </div>
      </div>
    </h1>
  );
}

export default App;
