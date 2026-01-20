import { MapPinIcon, ArrowIcon } from "../../icon_components";

const Location = () => {
  return (
    <section className="location-section">
      <div className="section-header">
        <span className="section-label">LOCATION</span>
        <h2 className="section-title">오시는 길</h2>
      </div>

      <div className="location-card">
        <div className="location-icon">
          <MapPinIcon size={32} />
        </div>

        <div className="location-info">
          <p className="location-address">물금로 134 상가 2층</p>
          <p className="location-address-sub">지번: 가촌리 1272-1</p>
        </div>

        <a
          href="https://map.naver.com/p/entry/place/1892006808?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.9967365&lat=35.3160460"
          target="_blank"
          rel="noopener noreferrer"
          className="location-button"
        >
          <ArrowIcon size={18} />
          네이버 지도에서 보기
        </a>
      </div>
    </section>
  );
};

export default Location;
