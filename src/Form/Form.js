import React, { Component } from 'react';
import { observer } from 'mobx-react';
import TextField from 'material-ui/TextField';
import formSetup from './formSetup';

@observer
export default class Form extends Component {

  render() {

    return (
      <div>
        <form>
          <TextField {...formSetup.$('email').bind()} />
          <TextField {...formSetup.$('emailConfirm').bind()} />
          <button type="submit" onClick={formSetup.onSubmit} disabled={!formSetup.isValid}>Submit</button>
        </form>
      </div>
    );
  }
};
