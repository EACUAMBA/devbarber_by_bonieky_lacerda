export const initialState = {
    avatar: '',
    favourites: [],
    appointments: []
}

export const UserReducer = (state, action) => {
    switch(action.type){
        case 'setAvatar':{
            const newState = {...state, avatar: action.payload};
            return newState;
            break;
        }
        default: {
            return state;
        }
    }
}