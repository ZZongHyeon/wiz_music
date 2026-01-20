import IconBase from "./IconBase";

const MusicNoteIcon = ({ size = 24 }) => (
  <IconBase width={size} height={size} strokeWidth={2}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </IconBase>
);

export default MusicNoteIcon;
