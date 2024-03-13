import Navbar from "./components/navbar/navbar";
import background from "./gym1.jpg";
import "./app.css";
import Card from "./components/card/card";
import exercises from "./exercises.json";

export default function App() {
  return (
    <>
      <div className="imgonnakms">
        <Navbar></Navbar>
        <div className="home" style={{ backgroundImage: `url(${background})` }}>
          <div className="title">ACHIEVE YOUR DREAM PHYSIQUE</div>
          <div>
            <button className="beginner-button" formAction="submit">
              BEGINNER WORKOUT PLAN
            </button>
          </div>
        </div>
        <h2 className="header" id="repo">
          Exercise Repository
        </h2>
        <div className="exercises">
          {exercises.map((exercise) => (
            <Card
              name={exercise.name}
              link={exercise.link}
              numberReps={exercise.numberReps}
              numberSets={exercise.numberSets}
              notes={exercise.notes}
              target={exercise.target}
            />
          ))}
        </div>
        <h2 className="header" id="repo">
          Beginner Workout Program
        </h2>
      </div>
    </>
  );
}
