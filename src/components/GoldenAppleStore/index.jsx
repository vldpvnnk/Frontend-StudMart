import { Button } from "@mui/base";
import "./style.css";

function GoldenAppleStore() {
  return (
    <div className="promo-card1">
      <div className="delivery-service-section">
        <p className="golden-apple-heading">Золотое Яблоко</p>
        <p className="golden-apple-cosmetics-description">Магазин косметики</p>
      </div>
      <div className="discount-button-container">
        {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
        <Button className="discount-button1">-10%</Button>
      </div>
    </div>
  );
}

export default GoldenAppleStore;
