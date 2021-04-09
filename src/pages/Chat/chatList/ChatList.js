import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
const backendURL="http://localhost:5000";
const Axios = require("axios");
const qs = require("qs");



export default class ChatList extends Component {
 /* 
  allSessionGroups = [
   
    
  
    {
      
      image: "" ,
      id: 7,
      name: "Diyan",
      active: false,
      isOnline: true,
    },
    
    
    {
        image: "" /,
      id: 10,
      name: "Aman",
      active: false,
      isOnline: true,
    },
  ];
*/

 
 
  constructor(props) {
    super(props);
    this.state = {
      currentSession: props.currentSession,
      allChats: ""
    };

  }

  

  render() {

    const self = this

    const getUserGroups = (sessID)=>{

      const log = Axios.create({
          withCredentials: true
        })
  
        log({
            method: 'get',
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
                  return(response.data)
                  //console.log(loggedIn)
                  
  
                  
              }
            
        })
    };

    self.setState({allChats: getUserGroups(self.state.currentSession)});


    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
        {/*<span>Neue Session +</span> */}  
        </button>
        <div className="chatlist__heading">
        <h2>Chats</h2>
          {/*
          
            <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>

          */}  
          
          
        </div>
        {/*
          <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

          
          */}  
        
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}