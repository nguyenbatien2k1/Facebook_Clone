import { faChevronRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./NewsItem.module.scss";

import images from "~/assets/images";

const cx = classNames.bind(styles);

function NewsItem({ main = false, data = {} }) {

  return (
    <div className={cx("newsItem")}>
      {main ? (
        <>
          <div className={cx("news-img1")}>
            <img
              src={images.news.src1}
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
