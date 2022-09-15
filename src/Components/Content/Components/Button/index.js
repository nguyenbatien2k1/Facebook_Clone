import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ icon = false, name }) {
  return (
    <div className={cx("wrapper")}>
      {
        icon ? <FontAwesomeIcon className={cx("imgOrIcon")} icon={icon}></FontAwesomeIcon> : <img className={cx("imgOrIcon")} src="https://img.meta.com.vn/Data/image/2022/03/15/anh-anime-chibi-3.jpg"></img>
      }
      <h4>{name}</h4>
    </div>
  );
}

export default Button;
