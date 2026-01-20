import heroImg from "../../assets/test.png";

const Hero = () => {
  return (
    <>
      {/* 히어로 섹션 */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img
            src={heroImg || "/placeholder.svg"}
            alt="위즈음악학원"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <span className="hero-badge">MUSIC ACADEMY</span>
          <h1 className="hero-title">위즈음악학원</h1>
          <p className="hero-description">음악과 함께하는 즐거운 배움의 시작</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
