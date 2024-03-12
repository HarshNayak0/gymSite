import "./card.css";

export default function Video({video_link, title}) {
    return <iframe title={title} src={video_link} className="video" allowFullScreen></iframe>
}