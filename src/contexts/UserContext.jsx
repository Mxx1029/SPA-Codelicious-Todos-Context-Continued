import React, { useReducer } from 'react';

const defaultValue = null;

export const UserContext = React.createContext(defaultValue);

const initialState = {
    user: null
}

const reducer = (previousState, action) => {

    if (action.type === "setUser") {
        return { user: action.user }
    }

    alert("Unknown action!")
    return previousState;
}

// Custom made Context Provider component here
// UserContextProvider is a Higher order Component
// meaning it can take in other Component (like higher order functions)
export function UserContextProvider(props) {
    
    // const [user, setUser] = useState(null);
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)

    const contextValue = { 
        user: state.user,
        setUser: (newUserValue) => {
            dispatch({type: "setUser", user: newUserValue})
        }
     };

    return (
        <UserContext.Provider value={contextValue}>
            {props.children}
        </UserContext.Provider>
    )
}