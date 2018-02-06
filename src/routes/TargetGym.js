import React from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions';

import { Row, Col, Grid, Panel, PanelBody, PanelContainer } from '@sketchpixy/rubix';

@connect(state => state)
export default class TargetGym extends React.Component {
  static fetchData(store) {
    return undefined;
  }

  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h1>West Seattle EX Raid</h1>
                  <h3>Totem Pole aka Rotary View Point Park</h3>
                  <ul>
                    <li>
                      <b>Location & Directions: </b>
                      <a href="https://www.google.com/maps/dir/Current+Location/47.5603065,-122.3750603">
                        4714-4798 35th Ave SW, Seattle, WA 98126
                      </a>
                    </li>
                  </ul>
                  <img src="/imgs/common/gymdetails/totempole.png" width="1200px" height="100%" />
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
