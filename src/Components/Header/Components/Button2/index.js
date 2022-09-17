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
            src ? <img src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/305573503_1717436901948469_3978030599460626886_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6_sd9Yhhy38AX8i4E6d&_nc_ht=scontent.fhan15-2.fna&oh=00_AT8XRPJ-ISw9Rw5cf5a1GKEpsGmks3OFQxX4O9b_QZDDkw&oe=632A16E6"></img> 
            : <FontAwesomeIcon className={cx("icon-button")} icon={icon} />
          }

        </div>
      </button>
    </Tippy>
  );
}

export default Button2;
