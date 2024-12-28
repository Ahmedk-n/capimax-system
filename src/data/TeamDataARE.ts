import { StaticImageData } from "next/image"

import teamImg from "@/assets/img/licenses/Flag_of_the_Egypt.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   RegNo: string;
}

const team_data_ARE: DataType[] = [
   {
      id: 1,
      img: teamImg,
      title: "Al-Omrat Engineering and Contracting",
      RegNo:"10478 from 2004"
   },
   {
      id: 2,
      img: teamImg,
      title: "Capimax Investment",
      RegNo:"Under Process"
   },
]


export default team_data_ARE;