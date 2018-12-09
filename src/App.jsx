import React, { Component } from 'react';

import './App.css';
import Movies from './components/movies';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends Component {
  state = {
    visible: false,
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    console.log('App - Mounted');
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];

    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
    this.setState({ counters });
  };

  handleShowLayout = layout => this.setState({ visible: !this.state.visible });

  render() {
    console.log('App - renderd');

    const { visible } = this.state;
    const showLayout = visible ? (
      <Movies />
    ) : (
      <Counters
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    );
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <div className="mb-4">
            <button
              onClick={() => this.handleShowLayout()}
              className="btn btn-primary btn-sm"
            >
              {visible ? 'Show Counter Component' : 'Show Movies Component'}
            </button>
          </div>
          {showLayout}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
