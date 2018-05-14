import React, { Component } from 'react';

class ChatHeader extends Component {
  render() {
    return (
      <div className="ChatHeader" style={styles.header}>
        <div>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
const styles = {
  header: {
    backgroundColor: 'pink',
    padding: 1,
    textAlign: 'center',
    height: '100%'
  }
}

export default ChatHeader;
