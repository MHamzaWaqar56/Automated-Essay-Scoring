import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import backgroundImage from "../Images/img 1.jpeg";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const EssayScoring = () => {
  const [smiles, setSmiles] = useState("");
  const [targetSequence, setTargetSequence] = useState("");
  const [mechanism, setMechanism] = useState("");
  const [actionType, setActionType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setSmiles("");
    setTargetSequence("");
    setMechanism("");
    setActionType("");
  };

  return (
    <>
      <Navbar />

      <div
        className="w-full"
        style={{
          background: `url(${backgroundImage}) no-repeat center center fixed`,
          width: "100%",
          height: "400px",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          position: "relative",
        }}
      >
        <div
          className="flex drug-discovery w-full flex-col px-[290px] justify-center"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        >
          <h2
            className="text-[#2575ed] drug-h2 text-left mb-[20px] font-[700] text-[22px]"
            style={{
              animation: "slideInLeft 2s ease-out forwards",
            }}
          >
            Predictive insights and advanced intelligence for essay evaluation
          </h2>
          <p
            className="text-white drug-p text-[20px] text-left"
            style={{
              animation: "slideInRight 2s ease-out forwards",
            }}
          >
            Predictive insights and advanced intelligence in essay scoring
            leverage sophisticated AI models to evaluate written work
            efficiently and accurately. By analyzing large datasets of written
            text, these technologies offer precise, actionable feedback that
            helps improve writing skills and ensures consistent, objective
            grading.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col pt-[40px] pb-[30px]">
        <div className="w-full">
          <h2 className="text-[25px] font-[700] pb-[30px]">
            AI Prediction For Drugs Discovery
          </h2>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-1/2 drug-form bg-[#e0e3e7] rounded-md">
            <br /> <br />
            <input
              type="text"
              value={smiles}
              onChange={(e) => setSmiles(e.target.value)}
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="Smiles"
            />
            <br /> <br />
            <input
              type="text"
              value={targetSequence}
              onChange={(e) => setTargetSequence(e.target.value)}
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="Target Sequence"
            />
            <br /> <br />
            <input
              type="text"
              value={mechanism}
              onChange={(e) => setMechanism(e.target.value)}
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="Mechanism of Action"
            />
            <br /> <br />
            <input
              type="text"
              value={actionType}
              onChange={(e) => setActionType(e.target.value)}
              className="w-[80%] border-black border-[1px] focus:outline-none focus:border-[#e0e3e7] py-2 px-4"
              placeholder="Action Type"
            />
            <br /> <br />
            <button
              className="px-[10px] py-[5px] text-[20px] font-[600] border-[1px] border-black hover:bg-[#2575ed] hover:text-white hover:border-[#2575ed] "
              onClick={handleSubmit}
            >
              Submit
            </button>
            <br />
            <p className="text-right pr-[10px] pb-[10px] hover:text-[#2575ed]">
              <NavLink to="/">Back to Home</NavLink>
            </p>
          </div>
        </div>
      </div>

      <Footer />

      {/* Add CSS keyframes for the animations */}
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }


          @media only screen and (min-width: 320px) and (max-width : 450px){
          .drug-discovery{
            padding: 50px;
          }

          .drug-h2{
            font-size : 18px

          }

          .drug-h2:hover{
            color : white;

          }


          .drug-p{
            display: none;
          }

          .drug-form{
           width: 80%; 
          }

        }

         @media only screen and (min-width: 451px) and (max-width : 767px){
          .drug-discovery{
            padding: 50px 100px ;
          }

          .drug-h2{
            font-size : 20px
          }

        .drug-form{
           width: 80%; 
          }

         .drug-p{
            display: none;
            
          }

        }

         @media only screen and (min-width: 768px) and (max-width : 1024px){
          .drug-discovery{
            padding: 50px 100px ;
          }

        }



        `}
      </style>
    </>
  );
};

export default EssayScoring;
