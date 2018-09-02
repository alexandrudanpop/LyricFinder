import React, { Component } from "react";
import axios from "axios";
import { cors_bypass, api_key, api_url } from "./constants";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_TRACKS":
      return { ...state, track_list: [] };
    case "SEARCH_TRACKS":
      return { ...state, track_list: action.payload };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    track_list: [],
    heading: "Top 10 tracks",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount = async () => {
    const { data } = await axios.get(
      `${cors_bypass}${api_url}/chart.tracks.get?page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${api_key}`
    );

    this.setState({
      ...this.state,
      track_list: data.message.body.track_list
    });
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
