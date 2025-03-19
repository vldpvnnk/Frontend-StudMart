import StylishBox7 from "../../StylishBoxes/StylishBox7";
import ScooterService from "../../ScooterService";
import "./style.css";
// import "../../PromoCardsContent/style.css"

function StylishService() {
  return (
    <div className="delivery-service-card">
      <StylishBox7 />
      <ScooterService />
    </div>
  );
}

export default StylishService;
