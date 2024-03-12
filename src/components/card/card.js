import Video from "./video";
import "./card.css";

// name refers to exercise name
export default function Card({
  name,
  link,
  numberReps,
  numberSets,
  notes,
  target,
}) {
  return (
    <div className="card">
      <div className="top">
        <h4 className="exercise-title">
          <h3>{name}</h3> Reps: {numberReps} Sets: {numberSets}
        </h4>
      </div>
      <Video title={name} video_link={link} />
      <div className="bottom">
        <div className="targets">
          <h4>Muscles: </h4>
          <h5>{target}</h5>
        </div>
        <ul className="notes">
          {notes?.map((noteItem) => (
            <li className="note-item">{noteItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
