import { memo } from "react";

const Profile = () => {
  return (
    <>
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
    </>
  );
};

export default memo(Profile);
