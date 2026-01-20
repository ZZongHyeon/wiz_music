import MusicNoteIcon from "../icon_components/MusicNoteIcon";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">
            <MusicNoteIcon size={24} />
          </span>
          <span className="logo-text">위즈음악학원</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
