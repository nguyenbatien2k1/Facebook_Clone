import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button1 from "./Components/Button1";
import Button2 from "./Components/Button2";

// FontAweSome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faFacebookMessenger, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faHome, faSearch, faStore, faTableCells, faUsersLine } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner1")}>
        <FontAwesomeIcon className={cx("logo")} icon={faFacebook} />
        <div className={cx("div-search")}>
          <FontAwesomeIcon className={cx("icon-search")} icon={faSearch} />
          <input className={cx("search-input")} placeholder="Tìm kiếm trên Facebook"></input>
        </div>
      </div>

      <div className={cx("inner2")}>
          <Button1 icon={faHome} active content="Trang chủ" />
          <Button1 icon={faYoutube} content="Watch"/>
          <Button1 icon={faStore} content="Marketplace"/>
          <Button1 icon={faUsersLine} content="Nhóm"/>
          <Button1 icon={faGamepad} content="Trò chơi"/>
      </div>

      <div className={cx("inner3")}>
        <Button2 icon={faTableCells} content="Menu"/>
        <Button2 icon={faFacebookMessenger} content="Messenger"/>
        <Button2 icon={faBell} content="Thông báo"/>
        <Button2 src content="Tài khoản"/>
      </div>
    </header>

  );
}

export default Header;

