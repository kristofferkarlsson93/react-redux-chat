import React, { Component } from 'react';

class MessageInput extends Component {
  state = {
    message: ''
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.message)
    this.setState({message: ''});
  }

  render() {
    return (
      <div className="MessageInput">
        <form onSubmit={(e) => this.onSubmit(e)}>
          <input 
            type='text' 
            placeholder='Skriv ett meddelande'
            onChange={(event) => this.setState({message: event.target.value})}
            value={this.state.message}  
          />
          <input type='submit' value='Skicka meddelandet' />
        </form>
      </div>
    );
  }
}

export default MessageInput;
