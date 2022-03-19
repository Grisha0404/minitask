
export type ActionType = {
    title:string
}
export type StateType={
    collapsed:boolean
}
export const reducer = (state:StateType, action:ActionType):StateType =>{
    switch (action.title){
        case 'Toggele':
            return {...state, collapsed: !state.collapsed}
        default:return state
    }
}
