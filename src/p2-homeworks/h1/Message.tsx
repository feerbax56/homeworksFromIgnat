import React from 'react'
import classes from './Message.module.css'

export type MessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageProps) {
    return (
        <div className={classes.messageWindow}>
            <div className={classes.ava}>
                <img src={props.avatar}/>
            </div>
            <div className={classes.textArea}>
                <div className={classes.textInput}>
                    <div className={classes.name}> {props.name}</div>
                    <div className={classes.message}> {props.message}</div>
                    <div className={classes.time}> {props.time}</div>
                </div>
            </div>
        </div>

    )
}


export default Message
