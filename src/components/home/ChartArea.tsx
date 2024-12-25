"use client"
import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import Image from 'next/image';

import chartImg from "@/assets/img/images/chart_img.png"

const tab_title: string[] = ["Our Presence", "Extra information",];
const chart_List_1: string[] = ["Primary Companies: 3 (USA, UK, UAE)", "Countries of Presence: 7 countries", "Countries of Investors: 18 countries", "Marketing Offices: 14 countries", "Marketing Clients: 12 countries", "Global Reach: 18 countries"]
const chart_List_2: string[] = ["Group Ownership: 100% of Capimax Companies", "Subsidiary Companies: 4 (Capimax General Trading USA, Capimax Developments UK, Capimax Financial Management UK, etc.)", "Affiliate Companies: 6 around the world", "Corporate Investors: 117 companies", "Individual Investors: 6,512 individuals", "Countries Served by Subsidiaries: 7"]
// Countries of Presence: 7 countries , Countries of Investor Interaction: 18 countries , Marketing Offices: 14 countries , Marketing Clients: 12 countries , Global Reach: 18 countries , 
const ChartArea = () => {

   const [activeTab, setActiveTab] = useState(0);

   // Handle tab click event
   const handleTabClick = (index: any) => {
      setActiveTab(index);
   };


   const chartData = [
      [4.17, 9.72, 25, 19.44, 16.67, 25], // Funding Allocation percentages
      [100, 5.56, 8.33, 162.5, 9044, 9.72]  // Token Distribution percentages
   ];

   const data = {
      // labels: ["Contingency", "Business Development", "Investor", "Poland", "Legal & Regulation", "Czech Republic"],
      datasets: [
         {
            label: 'Founding Allocation',
            data: chartData[activeTab],
            backgroundColor: ["#44A08D", "#136F84", "#0B446D", "#033356", "#012641", "#191F28"]
         }
      ],
   };

   return (
      <div id="chart" className="chart-area pt-140">
         <div className="container">
            <div className="chart-inner-wrap">
               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="chart-wrap">
                        <div className="chart">
                           <div id="doughnutChart">
                              {chartData[activeTab] && <Doughnut data={data} />}
                           </div>
                        </div>
                        <div className="chart-tab">
                           <ul className="nav nav-tabs" id="myTab" role="tablist">
                              {tab_title.map((tab, index) => (
                                 <li key={index} className="nav-item">
                                    <button onClick={() => handleTabClick(index)}
                                       className={activeTab === index ? 'nav-link active' : ' nav-link'}>{tab}
                                    </button>
                                 </li>
                              ))}
                           </ul>
                           <div className="tab-content" id="myTabContent">
                              <div className={`tab-pane fade ${activeTab === 0 ? 'show active' : ''}`} id="description">
                                 <div className="chart-list">
                                    <ul className="list-wrap">
                                       {chart_List_1.map((list, index) => (<li key={index}>{list}</li>))}
                                    </ul>
                                 </div>
                              </div>
                              <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="description">
                                 <div className="chart-list">
                                    <ul className="list-wrap">
                                       {chart_List_2.map((list, i) => (<li key={i}>{list}</li>))}
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div className="right-side-content">
                        <Image src={chartImg} alt="" />
                        <p>Capimax offers risk-free, insured investments with <br /> guaranteed returns and global market access.</p>
                        <ul className="list-wrap">
                           <li><span>1</span>Global Expertise: Invest with top financial experts.</li>
                           <li><span>2</span>Worldwide Coverage: Insurance protecting principal and profits.</li>
                           <li><span>3</span>High Returns: Secure and profitable investment opportunities.</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ChartArea
