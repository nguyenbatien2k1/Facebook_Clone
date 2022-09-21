import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./BoxButton.module.scss";

const cx = classNames.bind(styles);

function BoxButton({data= {}}) {
  return (
    <div className={cx("boxbutton")}>
      <FontAwesomeIcon className={cx("icon")} icon={data.icon} />
      <span>{data.title}</span>
    </div>
  );
}

export default BoxButton;
