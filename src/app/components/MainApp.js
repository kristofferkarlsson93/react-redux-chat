import React, { Component } from 'react';
import SideBar from './SideBar';
import AdvidorToolBar from './AdvidorToolBar';
import Chat from './Chat';

class App extends Component {
  render() {
    return (
      <div style={styles.container} className="AppContainer">
        <div style={{flex: 1}}>
          <SideBar />
        </div>
        <div style={{flex: 3}}>
          <Chat />
        </div>
        <div style={{flex: 2}}>
          <AdvidorToolBar />
        </div>
      </div>
    );
  }
}

const styles = ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    marginRight: 10,
    
  },
  pageSection: {
    flex: 1,
  }
})

export default App;
