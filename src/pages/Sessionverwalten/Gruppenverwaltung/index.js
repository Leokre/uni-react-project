import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import {useState,useEffect} from 'react'
import { blue } from '@material-ui/core/colors';
import '../Gruppenmitglieder/Popup.css'
import Axios from "axios"
import qs from "qs"
import DeleteIcon from '@material-ui/icons/Delete';
  

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 'auto',
  },
  cardHeader: {
    padding: theme.spacing(1, 2),
  },
  list: {
    width: 200,
    height: 230,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
  },
  button: {
    margin: theme.spacing(0.5, 0),
   
  },
}));

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

function union(a, b) {
  return [...a, ...not(b, a)];
}

export default function TransferList({currentSession,allGroups,joinedGroups,currentUser}) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(['Gruppe 1','Gruppe 2', 'Gruppe 3', 'Gruppe 4',  'Gruppe 5', 'Gruppe 6']);
  const [right, setRight] = React.useState([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);


  const confirmSelection = ()=>{
    console.log("confirmSelection triggered")
    let groups = []

    right.forEach(element=>{
      groups.push(element.replace("Gruppe ",""))
    })
    console.log(groups)
    const log = Axios.create({
      withCredentials: true
    })

    log({
        method: 'post',
        url: process.env.REACT_APP_BACKEND_URL+"/Session/setUserGroups",
        data: qs.stringify({
          sessionID: currentSession,
          targetID: currentUser,
          groups: JSON.stringify(groups)

        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(response => {
          console.log(response)
          if(!response.data){
             
          }else{
         
              
             
              

              
          }
        
    })
  }

  const deleteGroup = (grpID) => {
    console.log("deleteGroup triggered")
    const grp = Axios.create({
      withCredentials: true
    })
  
    grp({
        method: 'post',
        url: process.env.REACT_APP_BACKEND_URL+"/Session/deleteGroup",
        data: qs.stringify({
          sessionID: currentSession,
          groupID : grpID
        }),
        headers: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      }).then(response => {
          console.log(response)
          if(!response.data){
             
          }else{
  
             //console.log(response.data)
             if(response.data.msg == "DELETE_GROUP_SUCCESS"){
               console.log("Gruppe " + grpID)
               console.log(left.indexOf("Gruppe " + grpID))
               console.log(right.indexOf("Gruppe " + grpID))

               const newLeft = []
               const newRight = []
               left.forEach(element => {
                 if(!(element == "Gruppe " + grpID)) newLeft.push(element)
               })
               right.forEach(element => {
                if(!(element == "Gruppe " + grpID)) newRight.push(element)
              })
                setLeft(newLeft)
                setRight(newRight)
             }
  
              
          }
        
    })
  }

const addGroup = () => {
  const grp = Axios.create({
    withCredentials: true
  })

  grp({
      method: 'post',
      url: process.env.REACT_APP_BACKEND_URL+"/Session/addGroup",
      data: qs.stringify({
        sessionID: currentSession
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then(response => {
        //console.log(response)
        if(!response.data){
           
        }else{

           //console.log(response.data)
           if(response.data.msg == "GROUP_CREATE_SUCCESS"){
            setLeft([...left,"Gruppe " + response.data.id])
           }

            
        }
      
  })
}
  useEffect(()=>{
    console.log("allgroups/joined")
    console.log(allGroups)
    console.log(joinedGroups)
    let all = []
    let joined = []
    joinedGroups.forEach(element => {
      joined.push("Gruppe " + element.GruppenID)
    });
    allGroups.forEach(element => {

      if (!joinedGroups.some(e => e.GruppenID === element.GruppenID)) {
        all.push("Gruppe " + element.GruppenID)
      }
     
    });
    
    console.log("all " + all)
    console.log(joined)
    setLeft(all)
    setRight(joined)
  },[])


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (



      <div className = " card">


    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={numberOfChecked(items) === items.length && items.length !== 0}
            indeterminate={numberOfChecked(items) !== items.length && numberOfChecked(items) !== 0}
            disabled={items.length === 0}
            inputProps={{ 'aria-label': 'alle ausgew??hlt' }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} ausgew??hlt`}
      />
      <Divider />
      <List className={classes.list} dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem key={value} role="listitem" button>
              <ListItemIcon onClick={handleToggle(value)}>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary= {value} onClick={handleToggle(value)}/> 
              
              <DeleteIcon onClick={()=>{deleteGroup(value.split(" ")[1])}}/>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
    </div>
  );

  return (







<body>

 


<div className="ct"><Button variant="outlined" text="Gruppe hinzuf??gen" onClick={() => {

addGroup()}}>Gruppe hinzuf??gen</Button> </div>



    <Grid container spacing={2} justify="center" alignItems="center" className={classes.root}>
      <Grid item>{customList('Gruppen', left)} </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            variant="outlined"
            size="small"
            className={classes.button}
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          
        </Grid>
      </Grid>
      <Grid item>{customList('Mitglied in', right)}</Grid>
    </Grid>
   <br></br><br></br>
   <div className = "ct"> <Button  variant="outlined" className= {classes.button} onClick = {()=> confirmSelection()}>Best??tigen</Button> </div>
    




    </body>












  );
}