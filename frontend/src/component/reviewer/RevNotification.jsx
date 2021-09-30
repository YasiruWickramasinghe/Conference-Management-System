import React from "react";
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import {store} from 'react-notifications-component';
import 'animate.css/animate.min.css';

function Notification() {
    return(
        <div>
            <ReactNotification/>
            <Notify />
        </div>
        
    );
}

function Notify(){

    const notification = () =>{
        store.addNotification({
            title:"Notification",
            message:"Notification send successfully",
            type:"success",
            container:"bottom-right",
            insert:"bottom",
            animationIn:["animated","fadeIn"],
            animationOut:["animated","fadeOut"],
  
            dismiss: {
              duration: 2000,
              showIcon: true
            },
            width: 400
        })
    }

    return(
        <div>
            <a onClick={notification}>
                Approve
            </a>
        </div>
    )
}


export default Notification;