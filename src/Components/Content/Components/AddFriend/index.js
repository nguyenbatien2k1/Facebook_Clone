import classNames from "classnames/bind";
import styles from "./AddFriend.module.scss";

const cx = classNames.bind(styles);

function AddFriend({ src, name, time, mutualFriends, data= {} }) {
  return (
    <div className={cx("add-friend")}>
      <div className={cx("avatar")}>
        <img src={data.src} />
      </div>
      <div className={cx("info")}>
        <div className={cx("wrapper")}>
          <span style={{fontWeight: "500"}}>{data.name}</span>
          <span style={{ color: "gray", fontSize: "13px", marginLeft: "20px" }}>
            {data.time}
          </span>
        </div>
        <span style={{ color: "gray", fontSize: "13px" }}>{data.mutualFriends ? `${data.mutualFriends} bạn chung` : ""}</span>{" "}
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
