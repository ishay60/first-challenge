import "./App.css";
import "./index.css";
import ishayPhoto from "./photos/ishayPhoto.jpg";

// first-challenge\src\photos\ishayPhoto.jpg

export default function App() {
  return (
    <div className="container">
      <>
        <div className="card">
          <Avatar />
          <div className="data">
            <Intro />
            <span>
              <SkillList className="skill-list" />
            </span>
          </div>
        </div>
      </>
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
    // const randomColor = getRandomColor(); // Generate a random color , very cool yet very ugly
    return (
      <div
        key={index}
        className="description"
        // style={{ backgroundColor: randomColor }} // Use the random color as the background color
      >
        {description}
      </div>
    );
  });
}

// function getRandomColor() {
//   //this is some chat gpt evil forces right there
//   const letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((skill, index) => (
        <li key={index}>
          <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        </li>
      ))}
    </ul>
  );
}

const Skill = ({ skill, color, level }) => (
  <>
    <span className="skill" style={{ backgroundColor: color }}>
      <>
        <p>
          {skill} {level === "intermediate" ? "🪫" : "💪"}
        </p>
      </>
    </span>
  </>
);

const ishay = {
  name: "Ishay Rosengarten",
  photo: ishayPhoto,
  description: [
    "Highly passionate about technology and software development.",
    "Quick learner with a strong ability to adapt to new technologies and programming languages.",
    "Cooks the best meals in Tel Aviv 👨🏼‍🍳",
    "Game Dev enthusiast",
  ],
};

const skills = [
  {
    skill: "JS",
    level: "beginner",
    color: "yellow",
  },
  {
    skill: "React",
    level: "begginer",
    color: "dodgerblue",
  },
  {
    skill: "C++",
    level: "intermediate",
    color: "aquamarine",
  },
  {
    skill: "Unity/C#",
    level: "begginer",
    color: "teal",
  },
  {
    skill: "HTML",
    level: "beginner",
    color: "orange",
  },
  {
    skill: "CSS",
    level: "begginer",
    color: "cornflowerblue",
  },
];