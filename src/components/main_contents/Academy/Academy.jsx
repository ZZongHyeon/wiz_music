import AcademyItem from "./AcademyItem";
import academyList from "./AcademyList";

const Academy = () => {
  return (
    <section className="features-section">
      <div className="section-header">
        <span className="section-label">OUR STRENGTHS</span>
        <h2 className="section-title">위즈음악학원의 특별함</h2>
      </div>

      <div className="features-grid">
        {academyList.map((item, index) => (
          <AcademyItem
            key={index}
            Icon={item.Icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default Academy;
