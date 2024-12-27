import { StaticImageData } from "next/image"

import teamImg from "@/assets/img/licenses/Flag_of_the_United_Kingdom.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
}

const team_data_UK: DataType[] = [
   {
      id: 1,
      img: teamImg,
      title: "United Kingdom",
   },
   {
      id: 2,
      img: teamImg,
      title: "United Kingdom",
   },
   {
      id: 3,
      img: teamImg,
      title: "United Kingdom",
   },
   {
      id: 4,
      img: teamImg,
      title: "United Kingdom",
   },
]

export default team_data_UK;