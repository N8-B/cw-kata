/*
  Notifications (<Notifications />)
*/
import React from 'react';

const rashmiImage = require('../../styles/images/rashmi.png');
const lock = require('../../styles/images/lock.png');

class Notifications extends React.Component {

  render() {
    var notifications = this.props.notifications || [];

    var renderNotifications = notifications.map(function (notification, index) {
      var title = notification.title !== undefined ? notification.title : '';
      var msg = notification.msg !== undefined ? notification.msg : '';
      var link = notification.link !== undefined ? notification.link : undefined;

      return (
        <div className="notification" key={index}>
          <div className="notification-list-icon" >
            <div className="icon"></div>
          </div>
          <div className="arrow-left hide-mobile"></div>
          <div className="notification-list-item">
            <span className="notification-list-item-title">{title} </span>
            <span className="notification-list-item-title--icon"><i className="fa fa-share"></i></span>
            <p>{msg}</p>
            { link !== undefined ? <a href={link}>Link</a> : '' }
          </div>
        </div>
      );
    });

    return (
      <div className="page-wrap">
        <div className="dashboard-section-content">
          <div className="notifications">
            <h1>Notifications <i className="fa fa-question-circle fa-small"></i> </h1>
            {renderNotifications}
          </div>
          {/*TODO: Make this a component. */}
          <div className="agent-contact-mobile hide-desktop">
            <div className="agent-contact-mobile-img">
              <img src={rashmiImage} alt="Rashmi" />
            </div>
            <div className="agent-contact-mobile-details">
              <h3>Prefer to talk to your agent?</h3>
              <span className="agent-contact-mobile-telephone">(646) 844-9933</span>
              <p>Free and Friendly</p>
              <span className="agent-contact-mobile-shedule">Mon-Fri 10am-5pm EST</span> <br />
              <button>Chat with your expert &raquo;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

Notifications.propTypes = {
  notifications: React.PropTypes.array.isRequired
};

export default Notifications;
