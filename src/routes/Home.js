import React from 'react';
import { connect } from 'react-redux';

import actions from '../redux/actions';

import { Row, Col, Grid, Panel, PanelBody, PanelContainer } from '@sketchpixy/rubix';

@connect(state => state)
export default class Home extends React.Component {
  static fetchData(store) {}

  render() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody>
            <Grid>
              <Row>
                <Col xs={12}>
                  <h1>West Seattle Raids</h1>
                </Col>
              </Row>
            </Grid>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
}
