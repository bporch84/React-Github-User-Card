import React from "react"
import styled from "styled-components"

const StyledUser = styled.div`
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

h1 {
    font-size: 50px;
}

`

class User extends React.Component {
    constructor(props){
        super()
    }

    render(){
        return(
            <div>
                <StyledUser>
                    <div>
                    <img src={this.props.data.avatar_url} alt=""/>
                    </div>
                    <div>
                    <h1>{this.props.data.name}</h1>
                    <h2>{this.props.data.login}</h2>
                    <p>Location: {this.props.data.location} </p>
                    <p>Profile: <a href="{this.props.data.html_url}">{this.props.data.html_url}</a></p>
                    <p>Followers: {this.props.data.followers} </p>
                    <p>Following: {this.props.data.following} </p>
                    <p>Bio: {this.props.data.bio} </p>
                    </div>
                </StyledUser>
            </div>
        )
    }
}

export default User