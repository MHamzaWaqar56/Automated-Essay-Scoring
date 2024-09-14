import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdMenu, MdClose } from "react-icons/md";

function HomeNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="px-3 lg1:hidden pt-[20px] pb-[20px]">
      <nav className="w-[100%] flex items-center justify-between relative">
        <div className="w-[20%] flex justify-center">
          <h2
            className="text-[22px] pl-[30px] font-[700] text-[#2575ed] "
            style={{ fontFamily: "cursive" }}
          >
            Automated <br />
            Essay Scoring
          </h2>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-[#2575ed] text-3xl">
            {menuOpen ? <MdClose /> : <MdMenu />}
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`fixed top-[107px] right-0  w-[60%]  transform ${
            menuOpen ? "translate-x-0 bg-[#01216d]" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-50 md:static md:translate-x-0 md:flex md:w-auto`}
        >
          <ul className="text-[16px] font-[700] text-[#555555] md:bg-transparent md:flex w-full justify-center pt-[60px] md:pt-0">
            <li className="px-[20px] py-[10px] text-black hover:text-[#00CBFF] border-b-[1px] md:border-b-0">
              <NavLink to="/" onClick={() => setMenuOpen(false)}>
                HOME
              </NavLink>
            </li>
            <li className="px-[20px] py-[10px] text-black hover:text-[#00CBFF] border-b-[1px] md:border-b-0">
              <NavLink to="/aboutus" onClick={() => setMenuOpen(false)}>
                ABOUT US
              </NavLink>
            </li>
            <li className="px-[20px] py-[10px] text-black hover:text-[#00CBFF] border-b-[1px] md:border-b-0">
              <NavLink to="/essayscoring" onClick={() => setMenuOpen(false)}>
                ESSAY SCORING
              </NavLink>
            </li>
            <li className="px-[20px] py-[10px] text-black hover:text-[#00CBFF] border-b-[1px] md:border-b-0">
              <NavLink to="/contactus" onClick={() => setMenuOpen(false)}>
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="w-[20%] team flex justify-center">
          <p className="flex justify-center font-[600] rounded-md border-[1px] border-black px-[10px] py-[15px] text-black hover:text-white hover:bg-[#00CBFF] hover:border-[#00CBFF]">
            ML Team Epsilon
          </p>
        </div>
      </nav>

      <style>
        {`
          @media only screen and (min-width: 320px) and (max-width : 1023px){
            .team{
              display: none;
            }

        }
        `}
      </style>
    </div>
  );
}

export default HomeNavbar;
