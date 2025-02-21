import "./style.css";
import { createStore, Reducer, AnyAction } from "redux";
import initializeAction from "./action/initializeAction";
import showSidebarAction from "./action/showSidebarAction";
import mockNotificationAction from "./action/mockNotificationAction";
import showFriendPostAction from "./action/showFriendPostAction";
import resetAction from "./action/resetAction";

// Initial state with a proper type
const initialState: ReduxPageState = { type: "INITIALIZE" };

// The reducer with proper typing
const ReduxPageReducer: Reducer<ReduxPageState, AnyAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "INITIALIZED":
      console.log("the initial state of the page. show user regular profile.");
      initializeAction();
      return { ...state, type: "INITIALIZED" };

    case "SHOW_SIDEBAR":
      console.log("Show the Sidebar state");
      showSidebarAction();
      return { ...state, type: "SHOW_SIDEBAR" };

    case "SHOW_NEW_NOTIFICATION":
      console.log("Show the new alert nofitication bell state");
      mockNotificationAction();
      return { ...state, type: "SHOW_NEW_NOTIFICATION" };

    case "SHOW_FRIEND_POST_LUKE":
      console.log("Dispatch the action: SHOW_FRIEND_POST_LUKE");
      showFriendPostAction('luke-post');
      return { ...state, type: "SHOW_FRIEND_POST_LUKE" };

    case "SHOW_FRIEND_POST_SMITH":
      console.log("Dispatch the action: SHOW_FRIEND_POST_SMITH");
      showFriendPostAction('smith-post');
      return { ...state, type: "SHOW_FRIEND_POST_SMITH" };

    case "RESET_PAGE":
      console.log("Dispatch the action: RESET_PAGE");
      resetAction();
      return { ...state, type: "RESET_PAGE" };
    default:
      return state;
  }
};

// for Production
//const ReduxStore = createStore(ReduxPageReducer);

// For development
// Create the store with Redux DevTools support in development
const ReduxStore = createStore(
  ReduxPageReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__({trace: true, traceLimit: 25})
);

// Use subscribe() to update the UI in response to state changes.
ReduxStore.subscribe(function () {
  ReduxStore.getState();
});

// Example dispatches page events
ReduxStore.dispatch({ type: "INITIALIZE" });

// show his friends networks
setTimeout(function () {
  // after the user been on the page for 1 second
  ReduxStore.dispatch({ type: "SHOW_SIDEBAR" });
  ReduxStore.dispatch({ type: "SHOW_NEW_NOTIFICATION" });
}, 2500);

// mock another event comming from the api via
// a web socket
setTimeout(function () {
  ReduxStore.dispatch({ type: "SHOW_FRIEND_POST_LUKE" });
  ReduxStore.dispatch({ type: "SHOW_NEW_NOTIFICATION" });
}, 4500);

setTimeout(function () {
  ReduxStore.dispatch({ type: "SHOW_FRIEND_POST_SMITH" });
  ReduxStore.dispatch({ type: "SHOW_NEW_NOTIFICATION" });
}, 7500);

// setTimeout(function () {
//   ReduxStore.dispatch({ type: "RESET_PAGE" });
// }, 8000);
