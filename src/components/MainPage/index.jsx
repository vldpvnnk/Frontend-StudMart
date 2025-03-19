import ContentLayoutWidget from "../ContentLayoutWidget";
import PrivacyGuardian from "../PrivacyGuardian";
import Header from "../Header";
import "./style.css";


function MainPage() {
  return (
    <div className="main-content-container2">
      <div className="main-content-container1">
        <Header/>
        <ContentLayoutWidget />
        <PrivacyGuardian />
      </div>
    </div>
  );
}

export default MainPage;
