import React from 'react'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // Done
    deleteAffairCallback: (id: number) => void// Done
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>

            <span>{props.affair.name} {' '}</span>
            <span>{props.affair.priority}</span>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
