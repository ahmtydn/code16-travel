/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Background from './Background';
import '../Styles/Header.css';
import logo from '../../assets//images/logo.svg';
import PropTypes from 'prop-types';

class Header extends Component {
  state = {
    experience: '',
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  changeExperience = (event) =>
    this.setState({ experience: event.target.value });

  render() {
    const { backgroundImagesData, navigationData, selectedCity, history } =
      this.props;
    return (
      <React.Fragment>
        <HeaderNav
          changeExperience={this.changeExperience}
          experience={this.state.experience}
          history={history}
          selectedCity={selectedCity}
          navigationData={navigationData}
        />
        <Background backgroundImagesData={backgroundImagesData} />
        <div className='search-bar-div'>
          <div className='select-city-large'>
            <i className='fas fa-map-marker' />
            <Searchbar
              style={customStyles}
              history={this.props.history}
              selectedCity={this.props.selectedCity}
            />
          </div>
          <div className='select-experience-large'>
            <input
              type='text'
              placeholder='Search for experiences'
              onChange={this.changeExperience}
              value={this.state.experience}
            />
            <i className='fas fa-search' />
          </div>
          <button id='go'>Let's Go</button>
        </div>
      </React.Fragment>
    );
  }
}

export class HeaderNav extends Component {
  static defaultProps = {
    history: {
      push: () => {},
      replace: () => {},
      // diğer history metodları...
    },
    navigationData: [
      {
        id: 1,
        name: 'Code16 Travel Picks',
      },
      {
        id: 2,
        name: 'Best Sellers',
      },
      {
        id: 3,
        name: 'Abu Dhabi City Tours',
      },
      {
        id: 4,
        name: 'Amsterdam Attractions',
      },
      {
        id: 5,
        name: 'Burj Khalifa',
      },
    ],
  };
  render() {
    const { navigationData, changeExperience, history } = this.props;
    return (
      <div className='header-wrap'>
        <div className='header-wrapper navbar-fixed-top'>
          <div className='header-left'>
            <div className='nav'>
              <div className='first-line'>
                <Link to={{ pathname: `/` }}>
                  <div className='svg-container'>
                    <img src={logo} alt='Code16 Travel' />
                  </div>
                </Link>
                <div className='select-city'>
                  <Searchbar
                    style={smallSearchbar}
                    history={history}
                    selectedCity={this.props.selectedCity}
                  />
                </div>
                <div className='select-experience'>
                  <input
                    type='text'
                    placeholder='Search for experiences'
                    onChange={changeExperience}
                    value={this.props.experience}
                  />
                  <i className='fas fa-search' />
                </div>
              </div>
              <div className='second-line'>
                <div className='best-picked'>
                  {navigationData &&
                    navigationData.map(({ id, name }) => (
                      <p key={id}>{name}</p>
                    ))}
                </div>
                <div className='support'>
                  <p>
                    24/7 Support{' '}
                    <span className='arrow-down'>
                      {' '}
                      <i className='fas fa-angle-down' />
                    </span>
                  </p>
                  <p
                    style={{
                      marginRight: '0px',
                    }}
                  >
                    English/USD
                    <span className='arrow-down'>
                      {' '}
                      <i className='fas fa-angle-down' />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const options = [
  { value: 'new-york', label: 'New York' },
  { value: 'las-vegas', label: 'Las Vegas' },
  { value: 'rome', label: 'Rome' },
  { value: 'paris', label: 'Paris' },
  { value: 'london', label: 'London' },
  { value: 'dubai', label: 'Dubai' },
  { value: 'barcelona', label: 'Barcelona' },
  { value: 'madrid', label: 'Madrid' },
  { value: 'singapore', label: 'Singapore' },
  { value: 'venice', label: 'Venice' },
  { value: 'milan', label: 'Milan' },
  { value: 'naples', label: 'Naples' },
  { value: 'budapest', label: 'Budapest' },
  { value: 'edinburg', label: 'Edinburg' },
  { value: 'florence', label: 'Florence' },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    width: 120,
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '14px',
    marginTop: '10px',
    paddingLeft: '5px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

const smallSearchbar = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color: state.isSelected ? 'red' : '#727272',
    padding: 10,
    cursor: 'pointer',
    background: state.isSelected ? 'white' : 'white',
    fontSize: '13px',
    textAlign: 'left',
    paddingLeft: '20px',
    width: 150,
  }),
  control: () => ({
    width: 150,
    display: 'flex',
    fontSize: '11px',
    marginLeft: '15px',
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  },
};

class Searchbar extends Component {
  state = {
    selectedOption: null,
  };

  handleChange = (selectedOption) => {
    this.setState({ selectedOption: selectedOption });
    this.changeUrl(selectedOption.value);
  };

  changeUrl = (url) => {
    this.props.history.push(`/cities/${url}`);
  };

  render() {
    const { selectedOption } = this.state;
    const { selectedCity } = this.props;
    if (selectedCity) {
      return (
        <Select
          styles={this.props.style}
          placeholder={selectedCity}
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className='city-select-dropdown'
        />
      );
    } else {
      return (
        <Select
          styles={this.props.style}
          placeholder='Select City'
          value={selectedOption}
          onChange={this.handleChange}
          options={options}
          className='city-select-dropdown'
        />
      );
    }
  }
}

export default Header;
