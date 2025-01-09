import Link from "next/link";

interface DataType {
   id: number;
   title: string;
   count: string;
   link: string;
}
const category_data: DataType[] = [
   { id: 2, title: "Global Coverage Details", count: "01" ,link: "/#investment-plans" },
   { id: 3, title: "About HCC International", count: "02" , link: "/global" },
   { id: 4, title: "How It Works", count: "03" , link: "https://hccinsurance.co.uk/list-of-approved-companies/" },
   { id: 5, title: "Contact for More Info", count: "04" , link: "/contact" },
];
const BlogCategory = () => {
   return (
      <div className="blog-widget shine-effect">
         <h4 className="widget-title gradient-text">Insured Investment: Capimax&apos;s Unique Advantage</h4>
         <div className="sidebar-cat-list">
            <ul className="list-wrap">
               {category_data.map((category, index) => (
                  <li key={index} className="category-item">
                     <Link href={category.link} className="gradient-link">
                        {category.title} <span>{category.count}</span>
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <style jsx>{`
            .shine-effect {
               background: linear-gradient(135deg, rgba(68, 160, 141, 0.1) 0%, rgba(9, 54, 55, 0.2) 100%);
               backdrop-filter: blur(10px);
               border: 1px solid rgba(255, 255, 255, 0.1);
               box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
               transition: all 0.4s ease-in-out;
               position: relative;
               overflow: hidden;
            }

            .shine-effect::before {
               content: '';
               position: absolute;
               top: 0;
               left: -100%;
               width: 100%;
               height: 100%;
               background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
               transition: 0.5s;
            }

            .shine-effect:hover::before {
               left: 100%;
            }

            .shine-effect:hover {
               transform: translateY(-5px);
               box-shadow: 0 15px 45px rgba(9, 54, 55, 0.2);
               background: linear-gradient(135deg, rgba(68, 160, 141, 0.2) 0%, rgba(9, 54, 55, 0.3) 100%);
            }

            .gradient-text {
               background: linear-gradient(90deg, #44A08D, #093637);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
            }

            .category-item {
               transition: transform 0.3s ease;
            }

            .category-item:hover {
               transform: translateX(10px);
            }

            .gradient-link {
               background: linear-gradient(90deg, #CBD0D4, #93B2C8);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
               transition: all 0.3s ease;
            }

            .gradient-link:hover {
               background: linear-gradient(90deg, #44A08D, #093637);
               -webkit-background-clip: text;
               -webkit-text-fill-color: transparent;
            }
         `}</style>
      </div>
   );
};

export default BlogCategory;