import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../chatProfile/UserProfile";


export default class ChatBody extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentSession: props.currentSession,
    };
  }

  

  


  render() {
    return (
      <div className="main__chatbody">
        <ChatList currentSession={this.state.currentSession}/>
        <ChatContent />
        <UserProfile />
      </div>
    );
  }
}