var postMessageDebugger = {
  init: function() {
    console.log("postMessageDebugger activated");
    addEventListener("message", function(event) {
      console.log('PostMessageDebugger: ' + document.title + ' received');
      console.log('PostMessageDebugger: [Event origin]: ', event.origin);
      console.log('PostMessageDebugger: [Event data] ', event.data);
    });
  }
};

postMessageDebugger.init();
