import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-[#042d89] pt-10 mt-4">
      <div className="w-full text-center sm:text-left">
        <h2
          className="text-[32px] text-center sm:text-[38px] font-[700] text-white"
          style={{ fontFamily: "cursive" }}
        >
          <NavLink to="/">
            Automated <br />
            Essay Scoring
          </NavLink>
        </h2>
      </div>

      <div className="footer-center mt-10 sm:mt-20 w-[90%] sm:w-full xl:w-[85%] 2xl:w-[75%] px-5 sm:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
        <div>
          <h1 className="about-h1 text-[18px] text-left font-[700]">ABOUT</h1>
          <p className="text-[13px] about-p sm:text-[14px] text-left font-[400] mt-5">
            At <b>Automated Essay Scoring(AES)</b>, we use{" "}
            <b>Automated Essay Scoring(AES)</b> powered by{" "}
            <b>machine learning</b> and <b>natural language processing</b>. Our
            system ensures quick, objective grading while offering constructive
            feedback, helping students improve their writing skills and
            understanding of assessment criteria.
          </p>
        </div>

        <div className="flex content-center flex-wrap flex-col">
          <h1 className="text-[18px] font-[700] text-left">PAGES</h1>
          <ul className="list-none mt-5 flex flex-col gap-3 pl-0">
            <li className="text-[12px] sm:text-[13px] font-[400] text-left hover:text-[#385bce] cursor-pointer">
              <NavLink to="/contactus">CONTACT US</NavLink>
            </li>
            <li className="text-[12px] sm:text-[13px] font-[400] text-left hover:text-[#385bce] cursor-pointer">
              <NavLink to="/aboutus">ABOUT US</NavLink>
            </li>
            <li className="text-[12px] sm:text-[13px] font-[400] text-left hover:text-[#385bce] cursor-pointer">
              <NavLink to="/privacypolicy">PRIVACY POLICY</NavLink>
            </li>
            <li className="text-[12px] sm:text-[13px] font-[400] text-left hover:text-[#385bce] cursor-pointer">
              ADDRESS
            </li>
          </ul>
        </div>

        <div>
          <h1 className="contact-h1 text-[18px] font-[700] text-left">
            CONTACT
          </h1>
          <ul className="mt-5 flex flex-col gap-3 text-left">
            <li className="text-[12px] sm:text-[13px] font-[400] text-left">
              <div className="flex gap-2 sm:gap-5 items-center">
                <FaLocationDot className="text-2xl sm:text-3xl text-[#2575ed]" />
                <span>
                  Javeed Arcade, Office #2A St 3, G-12/1 G-12, Islamabad,
                  Islamabad Capital Territory 46000, Pakistan
                </span>
              </div>
            </li>
            <li className="text-[12px] sm:text-[13px] font-[400] text-left">
              <div className="flex gap-2 sm:gap-5 items-center">
                <FaPhone className="text-[14px] sm:text-[16px] text-[#2575ed]" />
                <span>+923000000000</span>
              </div>
            </li>
            <li className="text-[12px] sm:text-[13px] font-[400] text-left">
              <div className="flex gap-2 sm:gap-5 items-center">
                <IoMail className="text-lg sm:text-xl text-[#2575ed]" />
                <span className="hover:text-[#2525ed]">
                  <NavLink to="mailto:info@drugdiscovery.org">
                    info@essayscoring.org
                  </NavLink>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <p className="copyright text-white py-3 sm:py-[15px] bg-[#0e2b70] text-[12px] sm:text-[14px] font-[400] text-center mt-10 sm:mt-20">
        Copyright © 2024 ITSOLERA | Design & Develop by{" "}
        <span className="cursor-pointer hover:text-[#2575ed]">
          ML Team Epsilon
        </span>
      </p>

      <style>
        {`

           @media only screen and (min-width: 320px) and (max-width : 380px){
           
           .copyright{
           font-size : 8px !important;
          }

           }


          @media only screen and (min-width: 320px) and (max-width : 640px){
            .footer-center{
             width: 100%;
          }

          .copyright{
           font-size : 10px;
          }

          .about-h1{
            text-align: center;
          }

          .about-p{
            text-align: justify;
          }

          .contact-h1{
            text-align: center
          }

        }
        `}
      </style>
    </section>
  );
};

export default Footer;
