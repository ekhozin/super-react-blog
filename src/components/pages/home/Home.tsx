import React from 'react';
import PropTypes from 'prop-types';

import MODALS from 'constants/modals';

class Home extends React.Component {
  handleShowModal1 = () => {
    return this.props.showModal(MODALS.TEST_MODAL);
  };

  render() {
    return (
      <div>
        <h1>Home page!</h1>
        <button onClick={this.handleShowModal1}>show modal 1</button>
      </div>
    );
  }
}

Home.propTypes = {
  showModal: PropTypes.func.isRequired
};

export default Home;
