import React, { useState } from "react";
import Heading from "../Shared/Heading";
import Paragraph from "../Shared/Paragraph";
import Button from "../Shared/Button";

const faqs = [
  {
    question: "What is Life Lesson Hub?",
    answer:
      "It is a platform where people share real life experiences and lessons so others can learn and avoid the same mistakes.",
  },
  {
    question: "Is it free to use?",
    answer:
      "You can read and share many lessons for free. Some premium content may require an upgrade, depending on your plan.",
  },
  {
    question: "How do I share my own lesson?",
    answer:
      "After creating an account, go to the “Add Lesson” page, fill in your story details, and submit it for others to read.",
  },
  {
    question: "Can I edit or delete my lessons?",
    answer:
      "Yes, from your dashboard you can update or remove any lesson that you have created.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex mx-auto">
          <Button className="mb-6">FAQ</Button>
        </div>
        {/* Header */}
        <div className="text-center mb-10">
          <Heading >
            Frequently Asked Questions
          </Heading>
          <Paragraph >
            Quick answers to common questions about the platform
          </Paragraph>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border-2 border-black bg-white rounded-xl overflow-hidden"
              style={{ boxShadow: "4px 4px 0px 0px #000" }}
            >
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left px-4 py-4 md:px-6 md:py-5"
              >
                <span className="font-extrabold text-[20px] md:text-[20px] uppercase ">
                  {item.question}
                </span>
                <span className="text-xl md:text-2xl font-black">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 md:px-6 md:pb-5 border-t border-gray-200">
                  <p className="text-[16px] font-medium md:text-base text-[#777]">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
