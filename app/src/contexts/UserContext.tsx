import React, {useReducer} from 'react';
import {initialState, UserReducer} from '../reducers/UserReducer';

export const UserContext = React.createContext(initialState);
interface Props {
  children: any;
}
export default (props: Props) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
};
