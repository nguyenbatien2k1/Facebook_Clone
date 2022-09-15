import classNames from "classnames/bind";
import styles from "./Content.module.scss";

const cx = classNames.bind(styles);

function Content() {
    return ( <div className={cx("content")}> Hello MN</div> );
}

export default Content;