const showFriendPostAction = (element_id='') => {
  console.log("Run the initial state of the page");
    const sidebar = document.getElementById(element_id);
    if (sidebar) {
      sidebar.classList.remove('d-none');
    }

  return  { type: "SHOW_FRIEND_POST" }
};

export default showFriendPostAction;
