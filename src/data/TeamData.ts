import { StaticImageData } from "next/image"

import teamImg_1 from "@/assets/img/licenses/Flag_of_the_United_States.svg"
import teamImg_2 from "@/assets/img/licenses/Flag_of_the_United_Kingdom.svg"
import teamImg_3 from "@/assets/img/licenses/Flag_of_the_United_Arab_Emirates.svg"

interface DataType {
   id: number;
   img: StaticImageData;
   title: string;
   profession: string;
}

const team_data: DataType[] = [
   {
      id: 1,
      img: teamImg_1,
      title: "United States of America",
      profession: "Marketer",
   },
   {
      id: 2,
      img: teamImg_2,
      title: "United Kingdom",
      profession: "Founder & CEO",
   },
   {
      id: 3,
      img: teamImg_3,
      title: "United Arab Emirates",
      profession: "Technology Officer",
   },
]

export default team_data;