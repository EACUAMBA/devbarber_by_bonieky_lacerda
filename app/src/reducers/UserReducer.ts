interface InitialStateInterface {
  avatar?: string;
  favourites?: any[];
  appointments?: any[];
}

export const initialState: InitialStateInterface = {
  avatar: '',
  favourites: [],
  appointments: [],
};

export const UserReducer = (state: any, action: any) => {
  switch (action) {
    case 'setAvatar': {
      return {...state, avatar: action.payload.avatar};
    }
    default: {
      return state;
    }
  }
};
