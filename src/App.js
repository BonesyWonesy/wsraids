import React, { Component } from 'react';
import logo from './logo.svg';
import mewtwo from './Mewtwo.png';
import './App.css';
import { Button } from 'reactstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RaidReport from './Report/RaidReport';
import RaidInfo from './Info/RaidInfo';
import PokeTrader from './PokeTrader/UserDetails';

import BelvederePark from './Locations/BelvederePark.js';
import DelridgePlayground from './Locations/DelridgePlayground.js';
import DragonflyPark from './Locations/DragonflyPark.js';
import ECHughes from './Locations/ECHughes.js';
import FairmountPlayground from './Locations/FairmountPlayground.js';
import HighPointLittleLibrary from './Locations/HighPointLittleLibrary.js';
import SchmitzPark from './Locations/SchmitzPark.js';
// import SSCCChineseGarden from './Locations/SSCCChineseGarden.js';
// import StoneKoi from './Locations/StoneKoi.js';
import TotemPole from './Locations/TotemPole.js';

const raidMaps = [
  new BelvederePark(),
  new DragonflyPark(),
  new FairmountPlayground(),
  new HighPointLittleLibrary(),
  new TotemPole(),
  new DelridgePlayground(),
  new ECHughes(),
  new SchmitzPark(),
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentType: 'none',
    };

    this.dismissModal = this.dismissModal.bind(this);
  }

  componentDidMount() {}

  dismissModal() {
    this.switchContent('info');
  }

  switchContent(type) {
    this.setState({
      contentType: type,
    });
  }

  render() {
    const options = {
      trades: (
        <Link to="/trades">
          <Button color="info" size="lg">
            Trades
          </Button>
        </Link>
      ),
      raidInfo: (
        <Link to="/info">
          <Button color="info" size="lg">
            Raid Info
          </Button>
        </Link>
      ),
      raidReport: (
        <Link to="/report">
          <Button color="info" size="lg">
            Submit Report
          </Button>
        </Link>
      ),
    };
    return (
      <BrowserRouter>
        <main>
          <div className="App">
            <header className="App-header">
              West Seattle Raids
              <img src={logo} className="App-logo" alt="wsraids.com" />
              <img src={mewtwo} height="100px" alt="mewtwo" />
            </header>
          </div>
          <div className="text-center">
            <h4>
              Seattle-based EX gym locations & confirmations can be found{' '}
              <a href="http://bit.ly/kentmap" target="_blank" rel="noopener noreferrer">
                here{' '}
              </a>
            </h4>
            {options.raidInfo}
            {options.raidReport}
          </div>
          <br />

          <Route path="/info" render={() => <RaidInfo maps={raidMaps} />} />
          <Route path="/report" render={() => <RaidReport maps={raidMaps} />} />
          <Route path="/trades" render={() => <PokeTrader />} />

          <Route exact={true} path="/" render={() => <RaidInfo maps={raidMaps} />} />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
