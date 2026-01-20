const ProgramItem = ({ badge, title, desc, list, primary }) => {
  return (
    <div className={`program-card ${primary ? "program-card-primary" : ""}`}>
      <span className="program-badge">{badge}</span>
      <h3 className="program-title">{title}</h3>
      <p className="program-desc">{desc}</p>

      <ul className="program-list">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramItem;
