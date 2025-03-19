import StudentServicesSection from "../StudentServicesSection";
import PartnerSection from "../PartnerSection";
import "./style.css";

function ServiceAudience() {
  return (
    <div className="main-content-container">
      <p className="main-heading-style">Кому пригодится сервис?</p>
      <div className="feature-highlight-section1">
        <div className="feature-highlight-section">
          <StudentServicesSection />
          <div className="promo-banner">
            <img src="/assets/image_42147581.png" alt="" className="image-container4" />
          </div>
        </div>
        <div className="partner-offers-section">
          <PartnerSection />
        </div>
      </div>
    </div>
  );
}

export default ServiceAudience;
