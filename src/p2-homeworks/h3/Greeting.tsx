import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // Done
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // Done
    addUser: () => void //
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string //
    totalUsers: number //
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, onEnter, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? 's.error' : 's.notError' // need to fix with (?:) DOne!!!

    return (<>
            <div>
                <input value={name}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onEnter}
                       onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>
            <div>
                <button onClick={addUser} className={s.btn} disabled={!name}>add</button>
                <span>{totalUsers}</span>
            </div>
        </>
    )
}

export default Greeting
