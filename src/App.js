import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  constructor(props) {
    super(props);
    console.log("App - Constructor", this.props);
    // this.state = this.props.something;
  }

  componentDidMount() {
    console.log("App - Mounted", this.props);
  }

  deleteCounter = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({
      counters: counters
    });
  };

  resetCounters = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });

    this.setState({ counters: counters });
  };

  incrementNumber = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters: counters });
  };

  render() {
    console.log("App - Rendered", this.props);

    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.resetCounters}
            onIncrement={this.incrementNumber}
            onDelete={this.deleteCounter}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
