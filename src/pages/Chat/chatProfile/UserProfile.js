import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
           <p>Profilbild</p>  
          {/*} <img src="" text= "fv"/>*/}
          </div>
          <h4>Elyas Gabbari</h4>
          <p>Beschreibung</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Weitere Informationen
          </div>
        </div>
      </div>
    );
  }
}