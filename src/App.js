import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Panel, Modal } from 'react-bootstrap';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RaidReport from './Report/RaidReport';
import RaidInfo from './Info/RaidInfo';

import TotemPole from './Locations/TotemPole.js';
// import FairmountPlayground from '../Locations/FairmountPlayground.js';
// import DelridgePlayground from './Locations/DelridgePlayground.js';
import SSCCChineseGarden from './Locations/SSCCChineseGarden.js';

const raidMaps = [new TotemPole(), new SSCCChineseGarden()];

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
    return (
      <BrowserRouter>
        <main>
          <div className="App">
            <header className="App-header">
              West Seattle Raids <br />
              <img src={logo} className="App-logo" alt="logo" />
            </header>
          </div>
          <div className="text-center">
            <Link to="/info">
              <Button bsStyle="default" bsSize="large">
                Raid Info
              </Button>
            </Link>
            <Link to="/report">
              <Button bsStyle="default" bsSize="large">
                Submit Report
              </Button>
            </Link>
          </div>
          <br />

          <Route path="/info" render={() => <RaidInfo maps={raidMaps} />} />
          <Route path="/report" render={() => <RaidReport maps={raidMaps} />} />

          <Route
            exact={true}
            path="/"
            render={() => (
              <Modal show={this.state.contentType === 'none'}>
                <Modal.Body>
                  <Panel bsStyle="success">
                    <Panel.Heading>
                      <Panel.Title componentClass="h3">Purpose</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                      <p>
                        The idea is that we need roughly 60-80 unique accounts to raid at a specific gym to trigger an
                        EX raid for that gym.
                      </p>
                      <p>This page provides info about the currently targeted gym and stats.</p>
                      <p>If you&apos;d like to contribute to the stats, please fill out a really quick report.</p>
                      <div className="text-center">
                        <Link to="/info">
                          <Button onClick={this.dismissModal}>Dismiss</Button>
                        </Link>
                      </div>
                    </Panel.Body>
                  </Panel>
                </Modal.Body>
              </Modal>
            )}
          />
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
