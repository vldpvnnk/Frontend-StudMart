import { Button } from "@mui/base";
import StylishWidgetCollection from "../StylishWidgetCollection";
import "./style.css";

function StylishWidgetSection() {
  return (
    <div className="vertical-center-column">
      <StylishWidgetCollection />
      <Button className="promo-button">Посмотреть еще</Button>
    </div>
  );
}

export default StylishWidgetSection;
