import PhoneIcon from "../icon_components/PhoneIcon";
import LocationIcon from "../icon_components/LocationIcon";
import InstagramIcon from "../icon_components/InstagramIcon";
import KakaoIcon from "../icon_components/KakaoIcon";

export const footerNavList = [
  {
    label: "전화",
    href: "tel:010-5687-3749",
    icon: PhoneIcon,
  },
  {
    label: "위치",
    href: "https://map.naver.com/p/entry/place/1892006808",
    icon: LocationIcon,
    blank: true,
  },
  {
    label: "인스타그램",
    href: "https://www.instagram.com/js_wiz_music/",
    icon: InstagramIcon,
    blank: true,
  },
  {
    label: "카카오톡",
    href: "https://open.kakao.com/",
    icon: KakaoIcon,
    blank: true,
  },
];
