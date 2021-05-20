import React from "react";

class Searchbar extends React.Component {
  state = { Text: "" };
  onChangeoftext = (e) => {
    this.setState({ Text: e.target.value });
    //console.log(e.target.value);
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.onSubmitSerach(this.state.Text);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onSubmitForm} className="ui form">
          <div className="field">
            <label>Search Text</label>
            <input
              type="text"
              onChange={this.onChangeoftext}
              value={this.state.Text} placeholder="Children"
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
