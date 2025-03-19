import DynamicDisplayWidget from "../DynamicDisplayWidget";
import ServiceAudience from "../ServiceAudience";
import MarketingContentBlock from "../MarketingContentBlock";
import "./style.css";

function ContentLayoutWidget() {
  return (
    <div className="student-discount-portal">
      <DynamicDisplayWidget />
      <ServiceAudience />
      <MarketingContentBlock />
    </div>
  );
}

export default ContentLayoutWidget;
