import React, { Component } from "react";
import BicycleForm from "./BicycleForm";
import Bicycle from "./Bicycle";
import Grid from "@material-ui/core/Grid";

const api_url = `https://immense-tor-38293.herokuapp.com/api/v1/bicycles`;

class BicycleList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bikes: [],
    };
    this.updateBicycleList = this.updateBicycleList.bind(this);
    this.deleteBike = this.deleteBike.bind(this);
  }

  componentDidMount() {
    this.getBicycles();
  }

  getBicycles() {
    fetch(api_url)
      .then((response) => response.json())
      .then((response_bikes) => {
        this.setState({
          bikes: response_bikes.reverse(),
        });
      });
  }

  updateBicycleList(bike) {
    let _bikes = this.state.bikes;
    // unshift add to the beginning of the array
    _bikes.unshift(bike);
    this.setState({
      bikes: _bikes,
    });
  }

  deleteBike(bike) {
    // delete the bike remotely
    // localhost:3001/api/v1/bicycles + /13
    var deleteURL = api_url + `/${bike.id}`;
    fetch(deleteURL, {
      method: "DELETE",
    }).then(() => {
      // Client side delete
      var _bikes = this.state.bikes;
      var index = _bikes.indexOf(bike);
      _bikes.splice(index, 1);
      this.setState({
        bikes: _bikes,
      });
    });
  }

  render() {
    return (
      <Grid container spacing={3}>
        <Grid bike xs={12}>
          <BicycleForm
            api_url={api_url}
            updateBicycleList={this.updateBicycleList}
          />
        </Grid>

        <Grid bike xs={12} id="bicycle_list">
          {this.state.bikes.map((bike) => (
            <Bicycle key={bike.id} bike={bike} deleteBike={this.deleteBike} />
          ))}
        </Grid>
      </Grid>
    );
  }
}

export default BicycleList;
