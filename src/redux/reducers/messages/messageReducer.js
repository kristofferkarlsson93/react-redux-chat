import { messageActions } from './../../actions/actionTypes';

const initialState = {
  messageList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case messageActions.POST_MESSAGE: 
      return {
        ...state,
        messageList: [...state.messageList, action.messageObject]
      }
    default: return state;
  }
}