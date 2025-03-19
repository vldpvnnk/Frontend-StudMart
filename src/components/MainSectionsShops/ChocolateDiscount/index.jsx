import { Button } from "@mui/base";
import "./style.css";

function ChocolateDiscount() {
  return (
    <div className="cosmetic-store-card">
      <div className="cosmetic-store-info">
        <p className="golden-apple-heading">Шоколадница</p>
        <p className="golden-apple-cosmetics-description">Сеть кофеен</p>
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="golden-apple-discount-btn">-15%</Button>
    </div>
  );
}

export default ChocolateDiscount;
