import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' | 'all'// Done!
export type AffairType = {   // Done
    _id: number
    name: string
    priority: AffairPriorityType
}
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // Done!
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType, filter: any): any => { // need to fix any
    // if (filter === 'all') return
    if (filter === 'low') return defaultAffairs.filter(t => t.priority === 'low')
    if (filter === 'middle') return defaultAffairs.filter(t => t.priority === 'middle')
    if (filter === 'high') return defaultAffairs.filter(t => t.priority === 'high')
    else return affairs
    // need to fix
}
export const deleteAffair = (affairs: AffairType, _id: number): any => { // need to fix any
    return defaultAffairs.filter(t => t._id !== _id)// need to fix
}

function HW2() {
    const [affairs, setAffairs] = useState<any>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: any) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
