import React from 'react'
import classes from './Message.module.css'

type MessageProps = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessageProps) {
    return (
        <div className={classes.message}>
            <div className={classes.ava}>
                <img src={props.avatar}/>
            </div>
            <div>
                <div>check gh-page branch</div>
            </div>
        </div>
    )
}

export default Message
