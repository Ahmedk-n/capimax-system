import { StaticImageData } from "next/image";

import teamImg from "@/assets/img/licenses/Flag_of_the_United_Kingdom.svg";
import teamImg_1 from "@/assets/img/licenses/HCC-logo.png";
import teamImg_2 from "@/assets/img/licenses/cropped-black-logo.png";
import teamImg_3 from "@/assets/img/licenses/profit-max-logo.png";
import teamImg_4 from "@/assets/img/licenses/CapiMax-logo.png";

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   RegNo: string;
   link: string;
   style: React.CSSProperties; // Corrected style type for React
}

const team_data_UK: DataType[] = [
   {
      id: 1,
      img: teamImg_4,
      title: "Capimax Investment",
      RegNo: "16099034 (London)",
      link: "https://find-and-update.company-information.service.gov.uk/company/16099034",
      style: { textAlign: "center" }, // Updated style as React CSSProperties object
   },
   {
      id: 2,
      img: teamImg,
      title: "Capimax Development",
      RegNo: "OC454650",
      link: "https://find-and-update.company-information.service.gov.uk/company/OC454650",
      style: { width: "80px", height: "auto" },
   },
   {
      id: 3,
      img: teamImg,
      title: "Capimax Financial Management",
      RegNo: "16099090 (London)",
      link: "https://find-and-update.company-information.service.gov.uk/company/16099090",
      style: { width: "80px", height: "auto" },
   },
   {
      id: 4,
      img: teamImg,
      title: "Capimax for Investments in Precious Metals",
      RegNo: "16115521",
      link: "https://find-and-update.company-information.service.gov.uk/company/16115521",
      style: { width: "80px", height: "auto" },
   },
   {
      id: 5,
      img: teamImg_3,
      title: "Profitmax Investments",
      RegNo: "15816025",
      link: "https://find-and-update.company-information.service.gov.uk/company/15816025",
      style: { textAlign: "center" },
   },
   {
      id: 6,
      img: teamImg_2,
      title: "Trustech Building Contracting",
      RegNo: "14317896",
      link: "https://find-and-update.company-information.service.gov.uk/company/14317896",
      style: { textAlign: "center" },
   },
   {
      id: 7,
      img: teamImg_1,
      title: "HCC International Company",
      RegNo: "15113542",
      link: "https://find-and-update.company-information.service.gov.uk/company/01575839",
      style: { textAlign: "center" },
   },
];

export default team_data_UK;