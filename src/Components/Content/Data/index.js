import { faComment, faThumbsUp } from "@fortawesome/free-regular-svg-icons";
import {
  faChevronCircleDown,
  faRectangleAd,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

import images from "~/assets/images";

export const arr = [
  {
    name: "Nguyễn Bá Tiên",
    src: images.arr.src1, 
  },
  {
    name: "Bạn bè",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png",
  },
  {
    name: "Nhóm",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png",
  },
  {
    name: "Đã lưu",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png",
  },
  {
    name: "Trang",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png",
  },
  {
    name: "Marketplace",
    src: "https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png",
  },
  {
    name: "Xem thêm",
    icon: faChevronCircleDown,
  },
];

export const shortcuts = [
  {
    src: images.shortcuts.src1,
    name: "Học lập trình web (F8 - Fullstack.edu.vn)",
  },
  {
    src: images.shortcuts.src2,
    name: "QH-2019-I/CQ-C-B",
  },
  {
    src: images.shortcuts.src3,
    name: "ReactJS Việt Nam",
  },
  {
    src: images.shortcuts.src4,
    name: "Kiếm tiền online",
  },
  {
    src: images.shortcuts.src5,
    name: "Candy Crush Saga",
  },
  {
    icon: faChevronCircleDown,
    name: "Xem thêm",
  },
];

export const friends = [
  {
    name: "Thiên Mạnh Quy",
    src: images.friends.src1
  },
  {
    name: "Voi Con",
    src: images.friends.src2
  },
  {
    name: "Nguyễn Bá Vượng",
    src: images.friends.src3
  },
  {
    name: "Xuân Sơn",
    src: images.friends.src4
  },
  {
    name: "Hoàng Công Hiệu",
    src: images.friends.src5
  },
  {
    name: "Hoàng Hà",
    src: images.friends.src6
  },
  {
    name: "Trần Đăng Tuấn",
    src: images.friends.src7
  },
  {
    name: "Trần Đình Long",
    src: images.friends.src8
  },
  {
    name: "Trần Quang Huy",
    src: images.friends.src9
  },
  {
    name: "Trần Văn Nam",
    src: images.friends.src10
  },
];

export const personalPage = [
  {
    src: images.shortcuts.src4,
    name: "Kiếm tiền online",
  },
  {
    icon: faRectangleAd,
    name: "Tạo trang quảng cáo",
  },
];

export const addFriends = [
  {
    name: "Lê Quốc Huy",
    src: images.addFriends.src1,
    time: "8 giờ",
    mutualFriends: 8,
  },
  {
    name: "Tu Tiên",
    src: images.addFriends.src2,
    time: "1 ngày",
    mutualFriends: 999,
  },
  {
    name: "Nguyễn Hoàng Long",
    src: images.addFriends.src3,
    time: "2 ngày",
    mutualFriends: 1,
  },
];

export const news = [
  {
    name: "Nguyễn Kim Quyền",
    srcAvatar: images.news.src2,
    srcImg: images.news.src2,
  },
  {
    name: "Nguyễn Thế Hãnh",
    srcAvatar: images.news.src3,
    srcImg: images.news.src3,
  },
  {
    name: "Lê Thị Hương",
    srcAvatar: images.news.src4, 
    srcImg: images.news.src4,
  }
]

export const boxBtns = [
  {
    icon: faThumbsUp,
    title: "Thích"
  },
  {
    icon: faComment,
    title: "Bình luận"
  },
  {
    icon: faShare,
    title: "Chia sẻ"
  }
]

export const boxes = [
  {
    avatar: images.boxes.src1,
    title: "Lang Thang Hà Nội",
    time: "1 giờ",
    description: `Báo tân sinh viên =)))
                  Ảnh: Quân Nhật
                  Cre: Beatvn
    `,
    img: images.boxes.box1,
    quantity: "11K",
    comments: "3,4K bình luận",
    shares: "40 lượt chia sẻ"
  },
  {
    avatar: images.boxes.src2,
    checked: images.boxes.checked,
    title: "Beatvn",
    time: "45 phút",
    description: `Xong lúc nó báo cho thì...`,
    img: images.boxes.box2,
    quantity: "4,7K",
    comments: "521 bình luận",
    shares: "15 lượt chia sẻ"
  },
  {
    avatar: images.boxes.src3,
    checked: images.boxes.checked,
    title: "Trung tâm Tin tức VTV24",
    time: "2 giờ",
    description: ``,
    img: images.boxes.box3,
    quantity: "10K",
    comments: "20 bình luận",
    shares: "150 lượt chia sẻ"
  },
  {
    avatar: images.boxes.src4,
    checked: images.boxes.checked,
    title: "Theanh28 Entertainment",
    time: "26 phút",
    description: `< GÓC CHIẾN THẦN ẨM THỰC >`,
    img: images.boxes.box4,
    quantity: "16K",
    comments: "1,7K bình luận",
    shares: "58 lượt chia sẻ"
  },
  {
    avatar: images.boxes.src5,
    title: "Dang iu mot chut thoi nha",
    time: "40 phút",
    description: `?`,
    img: images.boxes.box5,
    quantity: "6K",
    comments: "1,6K bình luận",
    shares: "62 lượt chia sẻ"
  },
  {
    avatar: images.boxes.src6,
    title: "Dang iu mot chut thoi nha",
    time: "20 phút",
    description: `Hàng nhà trồng được có khác =)))`,
    img: images.boxes.box6,
    quantity: "1,6K",
    comments: "41 bình luận",
    shares: "10 lượt chia sẻ"
  },
]