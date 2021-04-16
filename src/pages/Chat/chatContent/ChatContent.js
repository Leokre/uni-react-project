import React, { Component, useState, createRef, useEffect } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";
import Axios from "axios"
import qs from "qs"
import FunctionBar from "./functionBar/FunctionBar";
import SendIcon from '@material-ui/icons/Send';
const backendURL = process.env.REACT_APP_BACKEND_URL
var i = 1
  



export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 0,
      image: "" /*BILD */,
      username: "Loading...",
      type: "",
      msg: "Loading...",
      time: "12:07",
    },
  ];


  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
      chatSocket: this.props.chatSocket

    };
  }

  sendMessage = (message) => {
    if(!message && this.state.msg != ""){
        this.state.chatSocket.emit('newMessage',{msg: this.state.msg})
    
        
        this.setState({ msg: "" });
     
    }else if(message){
      this.state.chatSocket.emit('newMessage',{msg: message})
  
      
      this.setState({ msg: "" });
   
  }
    

    
  }


  quickReplyCallback = (reply) =>{
    console.log("reply: " + reply)
    this.setState({msg: reply})
    this.sendMessage(reply);
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };


  getChatLog=(backendURL)=>{
    
      console.log("getChatLog triggered")
      console.log("sessionID: " +this.props.currentSession )
      console.log("groupID: " +this.props.currentGroup )
     
      const log = Axios.create({
        withCredentials: true
      })
  
      log({
          method: 'post',
          url: backendURL+"/Session/getMessageLog",
          data: qs.stringify({
            sessionID: this.props.currentSession,
            groupID: this.props.currentGroup
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(response => {
            if(response.data.length == 0){
              this.setState({      chat: []    });
            }
            if(!response.data){
               console.log("NO RESPONSE")
            }else{
              console.log("Message log:")
              console.log(response.data)
              let chatLog = []
              response.data.forEach(element=>{
                let newMessage = 
                {
                key: i++,
                image: "" /*BILD */,
                type: this.props.currentUser == element.Username ? "me" : "other",
                username: element.Username,
                msg: element.Message,
                time: element.MessTimestamp,
                }
                
                chatLog.push(newMessage)
                
              
              })
              this.setState({      chat: chatLog    });

              
              this.scrollToBottom();
              
              
                
            }
          
      })
  
      
      
  }

  componentDidUpdate(prevProps, prevState) {
    
  
    if(prevProps.currentGroup != this.props.currentGroup){
      this.messagesEndRef = createRef(null);
      this.getChatLog(backendURL)
    }
    
    console.log("DidUpdate, chatLog: ")
    console.log(this.state.chat)
    console.log("currentSession: " + this.props.currentSession)
    console.log("currentGroup: " + this.props.currentGroup)
  }


  

  componentDidMount() {
    console.log("DIDMOUNT")
    this.getChatLog(backendURL)
  


    this.state.chatSocket.on('getUserGroups',function(data){console.log(data)})

    this.state.chatSocket.on('login',message =>{
    console.log("I logged in");
  })
  
  this.state.chatSocket.on('serverMessage',message =>{
    console.log(message);
  })
  
  this.state.chatSocket.on('newMessage',messageObject =>{
    console.log("User: " + messageObject.username + " | Message: " + messageObject.message + " | Time: " + messageObject.time);
    let newChatLog = this.state.chat

    newChatLog.push(
      {
      key: i++,
      image: "" /*BILD */,
      type: this.props.currentUser == messageObject.username ? "me" : "other",
      username: messageObject.username,
      msg: messageObject.message,
      time: messageObject.time,
      })

      this.setState({ chat: newChatLog });

    
    this.scrollToBottom();
  })



    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        this.sendMessage()
        this.scrollToBottom();
      }
    });
    
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              
              <p>Session {this.state.currentSession}</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  type={itm.type}
                  msg={itm.msg}
                  image={itm.image}
                  username={itm.username}
                  time={itm.time}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
       
        <div className="content__footer">
          
        <FunctionBar quickReplies={this.props.quickReplies} callback={this.quickReplyCallback}/>
          <div className="sendNewMessage">
            <button className="addFiles"  >
              <i className="fa fa-plus"></i>
            </button>  
           
          
            <input
              type="text"
              placeholder="Nachricht hier eintippen.."
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn" onClick={() => this.sendMessage}>
              <i className="fa fa-paper-plane"></i>
            </button>
            
          </div>
        </div>
      </div>
    );
  }
}