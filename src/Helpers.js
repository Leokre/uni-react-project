import Axios from "axios"
import qs from "qs"


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




  
export function register(usr,pwd,backendURL){
    /*  Axios.post(Constants.backendURL + "/addUser",{
          username: username,
          password: password
      })  */
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
        }).then(response => {
          switch(response.data){
            case "ER_DUP_ENTRY": 
            alert("Username bereits vergeben")
            break;
            case "USER_CREATED":
            alert("Accounterstellung erfolgreich")
            break;
           


          }
      })
  }

  export function localTimeFromTimestamp(timestamp){
    return new Date(timestamp).toLocaleTimeString()
  }