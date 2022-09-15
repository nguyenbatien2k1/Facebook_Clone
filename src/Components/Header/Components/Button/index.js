import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";


const cx = classNames.bind(styles);

function Button({ icon, active = false }) {
  return (
    <>
      <a
        className={cx("button-link", {
          active,
        })}
      >
        <div className={cx("wrapper")}>
          <FontAwesomeIcon className={cx("icon-button")} icon={icon} />
        </div>
      </a>
    </>
  );
}

export default Button;
