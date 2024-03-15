import Feed from "./components/Feed/Feed";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <h1 className="text-center max-w-screen-2xl mx-auto">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <Feed />
      </div>
    </h1>
  );
}

export default App;
