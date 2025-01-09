import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/images/insurance.jpg";


interface DataType {
   id: number;
   post: string;
   thumb: StaticImageData;
   date: string;
   title: string;
   desc: string;
}

const iri_data: DataType[] = [
   {
      id: 1,
      post: "masonry",
      thumb: blogThumb_1,
      date: "2025/01/01",
      title: "Investment Risk Insurance for All Types of Investments and Investors",
      desc: "Capimax Company, in collaboration with major insurance companies worldwide, provides insurance for all types of investments to protect investors&apos; funds, making the investment low-risk. The company has also developed innovative insurance types in collaboration with insurance companies, which allow for coverage of the investor, their life, and their assets, ensuring that their investments are fully insured for themselves, their families, heirs, and businesses.",
   },
];

export default iri_data;