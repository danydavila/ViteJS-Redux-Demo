const showSidebarAction = () => {
  console.log("Run the initial state of the page");
    const sidebar = document.getElementById('sidebar-section');
    if (sidebar) {
      sidebar.classList.remove('d-none');
    }

  return  { type: "SHOW_SIDEBAR" }
};

export default showSidebarAction;
