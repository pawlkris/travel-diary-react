import React from "react";
var shortid = require("shortid");

class Filter extends React.Component {
  state = {
    year: this.props.filter.year,
    month: this.props.filter.month,
    city: this.props.filter.city,
    state: this.props.filter.state,
    country: this.props.filter.country,
    work: this.props.filter.work,
    leisure: this.props.filter.leisure,
    beach: this.props.filter.beach,
    family: this.props.filter.family,
    friends: this.props.filter.friends,
    description: this.props.filter.description,
    sortBy: this.props.filter.sortBy
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      year: nextProps.filter.year,
      month: nextProps.filter.month,
      city: nextProps.filter.city,
      state: nextProps.filter.state,
      country: nextProps.filter.country,
      work: nextProps.filter.work,
      leisure: nextProps.filter.leisure,
      beach: nextProps.filter.beach,
      family: nextProps.filter.family,
      friends: nextProps.filter.friends,
      description: nextProps.filter.description,
      sortBy: nextProps.filter.sortBy
    });
  }

  handleChange = (event, attr) => {
    this.setState({ [attr]: event.target.value });
  };

  handleCheck = (event, attr) => {
    this.setState({ [attr]: event.target.checked });
  };

  componentWillUnmount() {
    this.props.resetFilter();
  }

  render() {
    let year = new Date().getFullYear();
    let years = [];
    for (let i = year; i >= year - 30; i--) {
      years.push(i);
    }
    let yearTags = years.map(y => (
      <option key={shortid.generate()} value={y}>
        {y}{" "}
      </option>
    ));
    return (
      <form
        className="ui form centered raised segment filter"
        onSubmit={event => this.props.handleSubmit(event, this.state)}
      >
        <h3 className="ui dividing header">Search Trips:</h3>
        <div className="fields">
          <div className="field">
            <label>City</label>
            <input
              type="text"
              value={this.state.city}
              onChange={event => this.handleChange(event, "city")}
            />
          </div>
          <div className="field">
            <label>State (if US)</label>
            <select
              className="ui fluid dropdown"
              value={this.state.state}
              onChange={event => this.handleChange(event, "state")}
            >
              <option value="" />
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
              value={this.state.country}
              onChange={event => this.handleChange(event, "country")}
            />
          </div>
        </div>

        <div className="fields">
          <div className="field">
            <select
              className="ui fluid dropdown"
              value={this.state.year}
              onChange={event => this.handleChange(event, "year")}
            >
              <option value="">Year</option>
              {yearTags}
            </select>
          </div>
          <div className="field">
            <select
              className="ui fluid dropdown"
              value={this.state.month}
              onChange={event => this.handleChange(event, "month")}
            >
              <option value="">Month</option>
              <option value="1">Janaury</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>
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
        </div>
        <div className="inline fields right">
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

        <div className="field">
          <div className="field">
            <label>Description</label>
            <input
              type="text"
              value={this.state.description}
              onChange={event => this.handleChange(event, "description")}
            />
          </div>
          <label>Sort By:</label>
          <select
            className="ui fluid dropdown"
            value={this.state.sortBy}
            onChange={event => this.handleChange(event, "sortBy")}
          >
            <option value="newest">Chronological (Recent First)</option>
            <option value="oldest">Chronological (Oldest First)</option>
            <option value="alpha">Trip Name (A-Z)</option>
            <option value="alpha-reverse">Trip Name (Z-A)</option>
          </select>
        </div>
        <br />
        <button className="ui button default">Submit</button>
        <button
          onClick={this.props.resetFilter}
          className="ui button inverted red"
        >
          Reset
        </button>
      </form>
    );
  }
}

export default Filter;
