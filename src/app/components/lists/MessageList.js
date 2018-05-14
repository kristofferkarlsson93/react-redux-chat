import React, { Component } from "react";
import { connect } from "react-redux";
import Message from "./../items/Message";

class MessageList extends Component {
  render() {
    const { messages } = this.props;
    return (
      <div className="MessageList" style={styles.messageList}>
        {messages &&
          messages.map((message, index) => (
            <Message key={index} text={message.message} />
          ))}
      </div>
    );
  }
}

const styles = {
  messageList: {
    flexDirection: "row",
    overflowY: "scroll",
    height: "75vh"
  }
};

const mapStateToProps = state => {
  return {
    messages: state.messages.messageList
  };
};

export default connect(mapStateToProps)(MessageList);
