const mockNotificationAction = () => {
  console.log("Mock the notification alert event");
    const sidebar = document.getElementById('notification-bell');
    if (sidebar) {
      sidebar.classList.remove('d-none');
    }
   // hide the notification after a while
    setTimeout(function() {
      const sidebar = document.getElementById('notification-bell');
      if (sidebar) {
        sidebar.classList.add('d-none');
      }
    }, 1500);
    return  { type: "SHOW_NEW_NOTIFICATION" }
};

export default mockNotificationAction;
