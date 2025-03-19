import StudentDiscountBlock from "../StudentDiscountBlock";
import "./style.css";

function ImageGalleryWidget() {
  return (
    <div className="student-discount-section">
      <StudentDiscountBlock />
      <div className="partner-discount-section">
        <img src="/assets/image_1c90f371.png" className="image-container-outer" />
      </div>
      <div className="student-discount-offer">
        <img src="/assets/image_d0d8480f.png" className="image-container-style" />
      </div>
    </div>
  );
}

export default ImageGalleryWidget;
