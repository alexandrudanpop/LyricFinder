import React, { Component } from "react";
import axios from "axios";
import Spinner from "../layout/Spinner";

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
    const { history } = this.props;
    return (
      <div>
        <h2>Lyrics</h2>
        {this.state.lyrics.lyrics_body ? (
          <React.Fragment>
            <p> {lyrics.lyrics_body}</p>
            <button className="btn btn-info" onClick={() => history.push("/")}>
              Back
            </button>
          </React.Fragment>
        ) : (
          <Spinner />
        )}
      </div>
    );
  }
}

export default Lyrics;
