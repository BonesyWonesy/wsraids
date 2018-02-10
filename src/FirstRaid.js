import React from "react";
import PropTypes from "prop-types";
import Toggle from "react-toggle";

export default class ComponentName extends React.Component {
  state = {
    checked: false,
  };

  handleChange = e => this.setState({ checked: e.target.checked });

  render() {
    return (
      <div>
        For the week, is this the character's first time raiding here?
        <br />
        <Toggle onChange={this.handleChange} />
        <input type="hidden" name="firstRaid" value={JSON.stringify(this.state.checked)} />
      </div>
    );
  }

  static propTypes = {
    children: PropTypes.node,
  };
}
