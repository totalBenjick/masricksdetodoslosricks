import React, {useReducer} from 'react';
import RickContext from './RickContext';
import RickReducer from './RickReducer';

const RickState = ({children}) => {
    const initialState = {
        current_id : 1
    }

    const [ state, dispatch ] = useReducer(RickReducer, initialState);

    const addId = id => {
        dispatch({
            type: "ADD_ID",
            payload: id
        })
    }

    return(
        <RickContext.Provider
            value={{
                id: state.id,
                addId
            }}
        >
            {children}
        </RickContext.Provider>
    )
}

export default RickState