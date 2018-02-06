import React from 'react';
import classNames from 'classnames';
import { IndexRoute, Route } from 'react-router';

import { Grid, Row, Col, MainContainer } from '@sketchpixy/rubix';

/* Common Components */

import Sidebar from './common/sidebar';
import Header from './common/header';
import Footer from './common/footer';

/* Pages */

import Home from './routes/Home';
import TargetGym from './routes/TargetGym';
import RaidReport from './routes/RaidReport';

class App extends React.Component {
  render() {
    return (
      <MainContainer {...this.props}>
        <Sidebar />
        <div id="body">
          <Grid>
            <Row>
              <Col xs={12}>{this.props.children}</Col>
            </Row>
          </Grid>
        </div>
        <Footer />
      </MainContainer>
    );
  }
}

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/targetgym" component={TargetGym} />
    <Route path="/raidreport" component={RaidReport} />
  </Route>
);

export default routes;
