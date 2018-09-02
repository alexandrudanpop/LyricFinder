import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

const api_key = "45c7b2fb9f4bdd2b54765bf91dd3e9a2";
const cors_bypass = "https://cors-anywhere.herokuapp.com";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChange = e =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });

  onSubmit = async (dispatch, e) => {
    e.preventDefault();

    dispatch({
      type: "LOAD_TRACKS"
    });

    const { data } = await axios.get(
      `${cors_bypass}/http://api.musixmatch.com/ws/1.1/track.search?q_track=${
        this.state.trackTitle
      }&page_size=10&page=1&s_track_rating=desc&apikey=${api_key}`
    );

    dispatch({
      type: "SEARCH_TRACKS",
      payload: data.message.body.track_list
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h3 className="display-6 text-center">
                <i className="fas fa-music"> Search for a song</i>
              </h3>
              <p className="lead text-center">Get the lyrics for any song</p>

              <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    onChange={this.onChange}
                    value={this.state.trackTitle}
                    name="trackTitle"
                    placeholder="Summer Song"
                  />
                  <button
                    className="btn btn-success btn-block mt-4"
                    type="submit"
                  >
                    Get track
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
