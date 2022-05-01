import { messagesReducer } from './messages';
import { combineReducers } from 'redux';

export default combineReducers({
  messages: messagesReducer,
});
