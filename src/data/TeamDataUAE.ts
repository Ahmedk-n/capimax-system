import { StaticImageData } from "next/image"

import teamImg from "@/assets/img/licenses/Flag_of_the_United_Arab_Emirates.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
}

const team_data_UAE: DataType[] = [
   {
      id: 1,
      img: teamImg,
      title: "United Arab Emirates",
   },
]

export default team_data_UAE;