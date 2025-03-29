import "./App.css";
import Intro from "./components/Intro";
import Avatar from "./components/Avatar";
import SkillList from "./components/SkillList";
import skills from "./assets/skills";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList skills={skills} />
      </div>
    </div>
  );
}

export default App;
