import React, { useState } from 'react';

const NotificationItem = ({ notification, onRead }) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    if (notification.isNew) {
      onRead(notification.id);
    }
    if (notification.privateMessage) {
      setShowMessage((prev) => !prev);
    }
  };

  return (
    <li
      onClick={handleClick}
      className={notification.isNew ? 'new-notification' : ''}
    >
      <img src={notification.avatar} alt={notification.name} className="avatar" />

      <div className="notification-infos">
        <a href="#" className="profile-link">{notification.name}</a>

        <div className="notification-text">
          <span className="action"> {notification.action}</span>
          {notification.post && (
            <a href="#" className="notification-link-post"> {notification.post}</a>
          )}
        </div>

        <div className="notification-time">{notification.time}</div>

        {notification.privateMessage && (
          <div
            className={`notification-text-private-message ${
              showMessage ? 'visible' : ''
            }`}
          >
            {notification.privateMessage}
          </div>
        )}
      </div>

      {/* ✅ Only render dot if isNew */}
      {notification.isNew && (
        <span className="notification-dot" data-testid="notification-dot"></span>
      )}

      {notification.image && (
        <img
          src={notification.image}
          alt="preview"
          style={{ width: '50px', height: '50px', borderRadius: '6px' }}
        />
      )}
    </li>
  );
};

export default NotificationItem;
