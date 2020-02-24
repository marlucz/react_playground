import React from "react";
import { connect } from "react-redux";
import { changeSeedAndFetch } from "../redux/actions/index";

class SeedPicker extends React.Component {
  render() {
    return (
      <div className="field">
        <select
          className="ui dropdown fluid"
          onChange={(e) => this.handleSeedChange(e)}
          value={this.props.seed}
        >
          <option value="default-seed">Default seed</option>
          <option value="one-seed">One seed</option>
          <option value="another-seed">Another seed</option>
        </select>
      </div>
    );
  }
  handleSeedChange = e => {
    this.props.changeSeedAndFetch(e.currentTarget.value);
  };
}

const mapStateToProps = state => {
  return {
    seed: state.seed
  };
};
const mapDispatchToProps = { changeSeedAndFetch };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeedPicker);
