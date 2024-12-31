import Link from "next/link";
import ContactForm from "../forms/ContactForm";

interface DataType {
   id: number;
   icon: string;
   title: JSX.Element;
   info: JSX.Element;
}

const contact_data: DataType[] = [
   {
      id: 1,
      icon: "fas fa-map-marker-alt",
      title: (
         <>
            <img
               src="https://flagcdn.com/w40/ae.png"
               alt="UAE Flag"
               style={{ width: 32, marginRight: 8 }}
            />
            UAE Location
         </>
      ),
      info: (
         <p>
            <strong>1.</strong> Abu Dhabi, Al Reem Island, Addax Tower
         </p>
      ),
   },
   {
      id: 2,
      icon: "fas fa-map-marker-alt",
      title: (
         <>
            <img
               src="https://flagcdn.com/w40/gb.png"
               alt="UK Flag"
               style={{ width: 32, marginRight: 8 }}
            />
            UK Locations
         </>
      ),
      info: (
         <p>
            <strong>1.</strong> 128 City Road, London, EC1V 2NX <br />
            <strong>2.</strong> 167-169 Great Portland Street, 5th Floor, London, W1W 5PF
         </p>
      ),
   },
   {
      id: 3,
      icon: "fas fa-map-marker-alt",
      title: (
         <>
            <img
               src="https://flagcdn.com/w40/us.png"
               alt="USA Flag"
               style={{ width: 32, marginRight: 8 }}
            />
            US Locations
         </>
      ),
      info: (
         <p>
            <strong>1.</strong> 418 Broadway, Ste R, Albany, NY 12207 <br />
            <strong>2.</strong> 30 N Gould St Ste R, Sheridan, <br />WY 82801
         </p>
      ),
   },
   {
      id: 4,
      icon: "fas fa-phone-alt",
      title: <span>Contact Numbers</span>,
      info: (
         <>
            <p>
               <strong>
                  <img
                     src="https://flagcdn.com/w40/ae.png"
                     alt="UAE Flag"
                     style={{ width: 32, marginRight: 8 }}
                  />
                  UAE:
               </strong>{" "}
               <Link href="tel:00971585672519">00971585672519</Link>
            </p>
            <p>
               <strong>
                  <img
                     src="https://flagcdn.com/w40/gb.png"
                     alt="UK Flag"
                     style={{ width: 32, marginRight: 8 }}
                  />
                  UK:
               </strong>{" "}
               <Link href="tel:00447441358588">00447441358588</Link>
            </p>
            <p>
               <strong>
                  <img
                     src="https://flagcdn.com/w40/us.png"
                     alt="USA Flag"
                     style={{ width: 32, marginRight: 8 }}
                  />
                  USA:
               </strong>{" "}
               <Link href="tel:0012342795751">0012342795751</Link>
            </p>
         </>
      ),
   },
   {
      id: 5,
      icon: "fas fa-envelope",
      title: <span>Email</span>,
      info: (
         <p>
            <Link href="mailto:info@capimaxinvestment.com">
               info@capimaxinvestment.com
            </Link>
         </p>
      ),
   },
   {
      id: 6,
      icon: "fas fa-business-time",
      title: <span>Visit Between</span>,
      info: <p>Mon - Sat : 8.00-5.00</p>,
   },
];

const ContactArea = () => {
   return (
      <section className="contact-area pt-140 pb-140">
         <div className="container">
            <div className="contact-info-wrap">
               <div className="row justify-content-center">
                  {contact_data.map((item) => (
                     <div key={item.id} className="col-xl-3 col-lg-4 col-md-6">
                        <div className="contact-info-item">
                           <div className="icon">
                              <i className={item.icon}></i>
                           </div>
                           <div className="content">
                              <h6 className="title">{item.title}</h6>
                              <div>{item.info}</div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>

            <div className="contact-form-wrap">
               <div className="row g-0">
                  <div className="col-57 order-0 order-lg-2">
                     <div className="contact-form">
                        <ContactForm />
                     </div>
                  </div>
                  <div className="col-43">
                     <div className="contact-map">
                        <iframe
                           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.610924709642!2d54.38604907497572!3d24.493557479243387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e66dbd59a7c3b%3A0x898c1e7c522451e2!2sAddax%20Tower%2C%20Al%20Reem%20Island!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae"
                           allowFullScreen
                           loading="lazy"
                           style={{
                              border: 0,
                              width: "100%",
                              height: "100%",
                           }}
                        ></iframe>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactArea;