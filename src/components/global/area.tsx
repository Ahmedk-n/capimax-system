'use client';

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import team_data from "@/data/TeamData";  // Import the team data

// Roadmap data and settings
interface DataTyfe {
   id: number;
   roadmap_title: string;
   title: string;
   desc: JSX.Element;
}

const roadmap_data: DataTyfe[] = [
   {
      id: 1,
      roadmap_title: "Easy Investment Access",
      title: "Quick Investment",
      desc: (<>Investing with Capimax is easy and fast through the website or app, offering a smooth, no-hassle process for investors.</>),
   },
   {
      id: 2,
      roadmap_title: "High Returns",
      title: "Attractive Profits",
      desc: (<>Capimax offers high returns, giving investors excellent profit opportunities with minimal effort required all things we will cover.</>),
   },
   {
      id: 3,
      roadmap_title: "Security and Insurance",
      title: "Guaranteed Security",
      desc: (<>Your investment is secured with insurance, ensuring the protection of both the principal amount and profits according to your plan.</>),
   },
   {
      id: 4,
      roadmap_title: "No Hidden Fees",
      title: "No Extra Charges",
      desc: (<>Investing with Capimax comes with no subscription fees, no hidden charges, and no monthly expenses—clear and transparent.</>),
   },
   {
      id: 5,
      roadmap_title: "Flexible Returns",
      title: "Flexible Payouts",
      desc: (<>Choose from monthly, quarterly, or semi-annual payouts, offering you flexible options to suit your financial goals.</>),
   },
   {
      id: 6,
      roadmap_title: "Quick Withdrawals",
      title: "Fast Fund Withdrawal",
      desc: (<>With Capimax, you can easily withdraw your funds quickly, providing you fast access to your earnings whenever needed.</>),
   },
]

const settings = {
   dots: false,
   infinite: true,
   speed: 1000,
   centerMode: true,
   centerPadding: '260px',
   autoplay: true,
   arrows: false,
   slidesToShow: 3,
   slidesToScroll: 1,
   responsive: [
      {
         breakpoint: 1400,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '100px',
         }
      },
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerPadding: '40px',
         }
      },
      {
         breakpoint: 992,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 767,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            enterPadding: '0',
            centerMode: false,
         }
      },
      {
         breakpoint: 575,
         settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            enterPadding: '0',
            centerMode: false,
         }
      },
   ]
}

import downloadBtnImg_1 from "../../../public/assets/img/images/download_btn01.png";
import downloadBtnImg_2 from "../../../public/assets/img/images/download_btn02.png";
import downloadImg_1 from "../../../public/assets/img/images/download_img01.png";
import downloadImg_2 from "../../../public/assets/img/images/download_img02.png";
import downloadShape_1 from "../../../public/assets/img/images/download_shape01.png";
import downloadShape_2 from "../../../public/assets/img/images/download_shape02.png";
import FAQ from "../home/Faq";
import DownloadArea from "../home/DownloadArea";

const ContactArea = () => {
   return (
      <>
         {/* Our International Licenses Section */}
         <section
            className="team-area team-bg"
            style={{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }}
         >
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title text-center mb-50">
                        <h2 className="title">Our International Licenses</h2>
                        <p className="subtitle">
                           Capimax Investment is licensed to operate and establish investment
                           funds, manage and run operations, and practice all types of
                           investment and commerce. Below are the details of some licenses
                           obtained from the official government websites of the licensing
                           countries.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {team_data.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="license-card">
                           <div className="license-flag">
                              <Image src={item.img} alt={item.title} style={{ width: '80px', height: 'auto' }} />
                           </div>
                           <div className="license-details">
                              <h3 className="country-name" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                              <p style={{ fontSize: '0.9rem' }}>
                                 <strong>Reg No:</strong> XXXXXXX
                              </p>
                              <p style={{ fontSize: '0.9rem' }}>
                                 <strong>Authorized Activities:</strong> Licensed activities
                                 mentioned in the official documents.
                              </p>
                              <div className="learn-more-btn">
                                 <Link href="https://www.example.com" className="btn">
                                    Verify License
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Roadmap / Investment and Insurance Section */}
         <section id="roadMap" className="roadmap-area pt-140">
            <div className="container-fluid p-0">
               <div className="row g-0">
                  <div className="col-lg-12">
                     <div className="section-title text-center mb-70">
                        <h2 className="title">Investment Benefits & Guarantees with Capimax</h2>
                     </div>
                  </div>
               </div>
               <Slider {...settings} className="row roadMap-active">
                  {roadmap_data.map((item) => (
                     <div key={item.id} className="col-lg-4">
                        <div className="roadmap-item">
                           <span className="roadmap-title">{item.roadmap_title}</span>
                           <div className="roadmap-content">
                              <h4 className="title"><span className="dot"></span>{item.title}</h4>
                              <p>{item.desc}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </section>
         <FAQ />
         <DownloadArea />

         <style jsx>{`
            .team-area {
               padding: 50px 0;
               background-size: cover;
               background-position: center;
               color: #fff;
            }

            .section-title {
               margin-bottom: 50px;
            }

            .section-title .title {
               font-size: 2.5rem;
               margin-bottom: 10px;
            }

            .subtitle {
               font-size: 1.1rem;
               line-height: 1.6;
            }

            .license-card {
               background: rgba(255, 255, 255, 0.1);
               border: 1px solid rgba(255, 255, 255, 0.2);
               border-radius: 10px;
               padding: 15px;
               text-align: center;
               transition: transform 0.3s;
            }

            .license-card:hover {
               transform: translateY(-10px);
            }

            .license-flag {
               margin-bottom: 10px;
            }

            .license-flag img {
               max-width: 100%;
               height: auto;
            }

            .country-name {
               font-size: 1.2rem;
               margin-bottom: 10px;
            }

            .license-details p {
               font-size: 0.9rem;
               margin-bottom: 8px;
            }

            .learn-more-btn {
               margin-top: 10px;
            }

            .btn:hover {
               background-color: rgba(199, 199, 199, 0.93);
               text-decoration: none;
            }

            .download-area {
               padding: 130px 0;
            }

            .download-content .section-title {
               margin-bottom: 40px;
            }

            .download-btn-wrap .download-btn {
               margin-right: 10px;
            }

            .download-img img {
               margin-top: 20px;
               max-width: 100%;
               height: auto;
            }
         `}</style>
      </>
   );
}

export default ContactArea;