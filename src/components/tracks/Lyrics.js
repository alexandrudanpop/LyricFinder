import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "../layout/Spinner";
import { Consumer } from "../../context";
import { cors_bypass, api_key, api_url } from "../../constants";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {},
    found: null
  };

  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const { id } = this.props.match.params;
    const { data } = await axios.get(
      `${cors_bypass}${api_url}/track.lyrics.get?track_id=${id}&apikey=${api_key}`
    );

    if (data.message.header && data.message.header.status_code === 404) {
      this.setState({
        ...this.state,
        lyrics: {},
        found: false
      });
    } else {
      this.setState({
        ...this.state,
        lyrics: data.message.body.lyrics,
        found: true
      });
    }
  };

  formatLyrics = lyricsBody =>
    lyricsBody
      .replace("******* This Lyrics is NOT for Commercial use *******", "")
      .split(/(?=[A-Z])/)
      .map((l, i) => <p key={i}>{l}</p>);

  render() {
    const { lyrics } = this.state;
    const { id } = this.props.match.params;

    return (
      <Consumer>
        {value => {
          const { track_list } = value;

          const selectedTrack =
            track_list.length > 0 &&
            track_list.find(t => t.track.track_id.toString() === id)
              ? track_list.find(t => t.track.track_id.toString() === id).track
              : {};

          if (
            this.state.found === false ||
            (this.state.found && !this.state.lyrics.lyrics_body)
          ) {
            return (
              <div className="card">
                <div className="card-body">
                  <h4>No Lyrics found</h4>
                  <Link className="btn btn-info" to="/">
                    Go Back
                  </Link>
                </div>
              </div>
            );
          }

          return (
            <div>
              {this.state.lyrics && this.state.lyrics.lyrics_body ? (
                <React.Fragment>
                  <div className="card">
                    <div
                      className="card-header"
                      style={{ backgroundColor: "rgb(251, 250, 252)" }}
                    >
                      <h3>
                        {`${selectedTrack.artist_name} - ${
                          selectedTrack.track_name
                        }`}
                      </h3>
                    </div>
                    <div className="card-body">
                      <strong>Genre: </strong>
                      {selectedTrack &&
                      selectedTrack.primary_genres &&
                      selectedTrack.primary_genres.music_genre_list.length > 0
                        ? selectedTrack.primary_genres.music_genre_list[0]
                            .music_genre.music_genre_name
                        : ""}
                      <br />
                      <br />
                      {this.formatLyrics(lyrics.lyrics_body)}
                    </div>
                    <div
                      className="card-footer"
                      style={{ backgroundColor: "rgb(251, 250, 252)" }}
                    >
                      <Link className="btn btn-info" to="/">
                        Back
                      </Link>
                    </div>
                  </div>
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
