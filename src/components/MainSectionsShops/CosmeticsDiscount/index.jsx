import { Button } from "@mui/base";
import "./style.css";

function CosmeticsDiscount() {
  return (
    <div className="cosmetic-store-card">
      <div className="cosmetic-store-info">
        <p className="golden-apple-heading">Рив Гош</p>
        <p className="golden-apple-cosmetics-description">Магазин косметики</p>
      </div>
      <Button className="discount-button-style">-5%</Button>
    </div>
  );
}

export default CosmeticsDiscount;
