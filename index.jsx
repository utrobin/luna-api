import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Voyager} from 'graphql-voyager';
import shema from 'json-loader!./shema.json';

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: false,
    };
  }

  changeApi() {
    this.setState({api: !this.state.api})
  }

  render() {
    return (
      <div>
        <div
          style={{
            background: this.state.api ? 'rgb(0, 188, 212)' : 'rgb(255, 64, 129)',
            position: 'fixed',
            zIndex: 99,
            padding: '20px',
            color: '#fff',
            right: 0,
            font: '14px helvetica neue,helvetica,arial,sans-serif',
            borderRadius: '2px',
            cursor: 'pointer',
          }}
          onClick={() => this.changeApi()}
        >
          {this.state.api ? 'Query' : 'Mutation'}
        </div>
        <Voyager 
          introspection={shema}
          displayOptions={{
            skipRelay: false,
            rootType: this.state.api ? 'Mutation' : 'Query',
          }}
        />
      </div>
    )
  }
}

ReactDOM.render(<Test/>, document.getElementById('voyager'));
