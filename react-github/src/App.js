import React from "react"
import './App.css';
import User from "./components/User"
import Followers from "./components/Followers"
import styled from "styled-components"

const StyledTitle = styled.div`
text-align: center;
font-size: 100px;
margin-bottom: 20px;
color: dodgerblue;
text-shadow: 5px 5px 10px purple;

`

class App extends React.Component {
  state = {
      userData: [],
      followers: [],
    }

  componentDidMount() {
    fetch("https://api.github.com/users/bporch84")
      .then(res => res.json())
      .then(data => this.setState({
        userData: data
      }))
      .catch(err => console.log(err))

    fetch("https://api.github.com/users/bporch84/followers")
      .then(res => res.json())
      .then(data => this.setState({
        followers: data
      }))
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <StyledTitle>Github User Cards</StyledTitle>
        <User data={this.state.userData} />
        <Followers followers={this.state.followers} />
      </div>
    )
  }
}

export default App;
