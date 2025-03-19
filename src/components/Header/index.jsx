import SvgIcon1 from "../../icons/Header/SvgIcon1";
import SvgIcon2 from "../../icons/Header/SvgIcon2";
import LocationIcon from "../../icons/Header/LocationIcon";
import "./style.css";

function Header () {
    return(
        <div className="green-header-container">
            <div className="sidebar-section">
                <img src="/assets/image_d8aa048d.png" alt="" className="image-container5" />
            </div>
            <div className="sidebar-navigation">
                <div className="horizontal-menu-container">
                    <div className="vertical-centered-text-container">
                        <p className="heading-text-bold">Предложения</p>
                    </div>
                    <div className="vertical-centered-box">
                        <p className="heading-text-bold">О сервисе</p>
                    </div>
                    <div className="partner-section2">
                        <p className="heading-text-bold">Партнерам</p>
                    </div>
                </div>
            </div>
            <div className="location-bar">
                <div className="location-container">
                    <LocationIcon className="svg-container" />
                    <p className="regional-label-text-style">Тюменская обл.</p>
                </div>            
                <div className="search-container">
                    <p className="search-heading-text-style">Поиск</p>
                    <div className="search-divider" />
                </div>
                <SvgIcon1 className="svg-container1" />
                <SvgIcon2 className="svg-container2" />
            </div>
        </div>
    )
}

export default Header;