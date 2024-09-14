import { useState, useEffect } from "react";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import automated from "../Images/automated essay scoring.jpg";
import cardimg1 from "../Images/img 1.jpeg";
import cardimg2 from "../Images/img 2.png";
import cardimg3 from "../Images/grading img 3.jpg";
import cardimg4 from "../Images/card img 4.jpeg";
import { Typewriter } from "react-simple-typewriter";
import HomeNavbar from "../Components/HomeNavbar";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider/Slider";

function Home() {
  const [text, setText] = useState("");
  const [words, setWords] = useState(["Hello", "World", "React", "Typewriter"]);
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [transform, setTransform] = useState("translate(0px, 0px)");
  const handleMouseMove = (e) => {
    console.log("running");
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const distanceThreshold = 2000; // Adjust this value as needed
    console.log(mouseX);
    // Get the center coordinates of the div
    const div = document.getElementById("movingDiv");
    const divRect = div.getBoundingClientRect();
    const divCenterX = divRect.left + divRect.width / 2;
    const divCenterY = divRect.top + divRect.height / 2;

    // Calculate the distance between the mouse and the center of the div
    const distance = Math.sqrt(
      Math.pow(mouseX - divCenterX, 2) + Math.pow(mouseY - divCenterY, 2)
    );

    // If mouse is within the distance threshold, calculate movement and update state
    if (distance < distanceThreshold) {
      const moveX = ((mouseX - divCenterX) / distanceThreshold) * 150;
      const moveY = ((mouseY - divCenterY) / distanceThreshold) * 150;
      console.log(moveX);
      console.log(moveY);
      setTransform(`translate(${moveX}px, ${moveY}px)`);
    } else {
      setTransform("translate(0px, 0px)");
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setShowText(false); // Hide text
      setTimeout(() => {
        setText(words[index]); // Show text
        setIndex((index + 1) % words.length); // Move to next word
        setShowText(true);
      }, 500); // Delay before showing text again
    }, 2000); // Interval between words

    return () => clearInterval(interval);
  }, [index, words]);
  return (
    <>
      <div className="bg-white select-none">
        <div
          className="topper min-h-screen bg-cover bg-top"
          style={{
            backgroundImage:
              'url("https://cdn.shopify.com/s/files/1/0805/7844/5628/files/Image-generated-using-Jasper-Art.webp")',
          }}
        >
          <div className="hero-section w-full h-full bg-[rgba(30,64,175,0.4)] ">
            <HomeNavbar />
            <hr className="border-t-1 border-white" />
            <div className="text-center">
              <h1 className="type-writer text-white lg:text-[48px] text-[40px] font-[700] xl:w-[80%] w-[90%] 2xl:w-[60%] mx-auto pt-32  text-center">
                Welcome to the Automated Essay Scoring <br />
                Characterized with <br className="md:hidden" />
                <span className="type-words text-[#00CBFF] text-[48px] font-[700]">
                  <Typewriter
                    words={[
                      " Machine Learning",
                      " Natural Language Processing",
                      " Objective Grading",
                      " Linguistic Analysis",
                      " Automated Feedback",
                    ]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>
              <p className="precision-text text-white text-lg sm:text-xl lg:text-2xl font-normal mt-5">
                Enhancing Objectivity in Essay Evaluation with AI!
              </p>

              <div className="w-full sm:w-3/4 lg:w-1/2 mx-auto mt-10 btn-div">
                <button className="started-btn w-full sm:w-[150px] font-medium border px-6 py-3 text-white bg-[#00CBFF] border-[#00CBFF] rounded-md">
                  <NavLink to="/essayscoring">Get Started </NavLink>
                </button>
              </div>
              <div className="flex items-center justify-center mt-10 pb-14 text-white explore-div">
                <p className="explore-text text-lg sm:text-xl font-normal">
                  Explore our more useful thoughts
                </p>
                <div className="heart-icon flex items-center">
                  <IoMdHeart className=" text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* How it works */}

        <section className="work-section mt-20">
          {/* HOW IT WORKS */}
          <h1 className="work-h1 text-[36px] font-[700] text-center mt-20 mb-[20px]">
            How it works?
          </h1>

          <div className="imgs-div w-full flex pb-[30px]">
            <div
              className="img-div1 w-[33%] flex justify-center flex-col flex-wrap content-center"
              style={{
                animation: "slideInLeft 2s ease-out forwards",
              }}
            >
              <img
                className="w-1/2"
                src="https://mlo1gfdw4hud.i.optimole.com/w:auto/h:auto/q:mauto/https://dndi.org/wp-content/uploads/2020/02/DNDi-Homepage-Innovate-2020.svg"
                alt="img"
              />
              <h3 className="font-[700] text-[20px] pt-[10px]">
                We innovate to save lives
              </h3>
            </div>
            <div
              className="img-div1 w-[33%] flex justify-center flex-col flex-wrap content-center"
              style={{
                animation: "slideInTop 2s ease-out forwards",
              }}
            >
              <img
                className="w-1/2 img-div2-special"
                src="https://mlo1gfdw4hud.i.optimole.com/w:auto/h:auto/q:mauto/https://dndi.org/wp-content/uploads/2020/01/DNDi-Homepage-Network-2021.svg"
                alt="img"
              />
              <h3 className="font-[700] text-[20px] pt-[10px]">
                We foster sustainable solutions
              </h3>
            </div>
            <div
              className="w-[33%] img-div1 flex justify-center flex-col flex-wrap content-center"
              style={{
                animation: "slideInRight 2s ease-out forwards",
              }}
            >
              <img
                className="w-1/2"
                src="https://mlo1gfdw4hud.i.optimole.com/w:auto/h:auto/q:mauto/https://dndi.org/wp-content/uploads/2020/02/DNDi-Homepage-Advocate-2020.svg"
                alt="img"
              />
              <h3 className="font-[700] text-[20px] pt-[10px]">
                We advocate for change
              </h3>
            </div>
          </div>
        </section>

        {/* BEST INTERNSHIPS FOR YOU */}
        <section className="py-[50px]">
          <div className="2xl:w-[75%] xl:w-[85%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10 mt-10">
            {/* card 1 */}
            <div className=" intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div
                className="relative text-white bg-center bg-cover bg-[#385bce] px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl before:content-[''] before:bg-[#3275DB] before:absolute before:inset-0 before:opacity-70 before:rounded-tl-xl before:rounded-tr-xl"
                style={{
                  backgroundImage: `url('https://nancyebailey.com/wp-content/uploads/2014/09/ba-ay602_previe_g_20120428004636.jpg')`,
                }}
              >
                <p className="pb-[100px] pt-[100px]"></p>
              </div>
              <div className="px-7 pt-10 pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-2">
                      <GiArtificialIntelligence className="text-[#042d89] text-[25px]" />
                    </div>
                  </div>
                  <h1 className="font-[700]">Automated Essay Scoring</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <p className="card-data">
                      AES uses machine learning and natural language processing
                      (NLP) to automatically evaluate essays, aiming for
                      consistent, efficient, and human-like scoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 2 */}

            <div className=" intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div
                className="relative text-white bg-center bg-cover bg-[#385bce] px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl before:content-[''] before:bg-[#3275DB] before:absolute before:inset-0 before:opacity-70 before:rounded-tl-xl before:rounded-tr-xl"
                style={{
                  backgroundImage: `url('https://www.the74million.org/wp-content/uploads/2023/09/ai-writing-class-825x495.jpg')`,
                }}
              >
                <p className="pb-[100px] pt-[100px]"></p>
              </div>
              <div className="px-7 pt-10 pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-2">
                      <GiArtificialIntelligence className="text-[#042d89] text-[25px]" />
                    </div>
                  </div>
                  <h1 className="font-[700]">Machine Learning</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <p className="card-data">
                      AES systems train on large datasets of graded essays,
                      learning patterns to ensure objective, accurate scoring
                      predictions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card-3 */}
            <div className=" intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div
                className="relative text-white bg-center bg-cover bg-[#385bce] px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl before:content-[''] before:bg-[#3275DB] before:absolute before:inset-0 before:opacity-70 before:rounded-tl-xl before:rounded-tr-xl"
                style={{
                  backgroundImage: `url(${cardimg4}) `,
                }}
              >
                <p className="pb-[100px] pt-[100px]"></p>
              </div>
              <div className="px-7 pt-10 pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-2">
                      <GiArtificialIntelligence className="text-[#042d89] text-[25px]" />
                    </div>
                  </div>
                  <h1 className="font-[700]">Linguistic Features</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <p className="card-data">
                      AES systems evaluate essays by analyzing grammar, syntax,
                      coherence, structure, and linguistic quality for scoring.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* card -4 */}

            <div className=" intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div
                className="relative text-white bg-center bg-cover bg-[#385bce] px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl before:content-[''] before:bg-[#3275DB] before:absolute before:inset-0 before:opacity-70 before:rounded-tl-xl before:rounded-tr-xl"
                style={{
                  backgroundImage: `url(${cardimg1}) `,
                }}
              >
                <p className="pb-[100px] pt-[100px]"></p>
              </div>
              <div className="px-7 pt-10 pb-10 ">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-2">
                      <GiArtificialIntelligence className="text-[#042d89]  text-[25px]" />
                    </div>
                  </div>
                  <h1 className="font-[700]">Objective Scoring</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <p className="card-data">
                      AES provides consistent, bias-free evaluations,
                      eliminating subjectivity commonly found in traditional
                      human grading methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 5 */}

            <div className=" intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div
                className="relative text-white bg-center bg-cover bg-[#385bce] px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl before:content-[''] before:bg-[#3275DB] before:absolute before:inset-0 before:opacity-70 before:rounded-tl-xl before:rounded-tr-xl"
                style={{
                  backgroundImage: `url(${cardimg2}) `,
                }}
              >
                <p className="pb-[100px] pt-[100px]"></p>
              </div>
              <div className="px-7 pt-10 pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-2">
                      <GiArtificialIntelligence className="text-[#042d89] text-[25px]" />
                    </div>
                  </div>
                  <h1 className="font-[700]">Constructive Feedback</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <p className="card-data">
                      Advanced AES systems provide detailed feedback, guiding
                      students in improving strengths and addressing weaknesses.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* card 6*/}

            <div className=" intern-card shadow-lg rounded-bl-xl rounded-br-xl transition-transform duration-300 transform  hover:scale-105">
              <div
                className="relative text-white bg-center bg-cover bg-[#385bce] px-5 pt-5 pb-3 rounded-tl-xl rounded-tr-xl before:content-[''] before:bg-[#3275DB] before:absolute before:inset-0 before:opacity-70 before:rounded-tl-xl before:rounded-tr-xl"
                style={{
                  backgroundImage: `url(${cardimg3}) `,
                }}
              >
                <p className="pb-[100px] pt-[100px]"></p>
              </div>
              <div className="px-7 pt-10 pb-10">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-3">
                    <div className="bg-[#e8f1ff] rounded-full p-2">
                      <GiArtificialIntelligence className="text-[#042d89] text-[25px]" />
                    </div>
                  </div>
                  <h1 className="font-[700]">Grading Efficiency</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <p className="card-data">
                      Automated grading by AES reduces evaluation time, allowing
                      educators to focus more on teaching.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Slider */}

        <Slider />

        {/* LEARNING */}
        <section
          onMouseMove={(e) => handleMouseMove(e)}
          className="sm:mt-15 my-20 relative "
          id="movingDiv"
        >
          <div className="revolution-div w-[90%] lg:w-[85%] xl:w-[80%] 2xl:w-[75%] mx-auto flex gap-10 justify-center lg:justify-between ">
            <div className=" flex flex-wrap content-center">
              <div
                className=" sm:flex justify-center hidden  moving-div"
                style={{ transform }}
              >
                <div className="bg-[#385bce] w-[260px] h-[200px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[260px] 2xl:w-[500px] 2xl:h-[500px]  relative ">
                  <img
                    className="absolute top-[5rem] left-[2.25rem] w-[100%] "
                    src={automated}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="w-[80%] sm:w-[40%] sm:justify-self-end">
              <h1 className="revolution-h1 text-[#273044] text-center text-[35px] sm:text-[25px] md:text-[35px] xl:text-[36px] 2xl:text-[46px] font-[700] ">
                Revolutionizing{" "}
                <span className="text-[#2575ed]">Essay Scoring</span> with AI
                and Explainable Models
              </h1>
              <p className="text-[#273044] md:text-[12px] xl:text-[16px] font-[400] leading-loose mt-5 hidden md:block">
                Artificial Intelligence (AI) is revolutionizing essay scoring by
                quickly and accurately evaluating written work and providing
                comprehensive assessments. Explainable AI (XAI) further enhances
                this process by offering transparent insights into the grading
                criteria, building trust in the evaluation system, and ensuring
                fairness in scoring.
              </p>

              <div className="mt-7 flex gap-5 sm:gap-2 md:gap-5 justify-center">
                <img
                  className="cursor-pointer w-[50%] sm:w-[100px] md:w-full "
                  src="https://ezitech.org/wp-content/uploads/2022/11/appstore-copy.webp"
                  alt=""
                />
                <img
                  className="cursor-pointer w-[50%] sm:w-[100px] md:w-full"
                  src="https://stylemixthemes.com/masterstudy/tech/wp-content/uploads/sites/21/2021/02/%D0%98%D0%B7%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_22.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}

        <Footer />
      </div>

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


          @keyframes slideInTop {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media only screen and (min-width: 320px) and (max-width : 364px){
   .type-writer{
     font-size: 15px;
     margin-top : 30px;
     margin-left: 0px;
     margin-right: 0px;
     width: 100%; 
  }
}


@media only screen and (min-width: 320px) and (max-width : 450px){
  .started-btn{
     width : 150px;
  }

  .card-data{
     text-align : justify;
     font-size : 15px;
  }

  .btn-div{
    margin-top : 10px;
  }

  .topper{
     min-height : 0;
  }

  .hero-section{
     padding: 0px;
  }

  .type-writer{
     font-size: 15px;
     margin-top : 30px;
  }

  .type-words{
     font-size : 15px;
  }

  .precision-text{
    font-size : 15px;
  }

   .explore-text{
    font-size : 15px;
    margin-bottom : 30px;
  }

  .explore-div{
  margin-top : 10px;
     
  }

  .heart-icon{
    display: none;
  }

  .work-section{
    margin-top: 15px; 
  }

  .work-h1{
    margin-top: 15px; 
  }

  .imgs-div{
    display: flex;
    flex-direction: column;
    align-content: center;
    flex-wrap: wrap; 
  }

  .img-div1{
    width : 100%;
    padding : 20px;
    display: flex;
    align-items : center; 
  }

  .img-div2-special{
   padding-left: 20px;
  }

  .revolution-h1{
     font-size : 22px;
     text-align: justify;
  }

  .revolution-div{
    gap : 0;
  }




}

@media only screen and (min-width: 451px) and (max-width : 650px){
  .started-btn{
     width : 150px
  }

  .hero-section{
     padding: 0px;
  }

  .type-writer{
     font-size: 18px;
  }

  .type-words{
     font-size : 18px;
  }

  .precision-text {
    font-size : 18px;
  }

}



        `}
      </style>
    </>
  );
}

export default Home;
