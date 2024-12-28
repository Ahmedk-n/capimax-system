import { StaticImageData } from "next/image";

import teamImg from "@/assets/img/licenses/Flag_of_the_United_States.svg";
import teamImg_1 from "@/assets/img/licenses/CapiMax-logo.png";

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   RegNo: string; 
   type: string;
}

const team_data_USA: DataType[] = [
   {
      id: 1,
      img: teamImg_1,
      title: "Capimax Investment (Wyoming)",
      RegNo: "2024-001559635",
      type: "ID:",
   },
   {
      id: 2,
      img: teamImg,
      title: "Capimax General Trading (New York)",
      RegNo: "7469500",
      type: "DOS ID:",
   },
];

export default team_data_USA;