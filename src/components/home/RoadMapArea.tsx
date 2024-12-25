"use client"
import Slider from "react-slick";

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

const RoadMapArea = () => {
   return (
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
   )
}

export default RoadMapArea