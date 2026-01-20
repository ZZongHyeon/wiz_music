import ProgramItem from "./ProgramItem";
import { programList } from "./ProgramList";

const Program = () => {
  return (
    <section className="programs-section">
      <div className="section-header">
        <span className="section-label">PROGRAMS</span>
        <h2 className="section-title">교육 프로그램</h2>
      </div>

      <div className="programs-grid">
        {programList.map((item, index) => (
          <ProgramItem
            key={index}
            badge={item.badge}
            title={item.title}
            desc={item.desc}
            list={item.list}
            primary={item.primary}
          />
        ))}
      </div>
    </section>
  );
};

export default Program;
