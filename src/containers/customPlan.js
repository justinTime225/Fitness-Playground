import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Reactable from 'reactable';
const Table = Reactable.Table;

class CustomPlan extends Component {
  render() {
    return (
      <div >
        <Table className="table" data={this.props.custom} />   
        <Link to="/"> Back to Form</Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    custom: state.customWorkout.list
  };
}

export default connect(mapStateToProps)(CustomPlan);