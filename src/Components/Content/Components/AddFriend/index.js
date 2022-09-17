import classNames from "classnames/bind";
import styles from "./AddFriend.module.scss";

const cx = classNames.bind(styles);

function AddFriend({ src, name }) {
  return (
    <div className={cx("add-friend")}>
      <div className={cx("avatar")}>
        <img src={src} />
      </div>
      <div className={cx("info")}>
        <div className={cx("wrapper")}>
          <span style={{fontWeight: "500"}}>{name}</span>
          <span style={{ color: "gray", fontSize: "13px", marginLeft: "20px" }}>
            2 ngày
          </span>
        </div>
        <span style={{ color: "gray", fontSize: "13px" }}>1 bạn chung</span>{" "}
        <br />
        <div className={cx("inner")}>
          <button className={cx("submit")}>Xác nhận</button>
          <button className={cx("delete")}>Xóa</button>
        </div>
      </div>
    </div>
  );
}

export default AddFriend;
