import { types } from './../actions/messages';

const initialState = {
  messages: [],
  erorr: '',
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_MESSAGES_SUCCES:
      return { messages: action.payload };
    case types.FETCH_MESSAGES_FAILURE:
      return { error: action.payload };
    default:
      return state;
  }
};
