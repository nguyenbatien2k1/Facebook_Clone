import classNames from "classnames/bind";
import styles from "./NewsButton.module.scss";

const cx = classNames.bind(styles);

function NewsButton({ active = false, title }) {
  return (
    <div className={cx("wrapper")}>
      <button className={cx("newsButton", {active})}>
        <div>{title}</div>
      </button>
      {active ? <div className={cx("border-bottom")}></div> : ""}
    </div>
  );
}

export default NewsButton;
