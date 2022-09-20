import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

function Button({ data = {}, className }) {
  if (data.icon) {
    return (
      <div className={cx("wrapper", { [className]: className })}>
        <FontAwesomeIcon
          className={cx("icon")}
          icon={data.icon}
        ></FontAwesomeIcon>
        <h4>{data.name}</h4>
      </div>
    );
  }

  if (data.src) {
    return (
      <div className={cx("wrapper")}>
        <img className={cx("img")} src={data.src}></img>
        <h4>{data.name}</h4>
      </div>
    );
  }
}

export default Button;
