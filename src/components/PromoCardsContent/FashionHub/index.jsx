import BeautyStoreWidget from "../../BeautyStoreWidget";
import "../../PromoCardsContent/style.css"
import Star from "../../../icons/MainSectionShops/Star"
import StylishBox3 from "../../StylishBoxes/StylishBox3";
function FashionHub() {
  return (
    <div className="delivery-service-card">
      <StylishBox3/>
      {/* <div className="flex-column-container bg-fashion-hub">
        <Star className="svg-container" />
      </div> */}
      <BeautyStoreWidget />
    </div>
  );
}

export default FashionHub;
