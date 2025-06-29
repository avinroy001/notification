import React, { useState } from 'react';
import NotificationItem from './NotificationItem';

const initialNotifications = [
  {
    id: 1,
    avatar: 'https://i.pravatar.cc/45?img=1',
    name: 'Mark Webber',
    action: 'reacted to your recent post',
    post: 'My first tournament today!',
    time: '1m ago',
    isNew: true,
  },
  {
    id: 2,
    avatar: 'https://i.pravatar.cc/45?img=2',
    name: 'Angela Gray',
    action: 'followed you',
    time: '5m ago',
    isNew: true,
  },
  {
    id: 3,
    avatar: 'https://i.pravatar.cc/45?img=3',
    name: 'Jacob Thompson',
    action: 'has joined your group',
    post: 'Chess Club',
    time: '1 day ago',
    isNew: true,
  },
  {
    id: 4,
    avatar: 'https://i.pravatar.cc/45?img=4',
    name: 'Rizky Hasanuddin',
    action: 'sent you a private message',
    time: '5 days ago',
    isNew: true,
    privateMessage: `Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.`,
  },
  {
    id: 5,
    avatar: 'https://i.pravatar.cc/45?img=5',
    name: 'Kimberly Smith',
    action: 'commented on your picture',
    time: '1 week ago',
    image: 'https://placekitten.com/60/60',
  },
  {
    id: 6,
    avatar: 'https://i.pravatar.cc/45?img=6',
    name: 'Nathan Peterson',
    action: 'reacted to your recent post',
    post: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
  },
  {
    id: 7,
    avatar: 'https://i.pravatar.cc/45?img=7',
    name: 'Anna Kim',
    action: 'left the group',
    post: 'Chess Club',
    time: '2 weeks ago',
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter(n => n.isNew).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isNew: false })));
  };

  const markOneAsRead = (id) => {
    setNotifications(prev =>
      prev.map(n => n.id === id ? { ...n, isNew: false } : n)
    );
  };

  return (
    <main>
      <header>
        <h2>Notifications <span className="notifications-counter">{unreadCount}</span></h2>
        <button className="mark-all-button" onClick={markAllAsRead}>Mark all as read</button>
      </header>

      <ul id="list">
        {notifications.map(notification => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            onRead={markOneAsRead}
          />
        ))}
      </ul>

      <footer>
        Challenge by Crio.Do. Coded by Ketan Makode.
      </footer>
    </main>
  );
};

export default NotificationsPage;
