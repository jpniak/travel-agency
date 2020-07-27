import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import styles from './OrderOption.scss';

{/* ZMIANA KOMPONENTU KLASOWEGO NA FUNKCYJNY I DODANIE PROPSÓW - z powodu testu...
class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };

  handleChange = date => {
    this.setState({
      startDate: date,
    });
  };

  render() {
    return (
      <DatePicker	
          className={styles.date}	
          selected={this.state.startDate}	
          onSelect={this.handleSelect}	
          onChange={this.handleChange}	
        />	
      );	
    }	
}

*/}
      

const OrderOptionDate = ({ currentValue, setOptionValue }) => (
  <DatePicker
    className={styles.input}
    type="date"
    value={currentValue}
    selected={currentValue}
    onChange={setOptionValue}
    placeholderText={'Click to select a date'}
  />
);

{/* DODANIE TYPÓW PROPSOW */}
OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.any,
};


export default OrderOptionDate;
