import React from 'react';
import PropTypes from 'prop-types';

import modalNames from 'components/modals/modals-map';

class Home extends React.Component {
  handleShowModal1 = () => {
    return this.props.showModal(modalNames.TEST_MODAL);
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
