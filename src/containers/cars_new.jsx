 import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Aside from '../components/aside';
import { addCar } from '../actions';

class CardsNew extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    // TODO(Eschults): get stuff from form?
    const car = { owner: 'TODO', brand: 'TODO', model: 'TODO', plate: 'TODO' };
    this.props.addCar(this.props.history, this.props.garage, car);
  }

  render () {
    return [
      <Aside key="aside" garage={this.props.garage}>
        <Link to="/">Back to list</Link>
      </Aside>,
      <div key="add" className="form-container" style={{ backgroundImage: "url('/assets/images/form.jpg')"}}>
        <div className="overlay"></div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputBrand">Brand</label>
            <input type="text" className="form-control" id="InputBrand" placeholder="Aston Martin" />
          </div>
          <div className="form-group">
            <label htmlFor="InputModel">Model</label>
            <input type="text" className="form-control" id="InputModel" placeholder="DB Mark III" />
          </div>
          <div className="form-group">
            <label htmlFor="InputOwner">Owner</label>
            <input type="text" className="form-control" id="InputOwner" placeholder="James Bond" />
          </div>
          <div className="form-group">
            <label htmlFor="InputPlate">Plate</label>
            <input type="text" className="form-control" id="InputPlate" placeholder="EGU-503H" />
          </div>
          <button type="submit">Add car</button>
        </form>
      </div>
    ];
  }
};

function mapStateToProps(state) {
  return {
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCar }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardsNew));
