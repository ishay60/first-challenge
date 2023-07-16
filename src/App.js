import "./App.css";
import "./index.css";
import ishayPhoto from "./photos/ishayPhoto.jpg";

// first-challenge\src\photos\ishayPhoto.jpg

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Avatar />
        <div className="data">
          <Intro />
          <SkillList className="skill-list" />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src={ishayPhoto} alt="" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>{ishay.name}</h1>
      <p>
        <Description />
      </p>
    </div>
  );
}

function Description() {
  return ishay.description.map((description, index) => {
    return (
      <div key={index} description={description}>
        {description}
      </div>
    );
  });
}

function SkillList() {
  return ishay.skills.map((skill, index) => {
    return (
      <div>
        <Skill className="skill" key={index} skill={skill} />
      </div>
    );
  });
}
const Skill = ({ skill }) => <p>{skill} 💪</p>;

const ishay = {
  name: "Ishay Rosengarten",
  photo: ishayPhoto,
  description: [
    " Highly passionate about technology and software development.",
    "Quick learner with a strong ability to adapt to new technologies and programming languages.",
  ],
  skills: ["c++", "JS", "React", "Unity/C#", "HTML", "Css"],
};
