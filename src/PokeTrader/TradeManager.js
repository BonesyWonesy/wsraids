import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import female from '../Female_black_symbol.svg';
import male from '../Male_black_symbol.svg';
import PokemonImages from './ImageImports';
import CreateTrade from './CreateTrade';

export default class TradeManager extends React.Component {
  constructor(props) {
    super(props);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <div>
        <h3>BonesyWonesy</h3>
        <Nav tabs>
          <NavItem>
            <NavLink
              onClick={() => {
                this.toggle('1');
              }}
            >
              Pokemon I Want
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              onClick={() => {
                this.toggle('2');
              }}
            >
              Pokemon For Trade
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <CreateTrade />
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
