import './App.css';
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import jsonData from './assets/data.json';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: jsonData,
      show: false,
      details: {}

    };
  }
  viewBeast = (beast) => {
    this.setState({
      show: true,
      details: beast
    });
  }
  closing = () => {
    this.setState({
      show: false,
      details: {}
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main list={this.state.list} viewBeast={this.viewBeast} />
        <SelectedBeast show={this.state.show} details={this.state.details} closing={this.closing}/>
        <Footer />

      </div>
    );
  }
}
export default App;
