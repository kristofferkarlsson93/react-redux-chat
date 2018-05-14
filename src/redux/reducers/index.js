import { combineReducers } from 'redux'
import messagesReducer from './messages/messageReducer';

export default combineReducers({
  messages: messagesReducer
});