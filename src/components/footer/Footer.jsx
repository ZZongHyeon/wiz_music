const Footer = () => {
  return (
    <>
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
    </>
  );
};

export default Footer;
