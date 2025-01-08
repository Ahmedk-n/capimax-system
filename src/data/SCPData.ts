import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/images/secure invest.jpg";

interface DataType {
   id: number;
   post: string;
   thumb: StaticImageData;
   date: string;
   title: string;
   desc: string;
}

const scp_data: DataType[] = [
   {
      id: 1,
      post: "masonry",
      thumb: blogThumb_1,
      date: "2025/01/01",
      title: "Capimax Portfolio for Security and Crises for Investors",
      desc: "Capimax Company has created a portfolio that includes assets and funds equivalent to the value of investments traded in various investments. These assets are diverse and include real estate, money, and deposits. The purpose of these assets is to protect investors and their investments from any crises, ensuring that the investment is always insured. This makes the investment low-risk and backed by assets and funds, facilitating easy recovery of funds with profits. It also helps avoid any crises for both the investor and the investment, ensuring that both the investor and their funds remain secure, regardless of any circumstances or crises that may affect the investment.",
   },
];

export default scp_data;