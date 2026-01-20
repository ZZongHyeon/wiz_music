const AcademyItem = ({ Icon, title, desc }) => {
  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon />
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc">{desc}</p>
    </div>
  );
};

export default AcademyItem;
