import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import request from 'superagent';

// Components
import Header from './Header';
import NotFound from './NotFound';
import DashboardNav from './DashboardNav';
import BusinessInfo from './dashboard-sections/BusinessInfo';
import MyCurrentPolicies from './dashboard-sections/MyCurrentPolicies';
import GetNewPolicy from './dashboard-sections/GetNewPolicy';
import InsuranceChecklist from './dashboard-sections/InsuranceChecklist';
import MyAgent from './dashboard-sections/MyAgent';
import Notifications from './dashboard-sections/Notifications';
import ReceiptsClaims from './dashboard-sections/ReceiptsClaims';
import Account from './dashboard-sections/Account';

// Dashboard Images
const rashmiImage = require('../styles/images/rashmi.png');
const logoImage = require('../styles/images/logo.png');
const logoInitials = require('../styles/images/logo-initials.png');
const lock = require('../styles/images/lock.png');

const API_URL = 'https://s3.amazonaws.com/coverwallet-funk/katas/notifications.json';

@autobind
class App extends Component {
  constructor() {
    super();
    this.state = {
      notifications: []
    }
  }

  componentDidMount() {
    var self = this;
    request
     .get(API_URL)
     .end(function(err, res){
        let notifications = res.body.notifications;
        self.setState({
          notifications: notifications
        });
    });
  }

  render () {
    return (
      <div className="">
        <Header />
        <DashboardNav />
        <Notifications notifications={this.state.notifications} />
      </div>

    );
  }
}

export default App;
