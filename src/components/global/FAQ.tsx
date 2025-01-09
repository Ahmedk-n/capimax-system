"use client";
import { useEffect, useState } from "react";

interface faqItem {
   id: number;
   question: string;
   answer: string;
   showAnswer: boolean;
}

const FAQ = () => {
   const [faqData, setFaqData] = useState<faqItem[]>([]);

   useEffect(() => {
      const initialFaqData: faqItem[] = [
         {
            id: 1,
            question: "What is Capimax Global Group?",
            answer:
               "Capimax Global Group owns a number of companies, some directly under its name, and others as subsidiaries, where it owns 100% of the shares or participates in them. Capimax operates over 14 companies involved in 72 different activities, licensed in 7 countries across 4 continents. Capimax has companies in the USA, UK, UAE, and Egypt.",
            showAnswer: true,
         },
         {
            id: 2,
            question: "What are Capimax&apos;s activities in the UK?",
            answer:
               "Capimax owns 7 licensed companies in the UK that engage in over 28 different activities, including public investments, wealth management, financial market management, real estate, and investment in precious metals and development.",
            showAnswer: false,
         },
         {
            id: 3,
            question: "What does Capimax own in the USA?",
            answer:
               "Capimax owns two licensed companies in the USA involved in public investment, portfolio management, and general trading activities.",
            showAnswer: false,
         },
         {
            id: 4,
            question: "What are Capimax&apos;s operations in the UAE?",
            answer:
               "Capimax owns 5 licensed companies in the UAE involved in diverse activities, including investment management, contracting, and facilities management.",
            showAnswer: false,
         },
         {
            id: 5,
            question: "What are the companies Capimax owns in Egypt?",
            answer:
               "Capimax owns two licensed companies in Egypt: one in engineering and contracting, and another in the process of establishing real estate and financial investment licenses.",
            showAnswer: false,
         },
         {
            id: 6,
            question: "What is Capimax&apos;s vision for the future?",
            answer:
               "Capimax aims to successfully expand its investments through its owned or affiliated companies, adding profits for shareholders, clients, and customers. The group works towards modernization and development, keeping pace with global advancements to offer solutions that match scientific progress and rapid investment growth.",
            showAnswer: false,
         },
      ];
      setFaqData(initialFaqData);
   }, []);

   const toggleAnswer = (index: number) => {
      setFaqData((prevFaqData) =>
         prevFaqData.map((faq, i) => ({
            ...faq,
            showAnswer: i === index ? !faq.showAnswer : false,
         }))
      );
   };

   return (
      <section className="faq-area">
         <div className="container">
            <div className="faq-inner-wrap">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="section-title text-center mb-70">
                        <h2 className="title">Ask Quick Question</h2>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="faq-wrap">
                        <div className="accordion" id="accordionExample">
                           {faqData.map((item, index) => (
                              <div
                                 key={index}
                                 className={`accordion-item ${item.showAnswer ? "active" : ""}`}
                              >
                                 <h2 className="accordion-header">
                                    <button
                                       className={`accordion-button ${
                                          item.showAnswer ? "" : "collapsed"
                                       }`}
                                       onClick={() => toggleAnswer(index)}
                                       type="button"
                                    >
                                       {item.question}
                                    </button>
                                 </h2>
                                 <div className={`accordion-collapse ${item.showAnswer ? "show" : ""}`}
                                      style={{
                                         transition: 'height 0.8s ease-in-out, opacity 0.8s ease-in-out',
                                         height: item.showAnswer ? 'auto' : '0',
                                         opacity: item.showAnswer ? 1 : 0,
                                         overflow: 'hidden'
                                      }}>
                                    <div className="accordion-body">
                                       <p>{item.answer}</p>
                                    </div>
                                 </div>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default FAQ;