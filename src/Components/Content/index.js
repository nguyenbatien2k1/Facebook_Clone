import classNames from "classnames/bind";
import styles from "./Content.module.scss";

import Button from "./Components/Button";
import AddFriend from "./Components/AddFriend";

import {
  faChevronCircleDown,
  faEllipsis,
  faRectangleAd,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button1 from "../Header/Components/Button1";
const cx = classNames.bind(styles);

const arr = [
  {
    name: "Nguyễn Bá Tiên",
    src: "https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/305573503_1717436901948469_3978030599460626886_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6_sd9Yhhy38AX8i4E6d&_nc_ht=scontent.fhan15-2.fna&oh=00_AT8XRPJ-ISw9Rw5cf5a1GKEpsGmks3OFQxX4O9b_QZDDkw&oe=632A16E6"
  },
  {
    name: "Bạn bè",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
  },
  {
    name: "Bạn bè",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
  },
  {
    name: "Bạn bè",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
  },
  {
    name: "Bạn bè",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"
  },
]

function Content() {
  return (
    <div className={cx("main")}>
      <div className={cx("sideBar-left")}>
        <Button src={"https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/305573503_1717436901948469_3978030599460626886_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6_sd9Yhhy38AX8i4E6d&_nc_ht=scontent.fhan15-2.fna&oh=00_AT8XRPJ-ISw9Rw5cf5a1GKEpsGmks3OFQxX4O9b_QZDDkw&oe=632A16E6"} name={"Nguyễn Bá Tiên"}></Button>
        <Button src={"https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png"} name={"Bạn bè"}></Button>
        <Button src={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"} name={"Nhóm"}></Button>
        <Button src={"https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png"} name={"Đã lưu"}></Button>
        <Button src={"https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png"} name={"Trang"}></Button>
        <Button src={"https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png"} name={"Marketplace"}></Button>
        <Button icon={faChevronCircleDown} name={"Xem thêm"}></Button>
        {/* {
          arr.map((item, index) => (
            <Button key={index} data={item}></Button>
          ))
        } */}
        <div className={cx("border-bottom")}></div> 
        <div className={cx("container")}>
          <div className={cx("inner")}>
            <h4>Lối tắt của bạn</h4>
            <div className={cx("update")}>Chỉnh sửa</div>
          </div>
          <Button src={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"} name={"Học lập trình web (F8 - Fullstack.edu.vn)"}></Button>
          <Button src={"https://scontent.fhan15-1.fna.fbcdn.net/v/t1.6435-9/68751566_954053758268367_7863021435965407232_n.jpg?stp=cp0_dst-jpg_p50x50&_nc_cat=101&ccb=1-7&_nc_sid=ac9ee4&_nc_ohc=pVRRq2KOU7cAX84gFlL&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8-d70Oni-F6lbGD6Qb7m5f8hxVa3kx7vdggD_FwijcdA&oe=634C1815"} name={"QH-2019-I/CQ-C-B"}></Button>
          <Button src={"https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png"} name={"ReactJS Việt Nam"}></Button>
          <Button src={"https://scontent.fhan15-2.fna.fbcdn.net/v/t39.2081-6/22088589_1654976451201719_5191478939503034368_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=eaa83b&_nc_ohc=o4ddV4ecoSIAX9ycft_&_nc_ht=scontent.fhan15-2.fna&oh=00_AT8w33hMGBvRfIOHdx1T93IdAz2iQp5--lLfZsBvfOgomQ&oe=632AC602"} name={"Candy Crush Saga"}></Button>
          <Button src={"https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/290492599_104069832363233_6709543810953852965_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=nDQ-Flb9CDgAX9IIZ2x&_nc_ht=scontent.fhan15-1.fna&oh=00_AT96zHwxrj9hnRleaHbUo0Srnd4JdnQPdGLtFtkeCvW7fA&oe=6329E6B6"} name={"Kiếm tiền online"}></Button>
          <Button icon={faChevronCircleDown} name={"Xem thêm"}></Button>  

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

      <div className={cx("content")}>main</div>

      <div className={cx("sideBar-right")}>
        <div className={cx("container1")}>
          <div className={cx("inner1")}>
            <h4>Trang và trang cá nhân của bạn</h4>
            <FontAwesomeIcon className={cx("icon_ellip")} icon={faEllipsis} />
          </div>
          <Button src={"https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-1/290492599_104069832363233_6709543810953852965_n.jpg?stp=cp0_dst-jpg_s40x40&_nc_cat=105&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=nDQ-Flb9CDgAX9IIZ2x&_nc_ht=scontent.fhan15-1.fna&oh=00_AT96zHwxrj9hnRleaHbUo0Srnd4JdnQPdGLtFtkeCvW7fA&oe=6329E6B6"} name={"Kiếm tiền online"}></Button>
          <Button icon={faRectangleAd} name={"Tạo trang quảng cáo"}></Button>
          <div className={cx("border-bottom")}></div>
          
          <div className={cx("inner2")}>
            <h4>Lời mời kết bạn</h4>
            <div className={cx("update2")}>Xem tất cả</div>
            <br/>
          </div>
            <AddFriend src="https://img.meta.com.vn/Data/image/2022/03/15/anh-anime-chibi-3.jpg" name="Tu Tiên" />
            <AddFriend src="https://scontent.xx.fbcdn.net/v/t39.30808-1/305810068_155170827128419_4184976533105176831_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=jDQ4qNoCleUAX9mEr46&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=00_AT_IlwNYe5XKmeAEi8MO5FCgelqnDwn0n43FG-LwZbN_Cw&oe=632A11A0" name="Nguyễn Hoàng Long" />
            <div className={cx("border-bottom")}></div>

          <div className={cx("inner3")}>
            <h4>Sinh nhật</h4>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
