import ReactPLayer from "react-player";

import "./index.css";

const Video = () => (
  <div className="video-container">
    <ReactPLayer
      url="https://stonepedia.in/wp-content/uploads/2024/10/Stonepedia-T-5.mp4"
      playing={true}
      controls
      loop
      width="100%"
      height="100%"
    />
  </div>
);

export default Video;
