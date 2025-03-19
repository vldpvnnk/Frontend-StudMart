import { Button } from "@mui/base";
import "./style.css";

function ChocolateShopDiscount() {
  return (
    <div className="promo-card1">
      <div className="delivery-service-section">
        <p className="golden-apple-heading">Шоколадница</p>
        <p className="golden-apple-cosmetics-description">Сеть кофеен</p>
      </div>
      <div className="discount-button-container">
        <Button className="discount-button1">-15%</Button>
      </div>
    </div>
  );
}

export default ChocolateShopDiscount;
