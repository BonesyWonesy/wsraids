import React, { Component } from 'react';
import { Button, Jumbotron, TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import RaidStats from './RaidStats.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import MapIcon from '../map.png';
import CopyIcon from '../copy.png';
import '../App.css';

export default class RaidInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raidMaps: props.maps,
      activeTab: '1',
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    this.state.raidMaps.sort((left, right) => {
      return left.s13CellId - right.s13CellId;
    });

    return (
      <div className="text-center">
        <h2> Current EX Gym Targets: </h2>
        <p>(Colored by matching S13 Cells) </p>
        <Nav tabs className="navcenter">
          {this.state.raidMaps.map((gym, idx) => {
            return (
              <NavItem key={idx}>
                <NavLink
                  className={`s13${gym.s13CellId}`}
                  onClick={() => {
                    this.toggle(idx.toString());
                  }}
                >
                  {gym.names.gym}
                </NavLink>
              </NavItem>
            );
          })}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {this.state.raidMaps.map((gym, idx) => {
            return (
              <TabPane tabId={idx.toString()} key={'map' + idx.toString()}>
                <Jumbotron>
                  <h1>{gym.names.gym}</h1>
                  <p>
                    <img alt={'Directions to ' + gym.names.gym} src={gym.getMapsLink()} />
                    <br />
                    <br />
                    <img src={MapIcon} alt={gym.loc.address} />
                    <span>{gym.loc.address}</span>
                    <br />
                  </p>
                  <p>
                    <CopyToClipboard text={gym.loc.address}>
                      <Button size="lg" className="buttonGrey">
                        Copy Address <img src={CopyIcon} alt="Copy Address" />
                      </Button>
                    </CopyToClipboard>
                    <Button
                      size="lg"
                      className="buttonGrey"
                      alt={gym.names.gym}
                      href={`https://www.google.com/maps/dir/Current+Location/${gym.loc.lat},${gym.loc.long}`}
                      target="_blank"
                    >
                      Get Directions
                    </Button>
                  </p>
                </Jumbotron>
              </TabPane>
            );
          })}
        </TabContent>
        <RaidStats locations={this.state.raidMaps} />
      </div>
    );
  }
}
