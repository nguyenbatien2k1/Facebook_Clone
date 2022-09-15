import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Button1.module.scss";

// Tippy
// import Tippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const cx = classNames.bind(styles);

function Button1({ icon, active = false, content = false }) {
  return (
    <Tippy content={content}>
      <div className={cx("container")}>
        <a
          className={cx("button-link", {
            active,
          })}
        >
          <div className={cx("wrapper")}>
            <FontAwesomeIcon className={cx("icon-button")} icon={icon} />
          </div>
        </a>
        {
          active ? <div className={cx("border-bottom")}></div> : ''
        }
      </div>
    </Tippy>
  );
}

export default Button1;
