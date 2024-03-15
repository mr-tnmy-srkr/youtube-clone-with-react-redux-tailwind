import { CiHome } from "react-icons/ci";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { useSelector } from "react-redux";

const sidebarItem = [
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
  {
    icons: <CiHome size="24px" />,
    title: "Home",
  },
  {
    icons: <SiYoutubeshorts size="24px" />,
    title: "Short",
  },
  {
    icons: <MdOutlineSubscriptions size="24px" />,
    title: "Subscription",
  },
];

const Sidebar = () => {
  const { open } = useSelector((state) => state.app);
  return (
    <div
      className={`relative  left-0 ${
        open ? "w-[200px]" : "w-[78px] md:w-[80px] lg:w-[90px]"
      } p-5 pt-0 h-[calc(100vh-2rem)] bg-white overflow-y-scroll overflow-x-hidden`}
    >
      {sidebarItem.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex my-3 px-2  py-2 hover:bg-slate-100 rounded-lg 
            ${!open && ""}
            `}
          >
            <p className=" ">{item.icons}</p>
            <p className={`ml-5 ${open ? "" : "hidden"} `}>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
