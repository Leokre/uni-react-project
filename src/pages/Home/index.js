import React from 'react'
import './Home.css'
import Bild from './Home.png'

const index = () => {
    return (

        <div class="grid-container">
  
        <div class="Comp1">Wilkommen auf dem Chat Portal der TH-KÖLN. </div>
        <div class="Comp2"><img className ="compbild2"src={Bild}></img></div>
        <div class="Comp3"> <h2>Beispiel Text</h2><h1> </h1></div>
        <div class="Comp4"><h1>Session</h1><br></br>Es können eine oder mehrere Sessions zu einem Thema/Fach erstellt werden und ggf. Gruppen hinzugefügt werden.</div>
        <div class="Comp5"><h2>Chat</h2><br></br> Sekundenschneller Nachrichtenaustausch zwischen Professoren und Studenten</div>
        <div class="Comp6"><h2>Schnellantworten</h2><br></br>Sie können als Professor schnellantworten vordefinieren die dazu dienen mit einem Klick die Studenten unter Zeitdruck zu benachrichtigen </div>
        <div class="Comp7"><h2>Teilnehmer und Gruppen Verwalten</h2><br></br>Teilnehmer und Gruppen können hinzugefügt und auch entfernt werden. Diese kann man auch Rechte vergeben.  </div>
      </div>


       
    )
}

export default index
