import { messageActions } from './../actionTypes';

export const postMessage = (messageObject) => {
  return (dispatch) => {
    console.log('message in action', messageObject);
    dispatch(post(messageObject));
  } 
}

const post = (messageObject) => ({type: messageActions.POST_MESSAGE, messageObject})