import "./Home.css";
import heroImg from "../assets/test.png";

const Home = () => {
  return (
    <div className="home-container">
      {/* 헤더 */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <span className="logo-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M9 18V5l12-2v13"></path>
                <circle cx="6" cy="18" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
              </svg>
            </span>
            <span className="logo-text">위즈음악학원</span>
          </div>
        </div>
      </header>

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

      {/* 메인 콘텐츠 */}
      <main className="main-content">
        {/* 원장 소개 섹션 */}
        <section className="director-section">
          <div className="director-card">
            <span className="director-label">원장</span>
            <h2 className="director-name">정다운</h2>
            <p className="director-quote">
              "음악은 누구나 즐길 수 있습니다.
              <br />
              학생 한 분 한 분의 성장을 위해
              <br />
              항상 최선을 다하겠습니다."
            </p>
          </div>
        </section>

        {/* 학원 특징 섹션 */}
        <section className="features-section">
          <div className="section-header">
            <span className="section-label">OUR STRENGTHS</span>
            <h2 className="section-title">위즈음악학원의 특별함</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="feature-title">6세부터 성인까지</h3>
              <p className="feature-desc">모든 연령대를 위한 맞춤 교육</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h3 className="feature-title">체계적인 1:1 레슨</h3>
              <p className="feature-desc">커리큘럼 기반 개인 맞춤 수업</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="feature-title">콩쿨 · 연주회</h3>
              <p className="feature-desc">다양한 무대 경험의 기회</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="feature-title">영상 피드백</h3>
              <p className="feature-desc">주기적인 영상과 피드백 전달</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h3 className="feature-title">등하원 알림</h3>
              <p className="feature-desc">알람문자 · 도보픽업 서비스</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="feature-title">네이버 밴드 소통</h3>
              <p className="feature-desc">부모님과의 원활한 커뮤니케이션</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="10 8 16 12 10 16 10 8"></polygon>
                </svg>
              </div>
              <h3 className="feature-title">예술융합특강</h3>
              <p className="feature-desc">유초등부 수요일 특별 수업</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="feature-title">성인 취미반</h3>
              <p className="feature-desc">월~토요일 레슨 가능</p>
            </div>
          </div>
        </section>

        {/* 프로그램 섹션 */}
        <section className="programs-section">
          <div className="section-header">
            <span className="section-label">PROGRAMS</span>
            <h2 className="section-title">교육 프로그램</h2>
          </div>
          <div className="programs-grid">
            <div className="program-card program-card-primary">
              <span className="program-badge">유아 · 초등</span>
              <h3 className="program-title">키즈 클래스</h3>
              <p className="program-desc">
                기초부터 탄탄하게, 음악의 즐거움을 알아가는 시간
              </p>
              <ul className="program-list">
                <li>기초 음악 이론</li>
                <li>피아노 실기</li>
                <li>수요일 예술융합특강</li>
              </ul>
            </div>
            <div className="program-card">
              <span className="program-badge">중등 · 고등</span>
              <h3 className="program-title">주니어 클래스</h3>
              <p className="program-desc">체계적인 커리큘럼으로 실력 향상</p>
              <ul className="program-list">
                <li>심화 음악 이론</li>
                <li>콩쿨 · 연주회 준비</li>
                <li>입시 대비 레슨</li>
              </ul>
            </div>
            <div className="program-card">
              <span className="program-badge">성인</span>
              <h3 className="program-title">성인 취미반</h3>
              <p className="program-desc">바쁜 일상 속 음악으로 힐링하세요</p>
              <ul className="program-list">
                <li>월~토요일 유연한 시간</li>
                <li>원하는 곡 연주</li>
                <li>1:1 맞춤 레슨</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 위치 정보 섹션 */}
        <section className="location-section">
          <div className="section-header">
            <span className="section-label">LOCATION</span>
            <h2 className="section-title">오시는 길</h2>
          </div>
          <div className="location-card">
            <div className="location-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
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
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              네이버 지도에서 보기
            </a>
          </div>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18V5l12-2v13"></path>
              <circle cx="6" cy="18" r="3"></circle>
              <circle cx="18" cy="16" r="3"></circle>
            </svg>
            <span>위즈음악학원</span>
          </div>
          <div className="footer-info">
            <p>물금로 134 상가 2층</p>
            <p>Tel. 010-5687-3749</p>
          </div>
          <p className="footer-copyright">
            © 2026 위즈음악학원. All rights reserved.
          </p>
        </div>
      </footer>

      {/* 하단 고정 네비게이션 바 */}
      <nav className="bottom-nav">
        <div className="bottom-nav-inner">
          <a href="tel:010-5687-3749" className="bottom-nav-item">
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>전화</span>
          </a>
          <a
            href="https://map.naver.com/p/entry/place/1892006808?placePath=%252Fhome%253Fentry%253Dplt&searchType=place&lng=128.9967365&lat=35.3160460"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-nav-item"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>위치</span>
          </a>
          <a
            href="https://www.instagram.com/js_wiz_music/"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-nav-item"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>인스타그램</span>
          </a>
          <a
            href="https://open.kakao.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="bottom-nav-item"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3C6.48 3 2 6.58 2 11c0 2.8 1.86 5.25 4.64 6.67-.15.56-.54 2.03-.62 2.35-.1.39.14.39.3.28.12-.08 1.95-1.32 2.75-1.86.61.09 1.24.14 1.88.14 5.52 0 10-3.58 10-8s-4.48-8-10-8z" />
            </svg>
            <span>카카오톡</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Home;
