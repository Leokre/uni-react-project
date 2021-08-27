import { LocalGasStation } from "@material-ui/icons"
import Axios from "axios"
import qs from "qs"
const backendURL=process.env.REACT_APP_BACKEND_URL

export function logout(backendURL){
    const log = Axios.create({
      withCredentials: true
    })
    log.get(backendURL +"/Logout").then(response => {
        console.log(response.data)
        if(response.data == "LOGOUT_SUCCESS"){
           // alert("Logout erfolgreich")
            window.location.reload();
        }
        
    })

    
  }


  export function login (usr,pwd){

    const log = Axios.create({
        withCredentials: true
      })

      log({
          method: 'post',
          url: backendURL+"/Login",
          data: qs.stringify({
            username: usr,
            password: pwd
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(response => {
            //console.log(response)
                
               if(response.data.msg == "UserNamePasswordError") alert("Username oder Passwort sind falsch")
                
               window.location.reload();
                

                
            
          
      })
  }

  
export function register(usr,pwd,backendURL){
      Axios({
          method: 'post',
          url: backendURL+"/addUser",
          data: qs.stringify({
            username: usr,
            password: pwd
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        }).then(async response => {
          var a;
          if(response.data.msg){
            a=response.data.msg
          }else{
            a=response.data
          }
          switch(a){
            case "ER_DUP_ENTRY": 
            alert("Username bereits vergeben")
            break;
            case "USER_CREATED":
            alert("Accounterstellung erfolgreich")
            break;
           
          }

          if (response.data.pass) login(usr,response.data.pass)          
         
      })
  }

  export function localTimeFromTimestamp(timestamp){
    return new Date(timestamp).toLocaleTimeString()
  }