import * as React from 'react';
import PropTypes from 'prop-types';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="home">

      </div>
    );
  }
}

Home.propTypes = {
  children: PropTypes.element
};