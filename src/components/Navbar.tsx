
import logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
 
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md ">
      <nav className="  container mx-auto py-3  ">
        <div className="flex justify-between items-center">
          <button
           
            className="text-2xl md:hidden"
          >
            <RxHamburgerMenu />
          </button>
          <img src={logo} alt="logo" />
          <ul className=" hidden md:flex gap-8 text-lg text-[#475569] font-semibold ">
            <li className="text-[#D91B7E]">Home</li>
            <li>Technologies</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex items-center gap-3 md:gap-5">
            <button className="font-semibold text-[#475569]">Sign In </button>
            <button className="p-4 py-2 bg-[#D91B7E] text-white font-semibold rounded-2xl">
              Sign up{" "}
            </button>
          </div>
        </div>
        
      </nav>
    </div>
  );
};

export default Navbar;
