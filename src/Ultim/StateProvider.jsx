import {createContext, UseContext, UseReducer} from "react"

export const StateContext = createContext()

export const stateProvider = ({children, initalState, reducer}) => {
    <StateContext.Provider value={UseReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
}

export const useStateProvider = () => UseContext(StateContext)