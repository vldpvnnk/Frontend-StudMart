import { Button } from "@mui/base";
import "./style.css";

function BeautyStoreWidget() {
  return (
    <div className="promo-card1">
      <div className="delivery-service-section">
        <p className="golden-apple-heading">Рив Гош</p>
        <p className="golden-apple-cosmetics-description">Магазин косметики</p>
      </div>
      <div className="discount-button-container">
        <Button className="discount-button">-5%</Button>
      </div>
    </div>
  );
}

export default BeautyStoreWidget;
