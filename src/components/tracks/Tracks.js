import React from "react";
import { Consumer } from "../../context";
import Spinner from "../layout/Spinner";
import Track from "./Track";

const Tracks = () => {
  return (
    <Consumer>
      {value => {
        const { track_list } = value;

        if (!track_list || track_list.length === 0) {
          return <Spinner />;
        } else {
          return (
            <React.Fragment>
              <div className="row">
                {track_list.map((t, i) => (
                  <Track key={i} track={t.track} />
                ))}
              </div>
            </React.Fragment>
          );
        }
      }}
    </Consumer>
  );
};

export default Tracks;
