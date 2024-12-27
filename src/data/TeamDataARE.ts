import { StaticImageData } from "next/image"

import teamImg from "@/assets/img/licenses/Flag_of_the_Egypt.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
}

const team_data_ARE: DataType[] = [
   {
      id: 1,
      img: teamImg,
      title: "Arab Republic of Egypt",
   },
   {
      id: 2,
      img: teamImg,
      title: "Arab Republic of Egypt",
   },
]


export default team_data_ARE;