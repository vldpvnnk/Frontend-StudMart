import { Button } from "@mui/base";
import SvgIcon1 from "../../icons/FavoriteCategories/SvgIcon1";
import SvgIcon2 from "../../icons/FavoriteCategories/SvgIcon2";
import SvgIcon3 from "../../icons/FavoriteCategories/SvgIcon3";
import SvgIcon4 from "../../icons/FavoriteCategories/SvgIcon4";
import SvgIcon5 from "../../icons/FavoriteCategories/SvgIcon5";
import SvgIcon6 from "../../icons/FavoriteCategories/SvgIcon6";
import SvgIcon7 from "../../icons/FavoriteCategories/SvgIcon7";
import "./style.css";

function FavoriteCategoriesWidget() {
  return (
    <div className="beauty-health-container3">
      <Button className="beauty-health-button">
        <SvgIcon1 className="svg-container3" />
        Избранное
      </Button>
      <Button className="beauty-and-health-button">
        <SvgIcon2 className="svg-container3" />
        Техника и Электроника
      </Button>
      <Button className="beauty-health-button4">
        <SvgIcon3 className="svg-container3" />
        Товары
      </Button>
      <Button className="beauty-health-button1">
        <SvgIcon4 className="svg-container3" />
        Рестораны и доставка
      </Button>
      <Button className="beauty-health-button3">
        <SvgIcon5 className="svg-container3" />
        Обучение
      </Button>
      <Button className="beauty-health-button2">
        <SvgIcon6 className="svg-container3" />
        Спорт
      </Button>
      <div className="beauty-health-container1">
        <SvgIcon7 className="svg-container" />
        <p className="regional-label-text-style">Красота и Здоровье</p>
      </div>
    </div>
  );
}

export default FavoriteCategoriesWidget;
