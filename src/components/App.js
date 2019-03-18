import React from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_API_KEY
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar search={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
