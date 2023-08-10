import React, {createContext, useReducer} from 'react';

export const userContext = createContext();

export default ({children}) => {

    return (
        <userContext.Provider>
            {children}
        </userContext.Provider>
    );
}