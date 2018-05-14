import React, { Component } from 'react';
import ChatHeader from './headers/ChatHeader';
import MessageInput from './inputs/MessageInput';
import { connect } from 'react-redux';
import { postMessage } from './../../redux/actions';
import MessageList from './lists/MessageList';

class Chat extends Component {

  onSubmitMessage(message) {
    if (message) {
      this.props.postCurrentMessage({
        message,
        author: 'Exempel Nisse',
        dateTime: new Date().toLocaleString()
      })
    }
  }

  render() {
    return (
      <div className="ChatContainer" style={styles.container}>
        <div style={{flex: 1, width: '100%'}}>
          <ChatHeader text={'NisseP'}/>
        </div>
        <div style={{flex: 10, backgroundColor: 'orange', width: '100%'}}>
          <MessageList />
        </div>
        <div style={{flex: 2, backgroundColor: 'yellow', width: '100%'}}>
          <MessageInput 
            onSubmit={(message) => this.onSubmitMessage(message)}
          />
        </div>
      </div>
    );
  }
}

const styles = ({
  container: {
    backgroundColor: "red", 
    height: '100vh',
    display: 'flex',
    justifyContent: 'stretch',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    postCurrentMessage: (message) => dispatch(postMessage(message)) 
  }
}

export default connect (null, mapDispatchToProps)(Chat);
