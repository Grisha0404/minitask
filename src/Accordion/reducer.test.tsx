import {reducer, StateType} from "./reducer";


test('opposite collapsed', ()=>{
    //date
    const  state:StateType = {
        collapsed:true
    }
    //action
    const newState = reducer(state, {title:'Toggele'})
    //result
expect(newState.collapsed).toBe(false)
})