import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Button2.module.scss";

// Tippy
// import Tippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

const cx = classNames.bind(styles);

function Button2({ icon, content=false, src }) {

  return (
    <Tippy
      content={content}
    >
      <button
        className={cx("button-link")}
      >
        <div className={cx("wrapper")}>
          {
            src ? <img src="https://img.meta.com.vn/Data/image/2022/03/15/anh-anime-chibi-3.jpg"></img> 
            : <FontAwesomeIcon className={cx("icon-button")} icon={icon} />
          }

        </div>
      </button>
    </Tippy>
  );
}

export default Button2;
