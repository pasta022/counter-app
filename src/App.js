import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';


class App extends Component {
   state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  addCounter = () => {
    const counters = [...this.state.counters];
    if (counters.length === 0) {
      const newElement = { id: 1, value: 0 };
      counters.push(newElement);
    }
    const lastElement = counters.length - 1;
    const newElement = { id: counters[lastElement].id + 1, value: 0 };
    counters.push(newElement);
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    if (counter.value > 0) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counters });
    }
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  render() { 
    return (
      <React.Fragment>
        <Navbar totalCount={ this.state.counters.filter(c => c.value > 0).length} />
        <main>
          <Counters
            onReset={this.handleReset}
            onAdd={this.addCounter}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}
 
export default App;
