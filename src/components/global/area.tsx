'use client';

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import Faq from "./FAQ";
import DownloadArea from "../home/DownloadArea";
import team_data_UK from "@/data/TeamDataUK";
import team_data_USA from "@/data/TeamDataUSA";
import team_data_UAE from "@/data/TeamDataUAE";
import team_data_ARE from "@/data/TeamDataARE";

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
      roadmap_title: "Global Presence",
      title: "Worldwide Influence in Business",
      desc: (<>Capimax Global owns 14 companies engaging in 72 activities, licensed in 7 countries across 4 continents, demonstrating unmatched diversity and global reach.</>),
   },
   {
      id: 2,
      roadmap_title: "United Kingdom Ventures",
      title: "Extensive UK Investments",
      desc: (<>Capimax operates 7 licensed companies in the UK, excelling in over 28 diverse activities such as wealth management, financial markets, real estate, and construction.</>),
   },
   {
      id: 3,
      roadmap_title: "United States Operations",
      title: "Robust US-Based Initiatives",
      desc: (<>In the US, Capimax oversees 2 licensed companies focused on public investments, portfolio management, and general trading, ensuring a strong presence in America.</>),
   },
   {
      id: 4,
      roadmap_title: "UAE Enterprises",
      title: "Strategic Ventures in UAE",
      desc: (<>Capimax manages 5 licensed companies in the UAE specializing in investments, operations, construction, facilities management, and other strategically activities.</>),
   },
   {
      id: 5,
      roadmap_title: "Egyptian Projects",
      title: "Emerging Ventures in Egypt",
      desc: (<>In Egypt, Capimax has 2 licensed companies working in engineering and construction, with new licenses for financial services and real estate investments.</>),
   },
   {
      id: 6,
      roadmap_title: "Integrated Solutions",
      title: "Unified Business Ecosystem",
      desc: (<>Capimax Global combines expertise across sectors such as wealth management, financial markets, real estate, engineering, and construction for holistic solutions.</>),
   },
];

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
                        The companies owned by Capimax in the United Kingdom and bearing the name Capimax
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {team_data_UK.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="license-card">
                           <div className="license-flag">
                              <Image src={item.img} alt={item.title} style={item.style as React.CSSProperties} />
                           </div>
                           <div className="license-details">
                              <h3 className="country-name" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                              <p style={{ fontSize: '0.9rem' }}>
                                 <strong>Reg No:</strong> {item.RegNo}
                              </p>
                              <p style={{ fontSize: '0.9rem' }}>
                                 <strong>Authorized Activities:</strong> Licensed activities
                                 mentioned in the official documents.
                              </p>
                              <div className="learn-more-btn">
                                 <Link href = {item.link} className="btn" target= "_blank">
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
         <section
            className="team-area team-bg"
            style={{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }}
         >
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title text-center mb-50">
                        <p className="subtitle">
                        The companies owned by Capimax in the United States of America
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {team_data_USA.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="license-card">
                           <div className="license-flag">
                              <Image src={item.img} alt={item.title} style={{ width: '80px', height: 'auto' }} />
                           </div>
                           <div className="license-details">
                              <h3 className="country-name" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                              <p style={{ fontSize: '0.9rem' }}>
                                 <strong>{item.type}</strong> {item.RegNo}
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
         <section
            className="team-area team-bg"
            style={{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }}
         >
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title text-center mb-50">
                        <p className="subtitle">
                        The companies owned by Capimax in the United Arab Emirates
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {team_data_UAE.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="license-card">
                           <div className="license-flag">
                              <Image src={item.img} alt={item.title} style={{ width: '80px', height: 'auto' }} />
                           </div>
                           <div className="license-details">
                              <h3 className="country-name" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                              <p style={{ fontSize: '0.9rem' }}>
                                 <strong>Reg No:</strong> {item.RegNo}
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
         <section
            className="team-area team-bg"
            style={{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }}
         >
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title text-center mb-50">
                        <p className="subtitle">
                        The companies owned by Capimax in Egypt
                        </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                  {team_data_ARE.map((item) => (
                     <div key={item.id} className="col-lg-4 col-md-6">
                        <div className="license-card">
                           <div className="license-flag">
                              <Image src={item.img} alt={item.title} style={{ width: '80px', height: 'auto' }} />
                           </div>
                           <div className="license-details">
                              <h3 className="country-name" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                              <p style={{ fontSize: '0.9rem' }}>
                                 <strong>Reg No:</strong> {item.RegNo}
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
                        <h2 className="title">Capimax Global Ventures & Achievements</h2>
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
         <Faq />
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
               margin-bottom: 30px;
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