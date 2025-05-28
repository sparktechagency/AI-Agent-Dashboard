"use client";

function Notifications() {
  const notifications = [
    {
      id: 1,
      type: "users",
      title: "9+ new users registered",
      subtitle: "Tap to view new users",
      date: "05-04-2025",
      time: "05:50 PM",
      borderColor: "border-l-blue-500",
      bgColor: "bg-blue-50",
      icon: "📧",
    },
    {
      id: 2,
      type: "subscriber",
      title: "New subscriber",
      subtitle: "You have a new subscriber. Tap to view",
      date: "05-04-2025",
      time: "05:50 PM",
      borderColor: "border-l-orange-500",
      bgColor: "bg-orange-50",
      icon: "📧",
    },
  ];

  const handleNotificationClick = (notification) => {
    console.log("Notification clicked:", notification);
    // Add your navigation logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className=" mx-auto">
        <div className="space-y-3">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => handleNotificationClick(notification)}
              className={`
                bg-white rounded-lg shadow-sm border-l-4 ${notification.borderColor}
                p-4 cursor-pointer hover:shadow-md transition-shadow duration-200
                flex items-center justify-between
              `}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {notification.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">
                      {notification.subtitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{notification.date}</span>
                  </div>

                  <div className="flex items-center space-x-1">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{notification.time}</span>
                  </div>
                </div>
              </div>

              <div className="ml-4">
                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {notifications.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 01-7.5-7.5H7.5"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No notifications
            </h3>
            <p className="text-gray-500">
              You're all caught up! Check back later for new notifications.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
