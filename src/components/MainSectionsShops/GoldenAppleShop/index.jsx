import { Button } from "@mui/base";
import "./style.css";

function GoldenAppleShop() {
  return (
    <div className="cosmetic-store-card">
      <div className="cosmetic-store-info">
        <p className="golden-apple-heading">Золотое Яблоко</p>
        <p className="golden-apple-cosmetics-description">Магазин косметики</p>
      </div>
      <Button className="golden-apple-discount-btn">-10%</Button>
    </div>
  );
}

export default GoldenAppleShop;
