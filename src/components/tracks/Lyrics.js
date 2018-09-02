import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { Consumer } from "../../context";

const api_key = "45c7b2fb9f4bdd2b54765bf91dd3e9a2";
const cors_bypass = "https://cors-anywhere.herokuapp.com";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    const { data } = await axios.get(
      `${cors_bypass}/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${api_key}`
    );

    this.setState({
      ...this.state,
      lyrics: data.message.body.lyrics
    });
  };

  render() {
    const { lyrics } = this.state;
    const { id } = this.props.match.params;

    return (
      <Consumer>
        {value => {
          const { track_list } = value;

          const selectedTrack =
            track_list.length > 0
              ? track_list.find(t => t.track.track_id.toString() === id).track
              : "";

          return (
            <div>
              <h3>{`${selectedTrack.artist_name} - ${
                selectedTrack.track_name
              }`}</h3>
              {this.state.lyrics.lyrics_body ? (
                <React.Fragment>
                  <p> {lyrics.lyrics_body}</p>
                  <Link className="btn btn-info" to="/">
                    Back
                  </Link>
                </React.Fragment>
              ) : (
                <Spinner />
              )}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Lyrics;
