import IconBase from "./IconBase";

const ArrowIcon = ({ size = 18 }) => (
  <IconBase width={size} height={size} strokeWidth={2}>
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </IconBase>
);

export default ArrowIcon;
