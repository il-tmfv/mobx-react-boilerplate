import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Form from './Form/Form';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

@observer
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <button onClick={this.onReset}>
            Seconds passed: {this.props.appState.timer}
          </button>
          <Form />
        </div>
      </MuiThemeProvider>
    );
  }

  onReset = () => {
    this.props.appState.resetTimer();
  }
}

export default App;
