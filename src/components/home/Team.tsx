"use client";
import Image from "next/image";
import Link from "next/link";
import team_data from "@/data/TeamData";

const Team = () => {
  return (
    <section
      className="team-area team-bg"
      style={{ backgroundImage: `url(/assets/img/bg/team_bg.png)` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-50">
              <h2 className="title">Our International Licenses</h2>
              <p className="subtitle">
                Capimax Investment is licensed to operate and establish investment
                funds, manage and run operations, and practice all types of
                investment and commerce. Below are the details of some licenses
                obtained from the official government websites of the licensing
                countries.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {team_data.map((item, index) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="license-card">
                <div className="license-flag">
                  <Image src={item.img} alt={item.title} style={{ width: '80px', height: 'auto' }} />
                </div>
                <div className="license-details">
                  <h3 className="country-name" style={{ fontSize: '1.2rem' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9rem' }}>
                    <strong>Reg No:</strong> XXXXXXX
                  </p>
                  <p style={{ fontSize: '0.9rem' }}>
                    <strong>Authorized Activities:</strong> Licensed activities
                    mentioned in the official documents.
                  </p>
                  <div className="learn-more-btn">
                    <Link href="https://www.example.com" className="btn">
                      Verfy License
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .team-area {
          padding: 50px 0;
          background-size: cover;
          background-position: center;
          color: #fff;
        }

        .section-title {
          margin-bottom: 50px;
        }

        .section-title .title {
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .subtitle {
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .license-card {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          padding: 15px;
          text-align: center;
          transition: transform 0.3s;
        }

        .license-card:hover {
          transform: translateY(-10px);
        }

        .license-flag {
          margin-bottom: 10px;
        }

        .license-flag img {
          max-width: 100%;
          height: auto;
        }

        .country-name {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .license-details p {
          font-size: 0.9rem;
          margin-bottom: 8px;
        }

        .learn-more-btn {
          margin-top: 10px;
        }

        .btn:hover {
          background-color:rgba(199, 199, 199, 0.93);
          text-decoration: none;
        }
      `}</style>
    </section>
  );
};

export default Team;
