import { StaticImageData } from "next/image"

import teamImg from "@/assets/img/licenses/Flag_of_the_United_Arab_Emirates.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   RegNo: string;
}

const team_data_UAE: DataType[] = [
   {
      id: 1,
      img: teamImg,
      title: "Capimax Investment (Abu Dhabi)",
      RegNo:"CN5639305"
   },
   {
      id: 2,
      img: teamImg,
      title: "Trustec Construction Contracting",
      RegNo: "230035 (Since 1982, Dubai)",
   },
   {
      id: 3,
      img: teamImg,
      title: "Profit Max Management",
      RegNo: "1381984 (Dubai)",
   },
   {
      id: 4,
      img: teamImg,
      title: "Future Access Contracting",
      RegNo: "1133109 (Dubai)",
   },
   {
      id: 5,
      img: teamImg,
      title: "Naseem Al-Rayan Facilities Management",
      RegNo: "1133993 (Dubai)",
   },
]

export default team_data_UAE;