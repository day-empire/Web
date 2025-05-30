import React from "react";
import { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300 py-6 mx-auto max-w-4xl">
      <button
        className="w-full flex justify-between items-center sm:text-lg font-bold text-black cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
        <span className="block align-middle text-xl border text-black w-[32px] h-[32px]">
          {isOpen ? "−" : "+"}
        </span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Who our favourite Pokémon card?",
      answer: "Sudowoodo, because he is a glorious tree.",
    },
    {
      question: "How do I sell my pokemon card?",
      answer:
        "Fill out the form, with some pics and details of the cards you have and we will send you a quote with details on how to proceed from there.",
    },
    {
      question: "When will I receive my order?",
      answer:
        "We post orders everyday, aim to dispatch within 48/h. (Depends on the shipping method paid for) but usually 48/h delivery time from dispatch.",
    },
    { question: "Do you ship worldwide?", answer: "Only in the UK for now." },
    {
      question: "How much does shipping cost?",
      answer: "Free (if on ebay), or 1.10 if on Cardmarket.",
    },
  ];

  return (
    <div className="border-t-1 mx-8 pt-16 lg:pt-0 sm:mx-16 border-gray-200">
      <div
        id="FAQ"
        className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8 lg:pt-32 "
      >
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <h2 className="mx-auto max-w-3xl font-bold font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-black">
            Question and Answers
          </h2>
        </div>
      </div>

      <div className="pt-6 pb-16 lg:pt-16 lg:pb-32">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
