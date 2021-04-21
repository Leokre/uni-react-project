import React from 'react'
import './Home.css'
import Bild from './Home.png'

const index = () => {
    return (


        <div className="grid-container">
  
        <div className="Comp1">  
        <div className="box">  <br></br> <br></br>
          <h1>Wilkommen auf dem Chat Portal der TH-KÖLN.</h1> <br></br> <br></br>  <br></br> <br></br>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.  </div></div>
        <div className="Comp2"><img className ="compbild2"src={Bild}></img></div>
        <div className="Comp3"> <h2>Beispiel Text</h2><h1> </h1></div>
        <div className="Comp4"><h1>Session</h1><br></br>Es können eine oder mehrere Sessions zu einem Thema/Fach erstellt werden und ggf. Gruppen hinzugefügt werden.</div>
        <div className="Comp5"><h2>Chat</h2><br></br> Sekundenschneller Nachrichtenaustausch zwischen Professoren und Studenten</div>
        <div className="Comp6"><h2>Schnellantworten</h2><br></br>Sie können als Professor schnellantworten vordefinieren die dazu dienen mit einem Klick die Studenten unter Zeitdruck zu benachrichtigen </div>
        <div className="Comp7"><h2>Teilnehmer und Gruppen Verwalten</h2><br></br>Teilnehmer und Gruppen können hinzugefügt und auch entfernt werden. Diese kann man auch Rechte vergeben.  </div>
      </div>



       
    )
}

export default index
