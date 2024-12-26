"use client";
import blog_data from "@/data/BlogData";
import Image from "next/image";

interface OpportunityDetailsProps {
  id: string;
}

const OpportunityDetails = ({ id }: OpportunityDetailsProps) => {
  const opportunity = blog_data.find(item => item.id.toString() === id);

  if (!opportunity) {
    return <div>Opportunity not found</div>;
  }

  return (
    <section className="blog-details-area pt-140 pb-140">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="blog-details-wrap">
              <div className="blog-details-thumb">
                <Image src={opportunity.thumb} alt={opportunity.title} />
              </div>
              <div className="blog-details-content">
                <h2 className="title">{opportunity.title}</h2>
                <div className="blog-meta">
                  <ul className="list-wrap">
                    <li><i className="far fa-clock"></i>{opportunity.date}</li>
                    <li><i className="far fa-file-alt"></i>{opportunity.type}</li>
                    <li><i className="fas fa-dollar-sign"></i>{opportunity.investmentValue}</li>
                  </ul>
                </div>
                <p>{opportunity.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunityDetails;
