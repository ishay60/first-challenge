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
          <SkillList />
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
    // const randomColor = getRandomColor(); // Generate a random color , very cool yet very ugly
    return (
      <div
        key={index}
        // style={{ backgroundColor: randomColor }} // Use the random color as the background color
        className="description"
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
  return ishay.skills.map((skill, index) => {
    return (
      <div className="skill-list">
        <Skill key={index} skill={skill} color={ishay.color[index]} />
      </div>
    );
  });
}
const Skill = (props) => (
  <div className="skill" style={{ backgroundColor: props.color }}>
    <p>{props.skill} 💪</p>
  </div>
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
  skills: ["c++", "JS", "React", "Unity/C#", "HTML", "Css"],
  color: [
    "aquamarine",
    "yellow",
    "dodgerblue",
    "teal",
    "orange",
    "cornflowerblue",
  ],
};

