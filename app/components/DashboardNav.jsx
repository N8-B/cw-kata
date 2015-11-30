/*
  DashboardNav (<DashboardNav />)
*/
import React from 'react';
const rashmiImage = require('../styles/images/rashmi.png');

class DashboardNav extends React.Component {

  render() {
    return (
      <div className="dashboard-nav">
        <ul className="dashboard-nav-list">
          <li><a className="" href=""><i className="icon fa fa-info-circle fa-fw"></i><span className="hide-mobile">Business Info</span></a></li>
          <li><a className="" href=""><i className="icon fa fa-edit fa-fw"></i><span className="hide-mobile">My Current Policies</span></a></li>
          <li><a className="" href=""><i className="icon fa fa-plus-circle fa-fw"></i><span className="hide-mobile">Get New Policy</span></a></li>
          <li><a className="" href=""><i className="icon fa fa-check-circle-o fa-fw"></i><span className="hide-mobile">Insurance Checklist</span></a></li>
          <li><a className="" href=""><i className="icon fa fa-commenting-o fa-fw"></i><span className="hide-mobile">My Agent</span></a></li>
          <li className="is-active"><a href=""><i className="icon fa fa-bell-o fa-fw"></i><span className="hide-mobile">Notifications</span></a></li>
          <li><a className="" href=""><i className="icon fa fa-file-text-o fa-fw"></i><span className="hide-mobile">Receipts/Claims</span></a></li>
          <li><a className="" href=""><i className="icon fa fa-user fa-fw"></i><span className="hide-mobile">Account</span></a></li>

          <li>
            {/*TODO: Make this a component. */}
            <div className="agent-contact-desktop hide-mobile">
              <img src={rashmiImage} alt="Rashmi" />
              <h3>Prefer to talk to your agent?</h3>
              <span className="agent-contact-desktop-telephone">(646) 844-9933</span>
              <p>Free and Friendly</p>
              <span className="agent-contact-desktop-shedule">Mon-Fri 10am-5pm EST</span>
              <button>Chat with your expert &raquo;</button>
            </div>
          </li>
        </ul>
      </div>
    );
  }

}

DashboardNav.propTypes = {
};

export default DashboardNav;
