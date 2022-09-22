import classNames from "classnames/bind";
import styles from "./News.module.scss";

import NewsButton from "./News_Button";
import NewsItem from "./News_Item";

import {news} from "~/Components/Content/Data";

const cx = classNames.bind(styles);

console.log(news)

function News() {
  return (
    <>
      <div className={cx("news")}>
        <div className={cx("list-button")}>
          <NewsButton title={"Tin"} active />
          <NewsButton title={"Reels"} />
          <NewsButton title={"Phòng họp mặt"} />
        </div>
        <div className={cx("border-bottom")}></div>

        <div className={cx("menu-news")}>
          <NewsItem main />
          {news.map((item, index) => {
            return <NewsItem key={index} data={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default News;
