import { createContext, useReducer } from "react"

export const ThemeContext = createContext()

const authReducer = (state, action) => {
    switch (action.payload) {
        case 'CHANGE_NAME':
            return {...state, name: 'Jimoh'}
    }
}

export function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(authReducer,
        { name: 'hois', age: 34, married: true })
    
    return (
        <ThemeContext.Provider value={{country: 'Nigeria', color: 'green'}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext