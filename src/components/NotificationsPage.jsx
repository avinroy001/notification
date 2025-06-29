import React, { useState } from 'react';
import NotificationItem from './NotificationItem';
import './NotificationsPage.css';

const initialNotifications = [
  {
    id: 1,
    name: 'Mark Webber',
    avatar: './assets/avatar-mark-webber.webp',
    action: 'reacted to your recent post',
    post: 'My first tournament today!',
    time: '1m ago',
    isNew: true,
  },
  {
    id: 2,
    name: 'Angela Gray',
    avatar: './assets/avatar-angela-gray.webp',
    action: 'followed you',
    time: '5m ago',
    isNew: true,
  },
  {
    id: 3,
    name: 'Jacob Thompson',
    avatar: './assets/avatar-jacob-thompson.webp',
    action: 'has joined your group',
    post: 'Chess Club',
    time: '1 day ago',
    isNew: true,
  },
  {
    id: 4,
    name: 'Rizky Hasanuddin',
    avatar: './assets/avatar-rizky-hasanuddin.webp',
    action: 'sent you a private message',
    time: '5 days ago',
    isNew: true,
    privateMessage: `Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.`,
  },
  {
    id: 5,
    name: 'Kimberly Smith',
    avatar: './assets/avatar-kimberly-smith.webp',
    action: 'commented on your picture',
    time: '1 week ago',
    isNew: false,
    image: './assets/image-chess.webp',
  },
  {
    id: 6,
    name: 'Nathan Peterson',
    avatar: './assets/avatar-nathan-peterson.webp',
    action: 'reacted to your recent post',
    post: '5 end-game strategies to increase your win rate',
    time: '2 weeks ago',
    isNew: false,
  },
  {
    id: 7,
    name: 'Anna Kim',
    avatar: './assets/avatar-anna-kim.webp',
    action: 'left the group',
    post: 'Chess Club',
    time: '2 weeks ago',
    isNew: false,
  },
];

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAllAsRead = () => {
    const updated = notifications.map((n) => ({ ...n, isNew: false }));
    setNotifications(updated);
  };

  const handleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isNew: false } : n))
    );
  };

  const unreadCount = notifications.filter((n) => n.isNew).length;

  return (
    <main>
      <header>
        <h2>
          Notifications <span className="notifications-counter">{unreadCount}</span>
        </h2>
        <button className="mark-all-button" onClick={markAllAsRead}>
          Mark all as read
        </button>
      </header>

      <ul id="list">
        {notifications.map((n) => (
          <NotificationItem key={n.id} notification={n} onRead={handleRead} />
        ))}
      </ul>

      <footer>
        Challenge by <a href="https://crio.do">Crio.Do</a>. Coded by Ketan Makode.
      </footer>
    </main>
  );
};

export default NotificationsPage;
