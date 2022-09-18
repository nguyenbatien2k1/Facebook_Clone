import classNames from "classnames/bind";
import styles from "./Content.module.scss";

import Button from "./Components/Button";
import AddFriend from "./Components/AddFriend";
import News from "./Components/News";

import {
  faChevronCircleDown,
  faEllipsis,
  faRectangleAd,
  faSearch,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Data
import {arr, shortcuts, personalPage, addFriends, friends} from "./Data"


const cx = classNames.bind(styles);


function Content() {
  return (
    <div className={cx("main")}>
      <div className={cx("sideBar-left")}>
        {
          arr.map((item, index) => (
            <Button key={index} data={item}></Button>
          ))
        }
        <div className={cx("border-bottom")}></div> 
        <div className={cx("container")}>
          <div className={cx("inner")}>
            <h4>Lối tắt của bạn</h4>
            <div className={cx("update")}>Chỉnh sửa</div>
          </div>
          {/* Shortcuts */}
          {
            shortcuts.map((item, index) => (
              <Button key={index} data={item} />
            ))
          }

          <ul className={cx("list-ul")}>
            <li><a href="google.com">Quyền riêng tư</a></li>
            <li><a href="google.com">Điều khoản</a></li>
            <li><a href="google.com">Quảng cáo</a></li>
            <li><a href="google.com">Lựa chọn quảng cáo</a></li>
            <li><a href="google.com">Xem thêm</a></li>
            <br/>
            <li><a href="google.com">Meta 2022</a></li>
          </ul> 
        </div>
      </div>

      <div className={cx("content")}>
          <News />
      </div>

      <div className={cx("sideBar-right")}>
        <div className={cx("container1")}>
          <div className={cx("inner1")}>
            <h4>Trang và trang cá nhân của bạn</h4>
            <FontAwesomeIcon className={cx("icon_ellip")} icon={faEllipsis} />
          </div>
          {/* Personal Page */}
          {
            personalPage.map((item, index) => (
              <Button key={index} data={item} />
            ))
          }
          <div className={cx("border-bottom")}></div>
          
          <div className={cx("inner2")}>
            <h4>Lời mời kết bạn</h4>
            <div className={cx("update2")}>Xem tất cả</div>
            <br/>
          </div>
            {/* AddFriends */}
            {
              addFriends.map((item, index) => (
                <AddFriend key={index} data={item} />
              ))
            }
            <div className={cx("border-bottom")}></div>

          <div className={cx("inner3")}>
            <h4>Người liên hệ</h4>
            <div className={cx("list-icon")}>
              <FontAwesomeIcon className={cx("icon-item")} icon={faVideo}/>
              <FontAwesomeIcon className={cx("icon-item")} icon={faSearch} />
              <FontAwesomeIcon className={cx("icon-item")} icon={faEllipsis}/>
            </div>
          </div>
          {/* Friends */}
          {
            friends.map((item, index) => (
              <Button key={index} data={item} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Content;
