import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import PokemonImages from './ImageImports';

export default class CreateTrade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      trades: [{}, {}, {}],
      autos: [],
    };
  }

  removeTrade() {}

  createNewTradeEntry() {
    this.setState(prevState => {
      let { trades } = prevState.trades;
      trades.push({});
      return { trades };
    });
  }

  addTrade() {}

  postTrade() {}

  submitTrades() {}

  autoComplete(textboxValue) {
    this.setState({
      autos: PokemonImages.findMatchingPokemon(textboxValue),
    });
  }

  render() {
    return (
      <div>
        <div>
          <button>Add New Trade</button>
        </div>

        {this.state.trades.map((child, index) => {
          return (
            <Card body>
              <CardTitle>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Pokemon Name"
                    aria-label="Pokemon Name"
                    aria-describedby="basic-addon1"
                    onChange={e => this.autoComplete(e.target.value)}
                  />
                </div>
                <div>
                  <ul>
                    {this.state.autos.map(element => {
                      return <li>{element}</li>;
                    })}
                  </ul>
                </div>
              </CardTitle>
              <ul>
                <li>
                  {' '}
                  Gender
                  <ul>
                    <li>
                      <div class="input-group mb-3">
                        <input type="checkbox" aria-label="Male" label="Male" />
                        <div class="input-group-append">
                          <span class="input-group-text">Male</span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div class="input-group mb-3">
                        <input type="checkbox" aria-label="Male" label="Male" />
                        <div class="input-group-append">
                          <span class="input-group-text">Female</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div class="input-group mb-3">
                    <input type="checkbox" aria-label="Male" label="Male" />
                    <div class="input-group-append">
                      <span class="input-group-text">Shiny</span>
                    </div>
                  </div>
                </li>
                <li>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="CP Requirement"
                    aria-label="CP Requirement"
                    aria-describedby="basic-addon1"
                  />
                </li>
                <li>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Level Requirement"
                    aria-label="Level Requirement"
                    aria-describedby="basic-addon1"
                  />
                </li>
              </ul>
            </Card>
          );
        })}
      </div>
    );
  }
}
