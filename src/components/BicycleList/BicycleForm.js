import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
class BicycleForm extends Component {
  constructor(props) {
    super(props);

    let defaultFullName = "Alchemy Bicycles";
    let defaultDescription =
      "To build the best Bicycle in the world is the motto of Alchemy Bicycles. It was their main mission when they started in 2008 and is still their main motivation today. The Denver based American brand pride themselves on building quality carbon and titanium framed bikes, and have won awards for their workmanship.";
    let defaultWheelSize = 15;
    let defaultRimColor = "Blue";
    let defaultSaddleColor = "Black";
    let defaultPrice = 34.5;
    let defaultImageUrl =
      "https://bikexchange.com/wp-content/uploads/2020/11/Arktos-29-Vanilla-XTR-12-Speed.jpg";

    this.state = {
      api_url: props.api_url,

      full_name: defaultFullName,
      description: defaultDescription,
      wheel_size: defaultWheelSize,
      rim_color: defaultRimColor,
      saddle_color: defaultSaddleColor,
      price: defaultPrice,
      image_url: defaultImageUrl,

      defaultFullNameValue: defaultFullName,
      defaultDescriptionValue: defaultDescription,
      defaultWheelSizeValue: defaultWheelSize,
      defaultRimColorValue: defaultRimColor,
      defaultSaddleColorValue: defaultSaddleColor,
      defaultPriceValue: defaultPrice,
      defaultImageUrlValue: defaultImageUrl,
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleFullNameChange = this.handleFullNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleWheelSizeChange = this.handleWheelSizeChange.bind(this);
    this.handleRimColorChange = this.handleRimColorChange.bind(this);
    this.handleSaddleColorChange = this.handleSaddleColorChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
  }

  async formSubmit(formData) {
    var data = new FormData(formData);
    await fetch(this.state.api_url, {
      method: "POST",
      mode: "cors",
      body: data,
    })
      .then((response) => response.json())
      .then((response) => this.props.updateBicycleList(response));
    this.setState({
      full_name: this.state.defaultFullNameValue,
      description: this.state.defaultDescriptionValue,
      wheel_size: this.state.defaultWheelSizeValue,
      rim_color: this.state.defaultRimColorValue,
      saddle_color: this.state.defaultSaddleColorValue,
      price: this.state.defaultPriceValue,
      image_url: this.state.defaultImageUrlValue,
    });
  }

  handleFullNameChange(event) {
    this.setState({
      full_name: event.target.value,
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    });
  }

  handleWheelSizeChange(event) {
    this.setState({
      wheel_size: event.target.value,
    });
  }

  handleRimColorChange(event) {
    this.setState({
      rim_color: event.target.value,
    });
  }

  handleSaddleColorChange(event) {
    this.setState({
      saddle_color: event.target.value,
    });
  }

  handlePriceChange(event) {
    this.setState({
      price: event.target.value,
    });
  }

  handleImageUrlChange(event) {
    this.setState({
      image_url: event.target.value,
    });
  }

  render() {
    return (
      <Grid container>
        <Grid bike xs></Grid>
        <Grid bike xs={8}>
          <form
            onSubmit={this.handleSubmit}
            id="bicycle_form"
            autoComplete="off"
            className="create-space-form"
          >
            <Grid container>
              <Grid bike xs={12} className="create-space">
                <TextField
                  id="full_name_input"
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  name="bicycle[full_name]"
                  value={this.state.full_name}
                  onChange={this.handleFullNameChange}
                  fullWidth
                />
              </Grid>
              <Grid bike xs={12} className="create-space">
                <TextareaAutosize
                  id="description_input"
                  label="Description"
                  variant="outlined"
                  type="text"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  style={{ width: "99%", borderRadius: "5px" }}
                  rowsMin={3}
                  placeholder="Describe your bicycle..."
                  name="bicycle[description]"
                ></TextareaAutosize>
              </Grid>

              <Grid bike xs={12} className="create-space">
                <TextField
                  id="wheel_size_input"
                  label="Wheel Size"
                  variant="outlined"
                  type="text"
                  name="bicycle[wheel_size]"
                  value={this.state.wheel_size}
                  onChange={this.handleWheelSizeChange}
                  fullWidth
                />
              </Grid>

              <Grid bike xs={12} className="create-space">
                <TextField
                  id="wheel_size_input"
                  label="Wheel Size"
                  variant="outlined"
                  type="text"
                  name="bicycle[wheel_size]"
                  value={this.state.wheel_size}
                  onChange={this.handleWheelSizeChange}
                  fullWidth
                />
              </Grid>
              <Grid bike xs={12} className="create-space">
                <TextField
                  id="rim_color_input"
                  label="Rim Color"
                  variant="outlined"
                  type="text"
                  name="bicycle[rim_color]"
                  value={this.state.rim_color}
                  onChange={this.handleRimColorChange}
                  fullWidth
                />
              </Grid>
              <Grid bike xs={12} className="create-space">
                <TextField
                  id="saddle_color_input"
                  label="Saddle Color"
                  variant="outlined"
                  type="text"
                  name="bicycle[saddle_color]"
                  value={this.state.saddle_color}
                  onChange={this.handleSaddleColorChange}
                  fullWidth
                />
              </Grid>
              <Grid bike xs={12} className="create-space">
                <TextField
                  id="price_input"
                  label="Price"
                  variant="outlined"
                  type="text"
                  name="bicycle[price]"
                  value={this.state.price}
                  onChange={this.handlePriceChange}
                  fullWidth
                />
              </Grid>
              <Grid bike xs={12} className="create-space">
                <TextField
                  id="image_url_input"
                  label="Image URL"
                  variant="outlined"
                  type="text"
                  name="bicycle[image_url]"
                  value={this.state.image_url}
                  onChange={this.handleImageUrlChange}
                  fullWidth
                />
              </Grid>
              <Grid bike xs={2} className="create-space">
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  style={{ height: "100%" }}
                >
                  Add Bicycle
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
        <Grid bike xs></Grid>
      </Grid>
    );
  }
}

export default BicycleForm;
