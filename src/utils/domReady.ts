/**
 * @description A function to check if the DOM is ready to be manipulated.
 * @param {function} callbackFunc - a callback function  to be called when the DOM is ready.
 * @return {void}
 */
const domReady = (callbackFunc: () => void): void => {
  // Checks if the DOMContentLoaded event has already occurred
  if (
    document.readyState === 'complete' ||
    document.readyState === 'interactive'
  ) {
    // If so, the callback is executed immediately. call on next available tick
    setTimeout(callbackFunc, 1);

  } else if (document.addEventListener) {
    // All modern browsers to register DOMContentLoaded
    // Document is already ready, call the callback directly
    document.addEventListener('DOMContentLoaded', callbackFunc);
  } else {
    // Old IE browsers
    document.attachEvent('onreadystatechange', function() {
      if (document.readyState === 'complete') {
        callbackFunc();
      }
    });
  }
};

export default domReady;
