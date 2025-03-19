import { Button } from "@mui/base";
import "./style.css";

function ScooterService() {
  return (
    <div className="promo-card1">
      <div className="delivery-service-section">
        <p className="golden-apple-heading">Самокат</p>
        <p className="golden-apple-cosmetics-description">Сервис доставки</p>
      </div>
      <div className="discount-button-container">
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="discount-button1">-10%</Button>
      </div>
    </div>
  );
}

export default ScooterService;
