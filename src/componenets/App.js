import React from "react";
import Searchbar from "./SearchBar";
import axios from "../API/Youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideDetails";

class App extends React.Component {
  state = { Video: [], selectedvideo: null };

  componentDidMount(){
      this.onSubmitSerach('Child');
  }
  onSubmitSerach = async (Text) => {
    const response = await axios.get("/search", {
      params: {
        q: Text,
      },
    });
    //console.log(response.data);
    this.setState({ Video: response.data.items , selectedvideo: response.data.items[0] });
    
    //console.log(response.data.items[0]);
  };

  onVideoSelect = (selectvideo) => {
    console.log(selectvideo);
    this.setState({ selectedvideo: selectvideo });
  };

  render() {
    return (
      <div className="ui container ">
        <Searchbar onSubmitSerach={this.onSubmitSerach} />
        <div className="ui grid">
          <div className="row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedvideo} />
            </div>
            <div className="five wide column">
              <VideoList Videos={this.state.Video} click={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
