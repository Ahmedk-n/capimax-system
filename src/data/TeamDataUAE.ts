import { StaticImageData } from "next/image"

import teamImg from "@/assets/img/licenses/Flag_of_the_United_Arab_Emirates.svg"
import teamImg_1 from "@/assets/img/licenses/CapiMax-logo-UAE.png"
import teamImg_2 from "@/assets/img/licenses/cropped-black-logo.png"
import teamImg_3 from "@/assets/img/licenses/profit-max-logo.png"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   RegNo: string;
   style: React.CSSProperties;
}

const team_data_UAE: DataType[] = [
   {
      id: 1,
      img: teamImg_1,
      title: "Capimax Investment (Abu Dhabi)",
      RegNo:"CN5639305",
      style: { textAlign: "center" },
   },
   {
      id: 2,
      img: teamImg_2,
      title: "Trustec Construction Contracting",
      RegNo: "230035 (Since 1982, Dubai)",
      style: { textAlign: "center" },
   },
   {
      id: 3,
      img: teamImg_3,
      title: "Profit Max Management",
      RegNo: "1381984 (Dubai)",
      style: { textAlign: "center" },
   },
   {
      id: 4,
      img: teamImg,
      title: "Future Access Contracting",
      RegNo: "1133109 (Dubai)",
      style: { width: "80px", height: "auto" }
   },
   {
      id: 5,
      img: teamImg,
      title: "Naseem Al-Rayan Facilities Management",
      RegNo: "1133993 (Dubai)",
      style: { width: "80px", height: "auto" }
   },
]

export default team_data_UAE;