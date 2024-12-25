"use client"
import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react";

import featuresImg_1 from "@/assets/img/images/features_two_img01.png";
import featuresImg_2 from "@/assets/img/images/features_two_img02.png";
import featuresImg_3 from "@/assets/img/images/features_two_img03.png";

import featuresTitleImg_1 from "@/assets/img/images/title_img01.jpg";
import featuresTitleImg_2 from "@/assets/img/images/title_img02.jpg";

import featuresShape_1 from "@/assets/img/images/features_shape01.png";
import featuresShape_2 from "@/assets/img/images/features_shape02.png";

interface DataType {
   id: number;
   title: string;
   img: StaticImageData;
}

const feature_data: DataType[] = [
   {
      id: 1,
      title: "Lifetime free and transaction",
      img: featuresImg_1
   },
   {
      id: 2,
      title: "Security & Control over money",
      img: featuresImg_2
   },
   {
      id: 3,
      title: "Mobile Payment Make Easy",
      img: featuresImg_3
   }
]

const FeatureTwo = () => {
   const [isActive, setIsActive] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         const element = document.querySelector('.features-area-two');
         if (element) {
            const rect = element.getBoundingClientRect();
            setIsActive(rect.top < window.innerHeight - 100);
         }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Check initial position
      
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <section 
         className="features-area-two features-bg" 
         style={{ 
            backgroundImage: `url(/assets/img/bg/features_bg.png)`,
            transition: 'all 0.5s ease-out',
            opacity: isActive ? 1 : 0,
            transform: `translateY(${isActive ? '0px' : '20px'})`
         }}
      >
         <div className="container">
            <div className="features-inner-wrap">
               <div className="features-item-wrap">
                  <div className="row justify-content-center">
                     {feature_data.map((item, index) => (
                        <div 
                           key={item.id} 
                           className="col-lg-4 col-md-6"
                           style={{
                              transition: `all 0.5s ease-out ${0.4 + index * 0.15}s`,
                              opacity: isActive ? 1 : 0,
                              transform: `translateY(${isActive ? '0px' : '30px'})`,
                           }}
                        >
                           <div 
                              className="features-item-two"
                              style={{
                                 transition: 'transform 0.3s ease-in-out',
                                 cursor: 'pointer'
                              }}
                              onMouseEnter={(e) => {
                                 e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                              }}
                              onMouseLeave={(e) => {
                                 e.currentTarget.style.transform = 'translateY(0) scale(1)';
                              }}
                           >
                              <div className="features-img-two">
                                 <Image src={item.img} alt="" />
                              </div>
                              <div className="features-content-two">
                                 <h2 className="title">{item.title}</h2>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div 
                  className="row"
                  style={{
                     transition: 'all 0.5s ease-out 0.9s',
                     opacity: isActive ? 1 : 0,
                     transform: `translateY(${isActive ? '0px' : '20px'})`
                  }}
               >
                  <div className="col-lg-12">
                     <div className="section-title section-title-two text-center">
                        <h2 className="title">The World&apos;s 1st ICO Platform That Offers Rewards
                           <Image src={featuresTitleImg_1} alt="" />
                           is a groundbreaking platform that revolutionizes the way
                           <Image src={featuresTitleImg_2} alt="" />
                           Initial Coin Offerings are conducted</h2>
                     </div>
                  </div>
               </div>
               <div className="features-line-shape"></div>
            </div>
         </div>
         <div className="features-shape-wrap">
            <Image src={featuresShape_1} alt="" className="alltuchtopdown" />
            <Image src={featuresShape_2} alt="" className="leftToRight" />
         </div>
      </section>
   )
}

export default FeatureTwo
