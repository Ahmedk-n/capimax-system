import Image, { StaticImageData } from "next/image";

import rcPost_1 from "@/assets/img/logo/logo.png"
import rcPost_2 from "@/assets/img/logo/logo.png"
import rcPost_3 from "@/assets/img/logo/logo.png"

interface DataType {
   id: number;
   img: StaticImageData;
   date: string;
   title: string;
}
const rc_data: DataType[] = [
   {
      id: 1,
      img: rcPost_1,
      date: "July 25,2023",
      title: "We Advocate Swapping Screen Time",
   },
   {
      id: 2,
      img: rcPost_2,
      date: "July 20,2023",
      title: "Utilizing mobile technology in the field",
   },
   {
      id: 3,
      img: rcPost_3,
      date: "July 15,2023",
      title: "Building intelligent transportation systems",
   },
]

const BlogRcPost = () => {
   return (
      <div className="blog-widget">
         <h4 className="widget-title">Recent Posts</h4>
         <div className="rc-post-wrap">
            {rc_data.map((item) => (
               <div key={item.id} className="rc-post-item">
                  <div className="thumb">
                     <Image src={item.img} alt="" />
                  </div>
                  <div className="content">
                     <span className="date">{item.date}</span>
                     <h6 className="title">{item.title}</h6>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
}

export default BlogRcPost
