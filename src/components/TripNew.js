import React from "react";

class TripNew extends React.Component {
  state = {
    name: "",
    location: {
      city: "",
      state: "",
      country: ""
    },
    start_date: "",
    end_date: "",
    description: "",
    work: false,
    leisure: false,
    beach: false,
    family: false,
    friends: false,
    user_id: this.props.currentUser,
    valid: { name: false, start_date: false, end_date: false }
  };

  validations = () => {
    for (let key in this.state.valid) {
      this.state[key] &&
        this.setState({ valid: { ...this.state.valid, [key]: true } });
    }
  };

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value }, this.validations);
  };

  handleLocationChange = (event, attr) => {
    this.setState({
      location: { ...this.state.location, [attr]: event.target.value }
    });
  };

  handleCheck = (event, attr) => {
    this.setState({ [attr]: event.target.checked });
  };

  render() {
    return (
      <form
        style={{ opacity: ".9", margin: " 0 20%" }}
        className="ui form segment"
        onSubmit={event => this.props.handleSubmit(event, this.state)}
      >
        <div className="field">
          <label>Trip Name</label>
          <input
            type="text"
            value={this.state.name}
            onChange={event => this.handleChange(event, "name")}
          />
        </div>
        <div className="fields">
          <div className="field">
            <label>City</label>
            <input
              type="text"
              placeholder="City"
              value={this.state.location.city}
              onChange={event => this.handleLocationChange(event, "city")}
            />
          </div>
          <div className="field">
            <label>State (if US)</label>
            <select
              className="ui fluid dropdown"
              value={this.state.state}
              onChange={event => this.handleLocationChange(event, "state")}
            >
              <option value="">State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="field">
            <label>Country</label>
            <input
              type="text"
              placeholder="Country"
              value={this.state.country}
              onChange={event => this.handleLocationChange(event, "country")}
            />
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <label>Start Date: </label>
            <input
              type="date"
              value={this.state.start_date}
              onChange={event => this.handleChange(event, "start_date")}
            />
          </div>
          <div className="field">
            <label>End Date: </label>
            <input
              type="date"
              value={this.state.end_date}
              onChange={event => this.handleChange(event, "end_date")}
            />
          </div>
        </div>
        <div className="field">
          <label> Description</label>
          <textarea
            value={this.state.description}
            id="description"
            rows="3"
            onChange={event => this.handleChange(event, "description")}
          />
        </div>

        <div className="inline fields">
          <label>Trip Type Tags</label>

          <div className="ui checkbox field">
            <input
              type="checkbox"
              value={this.state.work}
              onChange={event => this.handleCheck(event, "work")}
            />
            <label>Work</label>
          </div>
          <div className="ui checkbox field">
            <input
              type="checkbox"
              value={this.state.leisure}
              onChange={event => this.handleCheck(event, "leisure")}
            />
            <label>Leisure</label>
          </div>
          <div className="ui checkbox field">
            <input
              type="checkbox"
              value={this.state.beach}
              onChange={event => this.handleCheck(event, "beach")}
            />
            <label>Beach</label>
          </div>
          <div className="ui checkbox field">
            <input
              type="checkbox"
              value={this.state.family}
              onChange={event => this.handleCheck(event, "family")}
            />
            <label>Family</label>
          </div>
          <div className="ui checkbox field">
            <input
              type="checkbox"
              value={this.state.friends}
              onChange={event => this.handleCheck(event, "friends")}
            />
            <label>Friends</label>
          </div>
        </div>

        <br />

        <button className="ui button">Submit</button>
      </form>
    );
  }
}

export default TripNew;
