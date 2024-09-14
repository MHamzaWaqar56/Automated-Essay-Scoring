import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="w-full">
        <div className="w-full privacy-section bg-[#dfdfdf] px-[24%] py-[30px]">
          <h2 className="text-left text-[24px] mb-[25px] mt-0 p-0 font-[800] policy-h2">
            Our Privacy Policy
          </h2>
          <p className=" text-left mb-[30px] text-[1rem] policy-p ">
            If you are a journalist and wish to speak with the Automated Essay
            Scoring media team, you can contact us at{" "}
            <span className="text-[#00CBFF] hover:text-[#25c0e7]">
              {" "}
              <NavLink to="mailto:media@drugdiscovery.org">
                {" "}
                media@essayscoring.org
              </NavLink>
            </span>
            .
          </p>
        </div>

        <div className="w-full policy-div px-[30px] py-[10px] flex flex-col">
          <div className="w-full flex policy-section">
            <div className="w-1/2 p-2 policy-section1 flex justify-center">
              <p className=" p-5 text-[18px] policy-paragraph w-[80%] text-justify">
                At [ITSOLERA], We are fully committed to protecting your privacy
                and maintaining the security of your data. All essays submitted
                to our platform are encrypted and securely processed, ensuring
                that your information is kept safe. Personal data will never be
                shared, sold, or disclosed to any third parties without your
                explicit consent. We strictly adhere to data protection
                regulations and industry standards to safeguard your privacy.
                Our system ensures that your information is handled with the
                utmost confidentiality. We regularly review and update our
                security measures to protect against unauthorized access. Your
                trust is our top priority, and we take every step to ensure the
                safety of your data.
              </p>
            </div>
            <div className="w-1/2 p-2 flex policy-section2 justify-center">
              <img
                className="p-4 w-[80%]"
                src="https://proschool.ai/static/media/Privacy-Policy-image.937ce7a886c63f55be1f.png"
                alt="privacy"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Add CSS keyframes for the animations */}
      <style>
        {`

          @media only screen and (min-width: 320px) and (max-width : 400px){
          
          .policy-h2{
            font-size : 18px !important;
          }

          .policy-p{
           font-size : 12px !important ;
          }

          .policy-paragraph{
            font-size: 12px !important;
            padding-left : 0px;
            padding-right : 0px;
          }

          }

          @media only screen and (min-width: 450px) and (max-width : 990px){
          .policy-paragraph{
            font-size: 14px;
            padding-left : 0px;
            padding-right : 0px;
          }
          
          }


            @media only screen and (min-width: 320px) and (max-width : 450px){
            
            .privacy-section{
               padding : 30px 50px;
            }

            .policy-div{
            padding: 0px;
            
            }

          .policy-paragraph{
            font-size: 14px;
            padding-left : 0px;
            padding-right : 0px;
          }

            .policy-h2{
            font-size : 20px;
          }

          .policy-p{
           font-size : 14px ;
          }

            .policy-section{
              display: flex;
              flex-direction : column ;
              padding: 0px;
            }

            .policy-section1{
              width : 100%;
            }

            .policy-section2{
              width : 100%;
            }
            
            }

            @media only screen and (min-width: 451px) and (max-width : 767px){
            
            .privacy-section{
               padding : 30px 50px;
            }

            .policy-section{
              display: flex;
              flex-direction : column ;
              padding: 0px;
            }

            .policy-section1{
              width : 100%;
            }

            .policy-section2{
              width : 100%;
            }
            
            }
         
       `}
      </style>
    </>
  );
};

export default PrivacyPolicy;
