
import StylishAppleMarket from "../PromoCardsContent/StylishAppleMarket";
import StylishService from "../PromoCardsContent/StylishService";
import FashionHub from "../PromoCardsContent/FashionHub";
import SweetTreatsPage from "../PromoCardsContent/SweetTreatsPage";
import CreativeHub from "../PromoCardsContent/CreativeHub";
import "./style.css";

function StylishWidgetCollection() {
  return (
    <div className="hierarchical-text-container">
      <div className="hierarchical-content-container">
        <div className="promo-card-container">
          <StylishService />
          <SweetTreatsPage />
          <StylishAppleMarket />
          <FashionHub />
        </div>   
        <div className="promo-card-container">
          <FashionHub />
          <StylishAppleMarket />
          <StylishService />
          <SweetTreatsPage />
        </div>               
        <div className="promo-card-container">
          <CreativeHub />
          <StylishAppleMarket />
          <StylishService />
          <FashionHub />
        </div>
        <div className="promo-card-container">
          <StylishAppleMarket />
          <FashionHub />
          <SweetTreatsPage />
          <StylishService />
        </div>
      </div>
    </div>
  );
}

export default StylishWidgetCollection;
