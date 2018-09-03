import React from "react";
import { Link } from "react-router-dom";

const Track = ({ track }) => (
  <div className="col-md-6">
    <div
      className="card mb-4 shadow-sm"
      style={{ backgroundColor: "rgb(251, 250, 252)", textAlign: "center" }}
    >
      <div className="card-body">
        <h5>{track.artist_name}</h5>
        <p className="card-text">
          <strong>
            <i className="fas fa-play" />
            Track
          </strong>
          : {track.track_name}
          <br />
          <strong>
            <i className="fas fa-compact-disc" />
            Album
          </strong>
          : {track.album_name}
        </p>
        <Link
          to={`track/${track.track_id}/lyrics`}
          className="btn btn-info btn-block btn-sm"
        >
          <i className="fas fa-chevron-right">View lyrics </i>
        </Link>
      </div>
    </div>
  </div>
);

export default Track;
