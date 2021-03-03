import React from "react"
import styled from "styled-components"

const StyledFollowers = styled.div`
display:flex;
border: 1px black solid;
width: 80%;
margin: 0 auto;
margin-bottom: 20px;
background-color: dodgerblue;
border-radius: 10px;

img {
    width: 100px;
    margin-top: 25px;
    margin-left: 10px;
    margin-right: 20px;
}

h2 {
    font-size: 50px;
}

`

class Followers extends React.Component {
    constructor(props){
        super()
        // this.state = {
        //     followersData: []
        // }
    }
//! Can't figure out how to get the information from the individual follower's API data to properly create their cards.

    // componentDidMount(){
    //     this.props.followers.forEach(follower => {
    //         fetch(`https://api.github.com/users/${follower.login}`)
    //         .then(res => res.json())
    //         .then(data => this.setState({
    //                 followersData: data
    //   }))
    //   .catch(err => console.log(err))
    //     })
    // }

    render(){
        return(
            <div>
                {this.props.followers.map(follower => {
                    return <StyledFollowers>
                        <div>
                    <img src={follower.avatar_url} alt=""/>
                    </div>
                    <div>
                    <h1>{follower.name}</h1>
                    <h2>{follower.login}</h2>
                    <p>Location: {follower.location} </p>
                    <p>Profile: <a href={follower.html_url}>{follower.html_url}</a></p>
                    <p>Followers: {follower.followers} </p>
                    <p>Following: {follower.following} </p>
                    <p>Bio: {follower.bio} </p>
                    </div>
                </StyledFollowers>
                })}
            </div>
        )
    }
}

export default Followers