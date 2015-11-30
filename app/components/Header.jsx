/*
  Header (<Header />)
*/
import React from 'react';
const logoImage = require('../styles/images/logo.png');

class Header extends React.Component {

  render() {
    return (
      <div className="dashboard-header-row">
        <div className="dashboard-header-logo">
          <a href="#"> <img src={logoImage} alt="CoverWallet logo" /> </a>
        </div>
        <div className="dashboard-header-settings">
          <ul>
            <li>
              example@example.com <a href="#"><i className="fa fa-cog"></i></a>
            </li>
          </ul>
        </div>
      </div>

    );
  }

}

Header.propTypes = {
};

export default Header;
