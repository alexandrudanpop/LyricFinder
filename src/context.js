import React, { Component } from "react";
import axios from "axios";

const api_key = "45c7b2fb9f4bdd2b54765bf91dd3e9a2";
const cors_bypass = "https://cors-anywhere.herokuapp.com";
const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 tracks"
  };

  async componentDidMount() {
    const { data } = await axios.get(
      `${cors_bypass}/http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${api_key}`
    );

    this.setState({
      ...this.state,
      track_list: data.message.body.track_list
    });
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
