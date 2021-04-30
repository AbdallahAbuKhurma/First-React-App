import './App.css';
import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import jsonData from './assets/data.json';
import SelectedBeast from './components/SelectedBeast';
import _beastForm from './components/form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: jsonData,
      show: false,
      details: {},
      hornsNum: null,
    };
  }

  formData = (event) => {
    if(this.state.hornsNum !== 'All'){
      this.setState({
        list: jsonData.filter(beast => beast.horns === Number(this.state.hornsNum))
      });
    }else{
      this.setState({
        list: jsonData.filter(beast => beast.horns > 0)
      });
    }
  }

  updateHorns = horns => this.setState({ hornsNum: horns.target.value });

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
        <_beastForm formData={this.formData} hornsNum={this.state.hornsNum} updateHorns={this.updateHorns} list={this.state.list}/>
        <Main list={this.state.list} viewBeast={this.viewBeast} />
        <SelectedBeast show={this.state.show} details={this.state.details} closing={this.closing}/>
        <Footer />

      </div>
    );
  }
}
export default App;
