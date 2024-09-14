import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Slider from "../Components/Slider/Slider";

const About = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <div
        style={{
          animation: "slideInTop 2s ease-out forwards",
        }}
      >
        <h3 className="text-[36px] font-[700] pt-[20px]">Our Mission</h3>

        <p className="text-[16px] pb-[10px] about-epsilon">
          ML Team Epsilon Dedicated to develop Automated Essay Scoring
        </p>
      </div>
      <div className="w-full flex">
        <div
          className="w-1/2 about-para p-2 flex justify-center"
          style={{
            animation: "slideInLeft 2s ease-out forwards",
          }}
        >
          <p className=" p-5 w-[80%] text-[18px] text-justify epsilon-text">
            At <b>Automated Essay Scoring(AES)</b>, we are transforming essay
            grading through advanced machine learning and NLP techniques. Our
            system ensures consistent, objective, and efficient evaluations,
            reducing human bias. By analyzing grammar, syntax, and coherence, we
            provide scores comparable to human graders. In addition to grading,
            our platform offers detailed feedback to help students improve their
            writing skills. We aim to empower students by promoting fairness and
            transparency in the assessment process.
          </p>
        </div>
        <div
          className="about-img w-1/2 p-2 flex justify-center"
          style={{
            animation: "slideInRight 2s ease-out forwards",
          }}
        >
          <img
            className="p-4 w-[80%]"
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*XtlmUtDHkQItojjcfxLCcg.jpeg"
            alt="about"
          />
        </div>
      </div>
      <Footer />

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


@media only screen and (min-width: 320px) and (max-width : 450px){

.about-epsilon{
  font-size : 10px !important;
}

.epsilon-text{
  font-size : 12px !important;
}

}


@media only screen and (min-width: 320px) and (max-width : 850px){

.about-img{
display: none;
}

.about-epsilon{
  font-size : 12px;
}

.epsilon-text{
  font-size : 14px;
}

.about-para{
width: 100%;
}

}

@media only screen and (min-width: 851px) and (max-width : 990px){

 .epsilon-text{
  font-size : 14px;
 }

}

        `}
      </style>
    </>
  );
};

export default About;
