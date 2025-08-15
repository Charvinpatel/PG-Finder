"use client";

import { useState } from "react";
import { Bell, Check, X, Settings } from "lucide-react";

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "new_listing",
      title: "New PG Available in Koramangala",
      message: "A new PG matching your preferences is now available",
      time: "2 hours ago",
      read: false,
      icon: "🏠",
    },
    {
      id: 2,
      type: "price_drop",
      title: "Price Drop Alert",
      message: "Elite Boys Hostel reduced price by ₹1,000",
      time: "1 day ago",
      read: false,
      icon: "💰",
    },
    {
      id: 3,
      type: "booking_confirmed",
      title: "Booking Confirmed",
      message: "Your booking for Sunrise PG has been confirmed",
      time: "3 days ago",
      read: true,
      icon: "✅",
    },
    {
      id: 4,
      type: "reminder",
      title: "Payment Reminder",
      message: "Monthly rent payment due in 3 days",
      time: "1 week ago",
      read: true,
      icon: "⏰",
    },
    {
      id: 5,
      type: "system",
      title: "Welcome to PG Finder",
      message: "Complete your profile to get better recommendations",
      time: "2 weeks ago",
      read: true,
      icon: "👋",
    },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map((notif) => ({ ...notif, read: true })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <div className="notification-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h1 className="mb-2">
                  <Bell className="text-primary me-2" size={32} />
                  Notifications
                </h1>
                <p className="text-muted">
                  {unreadCount > 0
                    ? `${unreadCount} unread notification${
                        unreadCount > 1 ? "s" : ""
                      }`
                    : "All caught up!"}
                </p>
              </div>
              <div className="d-flex gap-2">
                {unreadCount > 0 && (
                  <button
                    className="btn btn-outline-primary"
                    onClick={markAllAsRead}
                  >
                    <Check size={18} className="me-2" />
                    Mark All Read
                  </button>
                )}
                <button className="btn btn-outline-secondary">
                  <Settings size={18} className="me-2" />
                  Settings
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="card shadow-sm">
              {notifications.length > 0 ? (
                <div className="list-group list-group-flush">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`list-group-item list-group-item-action ${
                        !notification.read ? "bg-light" : ""
                      }`}
                    >
                      <div className="d-flex justify-content-between align-items-start">
                        <div className="d-flex">
                          <div className="me-3 fs-4">{notification.icon}</div>
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <h6
                                className={`mb-0 ${
                                  !notification.read ? "fw-bold" : ""
                                }`}
                              >
                                {notification.title}
                              </h6>
                              {!notification.read && (
                                <span className="badge bg-primary rounded-pill">
                                  New
                                </span>
                              )}
                            </div>
                            <p className="mb-1 text-muted">
                              {notification.message}
                            </p>
                            <small className="text-muted">
                              {notification.time}
                            </small>
                          </div>
                        </div>
                        <div className="d-flex gap-1">
                          {!notification.read && (
                            <button
                              className="btn btn-sm btn-outline-success"
                              onClick={() => markAsRead(notification.id)}
                              title="Mark as read"
                            >
                              <Check size={14} />
                            </button>
                          )}
                          <button
                            className="btn btn-sm btn-outline-danger"
                            onClick={() => deleteNotification(notification.id)}
                            title="Delete notification"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card-body text-center py-5">
                  <Bell size={64} className="text-muted mb-3" />
                  <h4>No Notifications</h4>
                  <p className="text-muted">
                    You're all caught up! Check back later for updates.
                  </p>
                </div>
              )}
            </div>

            {/* Notification Settings */}
            <div className="card shadow-sm mt-4">
              <div className="card-header">
                <h5 className="mb-0">Notification Preferences</h5>
              </div>
              <div className="card-body">
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="newListings"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="newListings">
                        New Listings
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="priceDrops"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="priceDrops">
                        Price Drops
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="bookingUpdates"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="bookingUpdates"
                      >
                        Booking Updates
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="paymentReminders"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="paymentReminders"
                      >
                        Payment Reminders
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mt-3">
                  <button className="btn btn-primary">Save Preferences</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
