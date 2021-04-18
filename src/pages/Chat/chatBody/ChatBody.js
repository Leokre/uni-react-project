import React, { Component } from "react";
import "./chatBody.css";

import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";
import UserProfile from "../chatProfile/UserProfile";


const Axios = require("axios")
const qs = require("qs")
const socketIOClient = require ("socket.io-client");
const backendURL = process.env.REACT_APP_BACKEND_URL
const BackendSocket = process.env.REACT_APP_BACKEND_SOCKET

//const socket = socketIOClient(BackendSocket);
const socket = socketIOClient(BackendSocket, {transports: ['websocket']} );

  

export default class ChatBody extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      currentSession: props.currentSession,
      userGroups: "",
      currentGroup: 0,
      quickReplies: props.quickReplies
      
    };
  }

  getCurrentGroup = (group) =>{
    console.log("Setting current group to " + group + "!")
    this.setState({      currentGroup:group   });
    console.log("State currentGroup = " + this.state.currentGroup)
    
  }



  getUserGroups (sessID){

    const log = Axios.create({
        withCredentials: true
      })

      log({
          method: 'post',
          url: backendURL+"/Session/getUserGroups",
          data: qs.stringify({
            sessionID: sessID
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(response => {
            console.log(response)
            if(!response.data){
            return "NADA"
            }else{
                console.log(response.data)
                //console.log(response.data.accessToken)
                this.setState({      userGroups: response.data    });
                return(response.data)
                //console.log(loggedIn)
                

                
            }
          
      })
  };

 
  

  componentDidMount() {
    console.log("currentSession: " + this.props.currentSession)
    this.getUserGroups(this.state.currentSession)
    socket.emit('joinChat',{sessID:this.state.currentSession,groupID:0})
    
  }

  
  render() {
    
    if(!this.state.userGroups || this.state.userGroups == ""){
      console.log("userGroups: " + this.state.userGroups)
      return <p>Loading</p>
    }

      return (
        <div className="main__chatbody">
          {console.log("UG: " +this.state.userGroups)}
          {console.log("State currentGroup2 = " + this.state.currentGroup)}
          <ChatList currentSession={this.state.currentSession} userGroups={this.state.userGroups} socket={socket} callback={this.getCurrentGroup}/>
          <ChatContent currentSession={this.state.currentSession} chatSocket={socket} currentGroup={this.state.currentGroup} currentUser={this.props.currentUser} quickReplies={this.state.quickReplies}/>
          <UserProfile />
        </div>
      );
    
    
  
    
  }
}