import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";



export default class ChatList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      allChats: this.props.userGroups,
      currentSession: this.props.currentSession,
      socket: this.props.socket
    };
  }

  
    
  render() {
    
   
    
    
    
    

    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
        </div>
 
        <div className="chatlist__items">
        {console.log(this.state.allChats)}
        {console.log("current Session: " + this.state.currentSession)}
    
        
          
          {
          this.state.allChats.map((item, index) => {
            if(item.GruppenID == 0){
              return(
                <ChatListItems
                name={"Alle Gruppen"}
                key={item.SessionID + "GG" + item.GruppenID}
                animationDelay={index + 1}
                active=""
                isOnline=""
                image=""
                socket={this.state.socket}
                currentSession = {this.props.currentSession}
                groupID={item.GruppenID}
                callback={this.props.callback}
              />
            );
            }

            return (
              <ChatListItems
                name={"Gruppe "+item.GruppenID}
                key={item.SessionID + "GG" + item.GruppenID}
                animationDelay={index + 1}
                active=""
                isOnline=""
                image=""
                socket={this.state.socket}
                currentSession = {this.props.currentSession}
                groupID={item.GruppenID}
                callback={this.props.callback}
              />
            );
          })}
        </div>
      </div>
    );
  }
}