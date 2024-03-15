import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineVideoCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/features/appSlice/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const toggleHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="py-4 ml-2">
      <div className="flex justify-between px-5">
        <div className="flex items-center">
          <GiHamburgerMenu
            onClick={toggleHandler}
            className="cursor-pointer"
            size="24px"
          />
          <img
            className="w-[140px] px-4 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
            alt=""
          />
        </div>
        <div className="w-[40%] flex items-center">
          <div className="w-full px-4 py-3 border rounded-l-full border-gray-400">
            <input
              type="text"
              name=""
              id=""
              placeholder="hello"
              className="w-full  outline-none "
            />
          </div>
          <button className="px-4 py-3 border border-gray-400 rounded-r-full">
            <IoIosSearch size="24px" />
          </button>
        </div>
        <div className="flex w-[10%] justify-between items-center">
          <MdOutlineVideoCall size="30px" className="cursor-pointer" />
          <IoMdNotificationsOutline size="30px" className="cursor-pointer" />
          <Avatar
            src="https://i.ibb.co/JkKB1dH/boy.png"
            size="30"
            round={true}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
