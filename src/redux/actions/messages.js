export const types = {
  FETCH_MESSAGES_REQUEST: 'FETCH_MESSAGES_REQUEST',
  FETCH_MESSAGES_SUCCESS: 'FETCH_MESSAGES_SUCCESS',
  FETCH_MESSAGES_FAILURE: 'FETCH_MESSAGES_FAILURE',
};

export const fetchMessagesRequest = () => ({
  type: types.FETCH_MESSAGES_REQUEST,
});

export const fetchMessagesSuccess = (messages) => ({
  type: types.FETCH_MESSAGES_SUCCESS,
  payload: messages,
});

export const fetchMessagesError = (error) => ({
  type: types.FETCH_MESSAGES_SUCCESS,
  payload: error,
});
