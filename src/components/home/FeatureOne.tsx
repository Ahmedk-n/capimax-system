"use client"; // Add this line at the top of your file

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import featureImg_1 from "@/assets/img/images/features_img03.png"; // Example image
import featureImg_2 from "@/assets/img/images/features_img02.png";
import featureImg_3 from "@/assets/img/images/features_img04.png";
import featureImg_4 from "@/assets/img/images/features_img01.png";
import featureImg_5 from "@/assets/img/images/features_img05.png"; // Example image
import featureImg_6 from "@/assets/img/images/features_img06.png";
import featureImg_7 from "@/assets/img/images/features_img07.png";
import featureImg_8 from "@/assets/img/images/features_img08.png";
import featureImg_9 from "@/assets/img/images/features_img09.png"; // Example image
import featureImg_10 from "@/assets/img/images/features_img10.png";
import featureImg_11 from "@/assets/img/images/features_img11.png";
import featureImg_12 from "@/assets/img/images/features_img12.png";


interface DataType {
   id: number;
   title: JSX.Element;
   desc: JSX.Element;
   img: StaticImageData;
}

const feature_data: DataType[] = [
   {
      id: 1,
      title: (<>Commercial Investment</>),
      desc: (<>Explore opportunities in commercial investments with global returns.</>),
      img: featureImg_1,
   },
   {
      id: 2,
      title: (<>Silver Investment</>),
      desc: (<>Invest in silver, a commodity with significant potential for growth.</>),
      img: featureImg_2,
   },
   {
      id: 3,
      title: (<>Gold Investment</>),
      desc: (<>Secure your wealth by investing in gold, a timeless asset.</>),
      img: featureImg_3,
   },
   {
      id: 4,
      title: (<>Real Estate Investment</>),
      desc: (<>Unlock the benefits of real estate investments in prime locations.</>),
      img: featureImg_4,
   },
   {
      id: 5,
      title: (<>Acquisitions</>),
      desc: (<>Engage in strategic acquisitions for market expansion and growth.</>),
      img: featureImg_5,
   },
   {
      id: 6,
      title: (<>Deals</>),
      desc: (<>Participate in lucrative deals across industries and sectors.</>),
      img: featureImg_6,
   },
   {
      id: 7,
      title: (<>Stock, Bonds, and Treasury Bills Investment</>),
      desc: (<>Diversify your portfolio with investments in stocks, and bonds..</>),
      img: featureImg_7,
   },
   {
      id: 8,
      title: (<>Metal Investment</>),
      desc: (<>Invest in valuable metals like platinum, copper, and more.</>),
      img: featureImg_8,
   },
   {
      id: 9,
      title: (<>Agricultural Investment</>),
      desc: (<>Explore the growing potential of agricultural investments.</>),
      img: featureImg_9,
   },
   {
      id: 10,
      title: (<>Tourism and Entertainment Investment</>),
      desc: (<>Invest in the booming tourism and entertainment sectors.</>),
      img: featureImg_10,
   },
   {
      id: 11,
      title: (<>Joint Investments</>),
      desc: (<>Partner in joint investments for diversified and shared growth.</>),
      img: featureImg_11,
   },
   {
      id: 12,
      title: (<>Technology and Fintech Investment</>),
      desc: (<>Capitalize on the rapidly growing technology and fintech sectors.</>),
      img: featureImg_12,
   },
];

const FeatureOne = () => {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const scrollPosition = window.scrollY;
         setIsActive(scrollPosition > 100);
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <section 
         id="investment-plans" 
         className="features-area pt-140 pb-110"
         style={{
            transition: 'all 0.5s ease-out',
            opacity: isActive ? 1 : 0,
            transform: `translateY(${isActive ? '0px' : '20px'})`
         }}
      >
         <div className="container">
            <div className="row justify-content-center"
               style={{
                  transition: 'all 0.5s ease-out 0.2s',
                  opacity: isActive ? 1 : 0,
                  transform: `translateY(${isActive ? '0px' : '20px'})`
               }}
            >
               <div className="col-lg-10">
                  <div className="section-title text-center mb-70">
                     <h2 className="title">Dynamic Investment Hub with Diverse Global Opportunities</h2>
                  </div>
               </div>
            </div>
            <div className="row">
               {feature_data.map((item, index) => (
                  <div 
                     key={item.id} 
                     className="col-lg-6"
                     style={{
                        transition: `all 0.5s ease-out ${0.3 + index * 0.1}s`,
                        opacity: isActive ? 1 : 0,
                        transform: `translateY(${isActive ? '0px' : '30px'})`
                     }}
                  >
                     <div 
                        className="features-item"
                        style={{
                           transition: 'transform 0.3s ease-in-out',
                        }}
                        onMouseEnter={(e) => {
                           e.currentTarget.style.transform = 'translateY(-10px)';
                        }}
                        onMouseLeave={(e) => {
                           e.currentTarget.style.transform = 'translateY(0)';
                        }}
                     >
                        <div className="features-content">
                           <h2 className="title"><Link href="https://www.google.com">{item.title}</Link></h2>
                           <p>{item.desc}</p>
                        </div>
                        <div className="features-img">
                           <Image src={item.img} alt="" />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default FeatureOne;