import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import female from '../Female_black_symbol.svg';
import male from '../Male_black_symbol.svg';
import PokemonImages from './ImageImports';
import CreateTrade from './CreateTrade';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      pokemonList: [],
    };
  }

  componentDidMount = () => {
    // $('#example').DataTable();
    this.setState({
      pokemonList: [
        {
          num: 307,
          name: 'Meditite',
          asset: PokemonImages.getPokemonAsset(307),
          gender: 0,
          cp: 0,
          level: 0,
          shiny: false,
        },
        {
          num: 122,
          name: 'Mr. Mime',
          asset: PokemonImages.getPokemonAsset(122),
          gender: 0,
          cp: 0,
          level: 1,
          shiny: true,
        },
        {
          num: 115,
          name: 'Kangaskhan',
          asset: PokemonImages.getPokemonAsset(115),
          gender: 0,
          cp: 0,
          level: 1,
          shiny: true,
        },
        {
          num: 304,
          name: 'Aron',
          asset: PokemonImages.getPokemonAsset(304),
          gender: 0,
          cp: 666,
          level: 0,
          shiny: true,
        },
      ],
    });
  };

  render() {
    const jsx = [];

    this.state.pokemonList.map((e, i) => {
      if (e.gender === 0) {
        jsx[i] = {
          gender: (
            <div>
              <img alt="female" src={female} width="25px" /> <img alt="male" src={male} width="30px" />
            </div>
          ),
          cp: e.cp === 0 ? 'None' : e.cp,
          level: e.level === 0 ? 'None' : e.level,
          shiny: e.shiny === false ? 'No' : 'Yes',
          bgstyle: e.shiny === true ? 'ShinyPokemonBg' : 'PokemonBg',
        };
      }
      return null;
    });

    return (
      <div>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12" />
            </Row>
            <table id="example" className="display">
              <thead>
                <tr>
                  <th>Pokemon</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pokemonList.map((e, i) => {
                  return (
                    <tr key={`pokemonrow${i}`}>
                      <td className={jsx[i].bgstyle}>
                        <div>
                          <h3>
                            {e.name} - #{e.num}
                          </h3>
                          <div className="GenderFloat">
                            <table id={`pokemon${i}details`}>
                              <thead>
                                <tr>
                                  <th>Trade Details</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>CP Requirement:</td>
                                  <td>{jsx[i].cp}</td>
                                </tr>
                                <tr>
                                  <td>LVL Requirement:</td>
                                  <td>{jsx[i].level}</td>
                                </tr>
                                <tr>
                                  <td>Gender Requirement:</td>
                                  <td>{jsx[i].gender}</td>
                                </tr>
                                <tr>
                                  <td>Shiny:</td>
                                  <td>{jsx[i].shiny}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <img
                            alt="pokemon"
                            src={process.env.PUBLIC_URL + '/pokemon_icons/' + e.asset + '.png'}
                            width="50%"
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TabPane>
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
/*
<Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              */
