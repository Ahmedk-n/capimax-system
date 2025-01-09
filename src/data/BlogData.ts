import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/insurance/first-image.jpg"
import blogThumb_2 from "@/assets/img/insurance/second-image.jpg"

interface DataType {
   id: number;
   post: string;
   thumb: StaticImageData;
   date: string;
   title: string;
   desc: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      post: "masonry",
      thumb: blogThumb_1,
      date: "2025/01/01",
      title: "Discover Insured Investments with Capimax",
      desc: "Capimax&apos;s insured investments ensure your principal and profits are protected. Partnering with global leaders like HCC International, we redefine secure investment opportunities for your peace of mind.",
   },
   {
      id: 2,
      post: "masonry",
      thumb: blogThumb_2,
      date: "2025/01/01",
      title: "Capimax: Unique Insured Investment Advantages",
      desc: "With Capimax, invest confidently in insured opportunities backed by HCC International. Our global coverage ensures comprehensive protection, providing unparalleled security for your investments. ensuring every single share will reward you with a profit.",
   },
];

export default blog_data;