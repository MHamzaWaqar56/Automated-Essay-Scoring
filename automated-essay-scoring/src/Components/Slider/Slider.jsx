import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./Slider.css";
import sliderImg1 from "../../Images/sliderImg1.jpeg";
import sliderImg2 from "../../Images/sliderImg2.jpeg";
import sliderImg3 from "../../Images/sliderImg3.jpeg";
import sliderImg4 from "../../Images/sliderImg4.jpeg";
import sliderImg5 from "../../Images/sliderImg5.jpeg";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      heading:
        "AI-Driven Automated Essay Scoring: Revolutionizing Education Through Technology",
      paragraph:
        "Explore how AI is transforming traditional essay grading by improving efficiency and objectivity. Highlight success stories where AI-driven systems provided detailed feedback and consistent evaluations, empowering students to improve their writing and educators to save time.",
      backgroundImage: `url(${sliderImg1})`,
    },
    {
      heading: "The Role of Explainable AI in Automated Essay Scoring",
      paragraph:
        "Explainable AI (XAI) in Automated Essay Scoring (AES) promotes transparency by providing clear insights into how scores are derived. This fosters trust and supports fairness, ensuring stakeholders understand and accept AI-driven decisions.",
      backgroundImage: `url(${sliderImg2}) `,
    },
    {
      heading: 'Addressing the "Black Box" Problem in AES',
      paragraph:
        'Automated Essay Scoring systems, powered by AI, often face the "black box" problem, where their internal workings are not easily interpretable. Overcoming this involves making AES models more transparent and explainable, so educators can trust AI-driven assessments and better understand how essay scores are determined.',
      backgroundImage: `url(${sliderImg3}) `,
    },
    {
      heading: "AI in Automated Essay Scoring: Tailoring Feedback to Students",
      paragraph:
        "AI in Automated Essay Scoring (AES) goes beyond just assigning grades. It tailors feedback to individual students by identifying specific areas of improvement and offering insights on strengths, much like how AI personalizes treatments in medicine. This helps students enhance their writing skills and provides targeted guidance for academic growth.",
      backgroundImage: `url(${sliderImg4}) `,
    },
    {
      heading: "From Data to Evaluation: How AI Analyzes Student Essays in AES",
      paragraph:
        "AI in Automated Essay Scoring (AES) analyzes vast amounts of student data, including language patterns, writing quality, and linguistic structure. By processing this data, AI provides objective and efficient scoring, ensuring consistency in grading while offering personalized feedback to students. This mirrors how AI analyzes big data in pharma to identify trends and make predictions.",
      backgroundImage: `url(${sliderImg5}) `,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(slideInterval);
  }, []);

  const current = slides[currentSlide];

  return (
    <div className="slider">
      <button className="slider-btn prev-button" onClick={prevSlide}>
        <IoIosArrowBack />
      </button>
      <div
        className="slide"
        style={{ backgroundImage: current.backgroundImage }}
      >
        <div className="slide-content">
          <h2 className="text-[#2575ed]">{current.heading}</h2>
          <p>{current.paragraph}</p>
        </div>
      </div>
      <button className="slider-btn next-button" onClick={nextSlide}>
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Slider;
