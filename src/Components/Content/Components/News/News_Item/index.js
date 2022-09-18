import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./NewsItem.module.scss";

const cx = classNames.bind(styles);

function NewsItem({ main = false, data = {} }) {

  return (
    <div className={cx("newsItem")}>
      {main ? (
        <>
          <div className={cx("news-img1")}>
            <img
              src="https://scontent.fhan15-2.fna.fbcdn.net/v/t39.30808-1/305573503_1717436901948469_3978030599460626886_n.jpg?stp=dst-jpg_p160x160&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=6_sd9Yhhy38AX8i4E6d&_nc_ht=scontent.fhan15-2.fna&oh=00_AT8cK5aO25a76hxUe2AAygv2nB4clylVRE3_fI-k4Z2hag&oe=632C1126"
              alt="Image"
            />
          </div>
          <FontAwesomeIcon className={cx("icon-plus")} icon={faPlus} />
          <div
            style={{
              padding: "20px 30px",
              fontSize: "14px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <span>Tạo tin</span>
          </div>
        </>
      ) : (
        <div className={cx("news-img2")}>
            <div className={cx("avatar")}>
                <img src={data.srcAvatar} alt="Avatar"></img>
            </div>
          <img
            src={data.srcImg}
            alt="Image"
          />
          <span className={cx("name")}>{data.name}</span>
        </div>
      )}
    </div>
  );
}

export default NewsItem;
