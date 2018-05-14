import React, { Component } from 'react';

class Message extends Component {
  render() {
    return (
      <div className="Message" style={styles.messageContainer}>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

const styles = ({
  messageContainer: {
    backgroundColor: 'pink',
    borderRadius: 25, 
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    minWidth: '75px',
    minHeight: '50px',
    textAlign: 'center',
    maxWidth: '200px',
    wordWrap: 'break-word',
    margin: 10
  }
});

export default Message;
