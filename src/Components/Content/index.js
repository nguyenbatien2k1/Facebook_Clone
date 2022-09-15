import classNames from "classnames/bind";
import styles from "./Content.module.scss";

import Button from "./Components/Button";

import {
  faBookmark,
  faChevronCircleDown,
  faFlag,
  faStore,
  faUserGroup,
  faUsersLine,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Content() {
  return (
    <div className={cx("main")}>
      <div className={cx("sideBar-left")}>
        <Button name={"Nguyễn Bá Tiên"}></Button>
        <Button icon={faUserGroup} name={"Bạn bè"}></Button>
        <Button icon={faUsersLine} name={"Nhóm"}></Button>
        <Button icon={faBookmark} name={"Đã lưu"}></Button>
        <Button icon={faFlag} name={"Trang"}></Button>
        <Button icon={faStore} name={"Marketplace"}></Button>
        <Button icon={faChevronCircleDown} name={"Xem thêm"}></Button>
        <div className={cx("border-bottom")}></div>
        
      </div>

      <div className={cx("content")}>main</div>

      <div className={cx("sideBar-right")}>right</div>
    </div>
  );
}

export default Content;
