import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ icon = false, name, src}) {
  if (icon) {
    return (
      <div className={cx("wrapper")}>
        <FontAwesomeIcon className={cx("icon")} icon={icon}></FontAwesomeIcon>
        <h4>{name}</h4>
      </div>
    );
  }

  if (src) {
    return (
      <div className={cx("wrapper")}>
        <img
          className={cx("img")}
          src={src}
        ></img>
        <h4>{name}</h4>
      </div>
    );
  }

}

export default Button;
