import ContactInfoSection from "../ContactInfoSection";
import "./style.css";

function ContactSection() {
  return (
    <div className="contact-info-section3">
      <p className="contact-title-text-style">Контакты</p>
      <ContactInfoSection />
      <div className="contact-info-container1">
        <div className="vertical-centered-image-container">
          <img src="/assets/image_ea880b53.png" alt="" className="image-container1" />
        </div>
        <img src="/assets/image_a8febfd3.png" alt="" className="image-container2" />
      </div>
    </div>
  );
}

export default ContactSection;
