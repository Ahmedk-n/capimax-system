import { StaticImageData } from "next/image"

import teamImg from "@/assets/img/licenses/Flag_of_the_United_States.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
}

const team_data_USA: DataType[] = [
   {
      id: 1,
      img: teamImg,
      title: "United States of America",
   },
   {
      id: 2,
      img: teamImg,
      title: "United States of America",
   },
]


export default team_data_USA;