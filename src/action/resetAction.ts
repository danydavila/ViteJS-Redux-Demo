const resetAction = () => {
  console.log("Mock the notification alert event");
    const notification = document.getElementById('notification-bell');
    const sidebar = document.getElementById('sidebar-section');
    const lukePost = document.getElementById('luke-post');
    const smithPost = document.getElementById('smith-post');
    if (notification) {
      notification.classList.add('d-none');
    }
    if (lukePost) {
      lukePost.classList.add('d-none');
    }
    if (sidebar) {
      sidebar.classList.add('d-none');
    }
    if (smithPost) {
      smithPost.classList.add('d-none');
    }
};

export default resetAction;
