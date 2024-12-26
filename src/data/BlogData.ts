import { StaticImageData } from "next/image";

import blogThumb_1 from "@/assets/img/blog/blog_masonry01.jpg"

interface DataType {
   id: number;
   company: string;
   post: string;
   thumb: StaticImageData;
   date: string;
   title: string;
   desc: string;
   type: string;
   investmentValue: number;
   duration: number; // IN Months

   // comment: string;
   // views: string;
}

const blog_data: DataType[] = [
   {
      id: 1,
      company: "x for gold",
      post: "masonry",
      thumb: blogThumb_1,
      date: "2023/03/15",
      title: "The Power of Blockchain don't Miss Out on Our ICO",
      desc: "The blockchain revolution is here, and this is your opportunity to be part of something transformative. Our Initial Coin Offering (ICO) isn't just another financial opportunity—it's a chance to join a groundbreaking movement that is redefining how value is exchanged and how trust is built in the digital age. With an investment value of $9,000 and a duration of just 2 months, our ICO provides a window to participate in a project poised for exponential growth. But this is about more than numbers and financial returns. By investing in our ICO, you align yourself with a community that shares a vision of a decentralized, transparent, and equitable future powered by blockchain technology. Through your support, we aim to develop innovative solutions that tackle real-world problems, streamline processes, and open doors to endless possibilities. Whether it's improving supply chain efficiency, enhancing data security, or fostering global inclusivity in financial systems, our project is at the forefront of creating meaningful change. This is your chance to not just witness the future but actively shape it. Beyond the monetary gains, you'll be part of an ecosystem where ideas flourish, collaboration thrives, and innovation leads the way.Don't wait to join the movement—take the first step toward a brighter future by becoming a part of our ICO today. The power of blockchain is undeniable, and your journey begins here.",
      type: "locked-contract",
      investmentValue: 5000,
      duration: 2,
   },
   {
      id: 2,
      company: "EMAAR", 
      post: "masonry",
      thumb: blogThumb_1,
      date: "2023/03/20",
      title: "2The Power of Blockchain don't Miss Out on Our ICO",
      desc: "2Our ICO is not just about financial gains; it's about being part of a movement that is shaping the future. By investing in our ICO, you become an integral part of a community that believes in the power..",
      type: "open-contract",
      investmentValue: 9000,
      duration: 2,
      // ...existing code...
   }
]

export default blog_data;