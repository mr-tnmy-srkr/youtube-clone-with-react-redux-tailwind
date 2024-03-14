import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <div className="flex">
        <GiHamburgerMenu />
        <img
          className="w-[120px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
          alt=""
        />
      </div>
    </div>
  );
};
export default Navbar;
