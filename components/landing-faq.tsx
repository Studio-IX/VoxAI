"use client";

import Image from "next/image";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";

// Define types for your component's state
type FaqState = null | number;

export const LandingFaq: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<FaqState>(null);

  const handleQuestionClick = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const isQuestionOpen = (index: number) => {
    return openQuestion === index;
  };

  const getIconSrc = (index: number) => {
    return isQuestionOpen(index) ? "/chevron_up.svg" : "/chevron_down.svg"; // Define 'minus' and 'plus' variables
  };

  return (
    <div
      id="faq"
      className="w-full flex flex-col items-center pt-40 md:py-20 px-5 md:px-0 bg-bg"
    >
      <div>
        <p className="section_headers">FAQ</p>
        <h2 className="section_titles mt-5">Frequently Asked Questions</h2>
      </div>

      <div className="flex flex-col justify-center w-full md:w-[700px] space-y-4 mt-20">
        <div
          className={`bg-[#19192A] border border-[#30305D] rounded-[1.4rem] py-4 ${
            isQuestionOpen(0) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(0)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              What is VOX AI, and what does it offer?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(0)}
              alt="Expand"
              className={`icon ${isQuestionOpen(0) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(0) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[16px] md:text-md mt-2 w-full md:w-[620px]">
                VOX AI is an all-in-one AI SaaS tool that offers a wide range of
                creative and productivity features. It includes capabilities for
                image generation, conversation generation, video generation,
                music generation, and code generation. It harnesses the power of
                artificial intelligence to assist users in various creative and
                professional tasks.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#19192A] border border-[#30305D] rounded-[1.4rem] py-4 ${
            isQuestionOpen(1) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(1)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              How does VOX AI generate images?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(1)}
              alt="Expand"
              className={`icon ${isQuestionOpen(1) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(1) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[16px] md:text-md mt-2 w-full md:w-[620px]">
                VOX AI uses advanced neural networks to generate images based on
                user input or preferences. You can describe the image you want,
                and VOX AI will use its deep learning models to create images
                that match your description. You can also fine-tune generated
                images to your liking.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#19192A] border border-[#30305D] rounded-[1.4rem] py-4 ${
            isQuestionOpen(2) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(2)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              Can VOX AI generate conversational content?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(2)}
              alt="Expand"
              className={`icon ${isQuestionOpen(2) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(2) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[16px] md:text-md mt-2 w-full md:w-[620px]">
                Yes, VOX AI can generate conversational content, including text
                for chatbots, virtual assistants, or creative dialogue. You can
                provide prompts or topics, and VOX AI will generate contextually
                relevant conversational text.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#19192A] border border-[#30305D] rounded-[1.4rem] py-4 ${
            isQuestionOpen(3) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(3)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              How does VOX AI create videos?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(3)}
              alt="Expand"
              className={`icon ${isQuestionOpen(3) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(3) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[16px] md:text-md mt-2 w-full md:w-[620px]">
                VOX AI utilizes its AI algorithms to generate videos based on
                your specifications. You can provide video scripts, scenes, or
                themes, and VOX AI will create video content, including
                animations, using its deep learning capabilities.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#19192A] border border-[#30305D] rounded-[1.4rem] py-4 ${
            isQuestionOpen(4) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(4)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              Can VOX AI create music compositions?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(4)}
              alt="Expand"
              className={`icon ${isQuestionOpen(4) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(4) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[16px] md:text-md mt-2 w-full md:w-[620px]">
                Yes, VOX AI can generate music compositions. You can specify the
                genre, mood, and other preferences, and VOX AI will produce
                original music tracks. This feature is ideal for musicians,
                content creators, or anyone in need of background music.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#19192A] border border-[#30305D] rounded-[1.4rem] py-4 ${
            isQuestionOpen(5) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(5)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              How does VOX AI assist with code generation?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(5)}
              alt="Expand"
              className={`icon ${isQuestionOpen(5) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(5) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[16px] md:text-md mt-2 w-full md:w-[620px]">
                VOX AI can help developers by generating code snippets or
                assisting in code completion. Whether you need code for a
                specific task or require help with coding in a particular
                programming language, VOX AI can provide code suggestions and
                support.
              </p>
            </div>
          </CSSTransition>
        </div>

        <div
          className={`bg-[#19192A] border border-[#30305D] rounded-[1.4rem] py-4 ${
            isQuestionOpen(6) ? "active-faq" : ""
          }`}
        >
          <div
            className="flex flex-row justify-between cursor-pointer mx-5"
            onClick={() => handleQuestionClick(6)}
          >
            <h2 className="text-white text-[16px] md:text-[20px] font-dmSans font-medium">
              Is VOX AI suitable for businesses and individuals?
            </h2>
            <Image
              width={20}
              height={20}
              src={getIconSrc(6)}
              alt="Expand"
              className={`icon ${isQuestionOpen(6) ? "rotate" : ""}`}
            />
          </div>
          <CSSTransition
            in={isQuestionOpen(6) || false} // Ensure 'in' is a boolean
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <div className="answer-container mx-5">
              <p className="text-[#9B9CA1] font-dmSans font-normal text-[16px] md:text-md mt-2 w-full md:w-[620px]">
                Yes, VOX AI is suitable for both businesses and individuals.
                Businesses can benefit from its productivity features for
                marketing, content creation, and development. Individuals,
                including content creators, artists, and developers, can use it
                for various creative and professional projects. VOX AI offers
                subscription plans tailored to the needs of different users.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </div>
  );
};
