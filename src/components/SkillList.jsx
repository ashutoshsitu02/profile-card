const SkillList = ({ skills }) => {
  const mySkill = skills.map((skill, index) => {
    return (
      <span key={index} style={{ backgroundColor: skill.color }}>
        {skill.skill}
        {skill.level.toUpperCase() == "INTERMEDIATE" && <span>&#128077;</span>}
        {skill.level.toUpperCase() == "ADVANCED" && <span>&#128170;</span>}
        {skill.level.toUpperCase() == "BEGINNER" && <span>&#128118;</span>}
      </span>
    );
  });

  return (
    <>
      <div className="skill-list">
        <div className="skill">{mySkill}</div>
      </div>
    </>
  );
};

export default SkillList;
