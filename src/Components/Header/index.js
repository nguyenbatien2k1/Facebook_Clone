import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import Button from "./Components/Button";

// console.log(images)

// FontAweSome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fa42Group, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars, faGamepad, faHome, faMessage, faSearch, faStore, faUser, faUserFriends } from "@fortawesome/free-solid-svg-icons";

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
          <Button icon={faHome} active />
          <Button icon={faYoutube} />
          <Button icon={faStore} />
          <Button icon={faUserFriends} />
          <Button icon={faGamepad} />
      </div>

      <div className={cx("inner3")}>
        <Button icon={faBars}/>
        <Button icon={faMessage}/>
        <Button icon={faUser}/>

      </div>
    </header>

  );
}

export default Header;

