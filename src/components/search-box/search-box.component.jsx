import { Component } from "react";

class SearchBox extends Component {
  render() {
    console.log("rendering from searchbox");

    return (
      <input
        className={this.props.className}
        type={"search"}
        placeholder={this.props.placeholder}
        onChange={this.props.handleSearch}
      />
    );
  }
}

export default SearchBox;
