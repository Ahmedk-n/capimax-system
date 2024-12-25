"use client";
import faq_data from "@/data/FaqData";
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
            question: "What is the role of Capimax as a company?",
            answer:
               "Capimax operates as a diversified investment company, managing and running investments in various fields. It allows investors to invest in these activities through small shares without bearing the burdens of management, risks, setup, taxes, or fees. The company takes on these responsibilities, and the investor only needs to subscribe, monitor their investments online, and withdraw returns until the contract ends, at which point they can withdraw their initial investment amount.",
            showAnswer: true,
         },
         {
            id: 2,
            question: "What are the benefits and profits?",
            answer:
               "The profits are high and rewarding compared to having no risks. Additionally, profits exceed those in other fields. Benefits include: high returns, low risks, easy entry into investments, easy exit, investment secured by insurance, smooth fund withdrawal without fees, and diverse investment opportunities.",
            showAnswer: false,
         },
         {
            id: 3,
            question: "What is the difference between real estate investment and buying real estate?",
            answer:
               "Investing with Capimax in real estate offers net profit annually without management burdens, commissions, or fees. It requires a budget suitable for any investor, does not demand huge sums, and is secured. In contrast, direct real estate ownership involves high costs, registration fees, annual maintenance, sales commissions, and market fluctuations.",
            showAnswer: false,
         },
         {
            id: 4,
            question: "What is the difference between investing in gold opportunities and purchasing physical gold?",
            answer:
               "Gold investment opportunities provide high net profit, are secured, and are free of storage concerns, fees, or market fluctuations. On the other hand, physical gold involves market volatility, storage needs, additional fees, and manufacturing costs.",
            showAnswer: false,
         },
         {
            id: 5,
            question: "What distinguishes investment opportunities from certificates?",
            answer:
               "Capimax investment opportunities provide high net profits without fees, allowing you to withdraw without penalties and still collect profits until the withdrawal date. In contrast, certificates often have withdrawal fees, forfeited profits, and lack high returns or capital growth.",
            showAnswer: false,
         },
         {
            id: 6,
            question: "What are the types of contracts available?",
            answer:
               "Open contracts allow investors to withdraw or transfer investments at any time without fees, receiving profits earned until the withdrawal date. Closed contracts require investors to commit until the end of the term but allow for selling or transferring the investment to another party, maintaining all contract conditions.",
            showAnswer: false,
         },
         {
            id: 7,
            question: "What factors influence the choice of investment opportunities?",
            answer:
               "The choice depends on several factors, including the type of investment, risk level, duration, contract type, and investor needs.",
            showAnswer: false,
         },
         {
            id: 8,
            question: "Is investment available in all countries?",
            answer:
               "Yes, investment opportunities are available globally.",
            showAnswer: false,
         },
         {
            id: 9,
            question: "Can individuals and companies invest?",
            answer:
               "Yes, investment is available for both individuals and companies.",
            showAnswer: false,
         },
         {
            id: 10,
            question: "What should I do if I want to sell?",
            answer:
               "Submit a request from your profile to sell to another party or back to the company. If selling to another party, their details must be provided. The process is typically completed within 24 hours.",
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