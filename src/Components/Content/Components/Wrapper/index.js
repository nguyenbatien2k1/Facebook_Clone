import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss"

import Button from "~/Components/Content/Components/Button";

const cx = classNames.bind(styles)

function Wrapper() {
    return (
        <div className={cx("wrapper")}>
            <Button  />
        </div>
    )
}

export default Wrapper;