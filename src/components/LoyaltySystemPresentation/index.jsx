import { Button } from "@mui/base";
import LoyaltyProgramDescription from "../LoyaltyProgramDescription";
import BusinessPromotionSnippet from "../BusinessPromotionSnippet";
import "./style.css";

function LoyaltySystemPresentation() {
  return (
    <div className="loyalty-program-container">
      <p className="loyalty-program-description-text-style">«Студмарт» — это система лояльности. Студентам она предоставляет скидки, а бизнесу — возможность расширить аудиторию.</p>
      <div className="loyalty-program-details-container">
        <LoyaltyProgramDescription />
        <BusinessPromotionSnippet />
      </div>
      {/* Button Component starts here. We've generated code using MUI Base. See other options in "Component library" dropdown in Settings */}
      <Button className="primary-button-style">Зарегистрироваться</Button>
    </div>
  );
}

export default LoyaltySystemPresentation;
