import React from 'react';

import {
  Sidebar,
  SidebarNav,
  SidebarNavItem,
  SidebarControls,
  SidebarControlBtn,
  LoremIpsum,
  Grid,
  Row,
  Col,
  FormControl,
  Label,
  Progress,
  Icon,
  SidebarDivider
} from '@sketchpixy/rubix';

import { Link, withRouter } from 'react-router';

@withRouter
class ApplicationSidebar extends React.Component {
  handleChange(e) {
    this._nav.search(e.target.value);
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12}>
              <div className="sidebar-nav-container">
                <SidebarNav style={{ marginBottom: 0 }} ref={c => (this._nav = c)}>
                  {/** Pages Section */}
                  <div className="sidebar-header">PAGES</div>

                  <SidebarNavItem glyph="icon-fontello-gauge" name="Home" href="/" />
                  <SidebarNavItem glyph="icon-fontello-gauge" name="EX Gym of the Week" href="/targetgym" />
                  <SidebarNavItem glyph="icon-fontello-gauge" name="Submit Raid Report" href="/raidreport" />
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class DummySidebar extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className="sidebar-header">DUMMY SIDEBAR</div>
            <LoremIpsum query="1p" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

@withRouter
export default class SidebarContainer extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <SidebarControls>
          <SidebarControlBtn bundle="fontello" glyph="chart-pie-2" sidebar={0} />
        </SidebarControls>
        <div id="sidebar-container">
          <Sidebar sidebar={0}>
            <ApplicationSidebar />
          </Sidebar>
        </div>
      </div>
    );
  }
}
