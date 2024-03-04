import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "What's on disney+?",
      answer:
        "Disney+ is the dedicated streaming platform featuring movies and productions from Disney, Pixar, Marvel, Star Wars, National Geographic and more.",
      titleList:
        "Disney+ offers a wide range of benefits within the standard subscription:",
      listItems: [
        "Original productions that you can't see anywhere else, feature films, documentaries, series and shorts.",
        "Unlimited downloads on 10 devices and the ability to create up to 7 different profiles.",
        "4K UHD, Dolby Vision and Dolby Atmos playback on compatible devices at no additional cost.",
        "An easy-to-navigate interface through which parents can create dedicated profiles for children.",
        "Viewing on 4 screens simultaneously.",
      ],
    },
    {
      id: 2,
      question: "What can I watch on disney+?",

      titleList:
        "On Disney+, you can choose from an ever-growing collection of stories:",
      listItems: [
        "Exclusive new original movies and series.",
        "Timeless classic stories and recent hits from Walt Disney Animation Studios.",
        "An ever-growing collection of entertainment, including comedies, dramas, crime stories based on true cases and more.",
        "Heartwarming stories for all ages from the creators of Pixar.",
        "The entire Star Wars saga and most titles in the Marvel Cinematic Universe.",
        "National Geographic documentaries, unscripted series and more.",
      ],
    },
    {
      id: 3,
      question: "How much does Disney+ cost?",
      answer:
        "Disney+ subscription costs 36.99 lei a month or 369.90 lei a year.",
    },
    {
      id: 4,
      question: "What devices are supported",
      answer:
        "Disney+ supports mobile devices, web browsers, game consoles, set-top boxes, and smart TVs.",
    },
    {
      id: 5,
      question: "Is there any commitment when signing for Disney+",
      titleList:
        "Your subscription to the Disney+ Service includes enrolment into an ongoing payment plan, you can cancel at anytime, effective at the end of your current billing period. Just follow the below 5 easy steps:",
      listItems: [
        "Go to www.disneyplus.com and log in",
        "Select your Profile",
        "Select Account",
        "Select Cancel Subscription",
        "Select Complete Cancellation to confirm",
      ],
    },
  ];

  const [accordionState, setAccordionState] = useState(
    faqData.map(() => false)
  );

  const toggleAccordion = (index) => {
    setAccordionState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <div className="w-full flex items-center flex-col justify-center gap-10 lg:gap-20 my-10 lg:my-40">
      <h1 className="text-white font-bold text-3xl lg:text-4xl text-center">
        Frequently Asked Questions
      </h1>
      <div className="flex items-center flex-col justify-center w-full gap-4">
        {faqData.map((item, index) => (
          <div
            key={item.id}
            className="w-[80%] bg-gray-950 text-white p-6 flex flex-col gap-6"
          >
            <div
              className=" flex  justify-between items-centerw-full cursor-pointer text-xl lg:text-2xl "
              onClick={() => toggleAccordion(index)}
            >
              {" "}
              {item.question} {accordionState[index] ? <FaMinus /> : <FaPlus />}
            </div>
            {accordionState[index] ? (
              <>
                <div className="text-gray-400 text-lg">{item.answer}</div>
                <h1 className="text-gray-400 text-lg">{item.titleList}</h1>
                <ul className="text-gray-400 flex flex-col gap-6 text-base list-disc pl-6">
                  {item.listItems.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              </>
            ) : (
              " "
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
