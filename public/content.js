console.log("content script started...");

// inject injected script
var s = document.createElement("script");
s.src = chrome.runtime.getURL("injected.js");
s.onload = function () {
  this.remove();
};
(document.head || document.documentElement).appendChild(s);

// receive message from injected script
window.addEventListener("message", function (e) {
  if (e.data.type === "FETCH_INTERCEPT") {
    console.log("inside message listerner of flipkart-content:");
    chrome.runtime.sendMessage({
      type: "FETCH_DATA",
      payload: e.data.data.response,
    });

    console.log("content script received for orders:", e.data.data.response);
  }

  console.log("content script received:", e.data.type, e.data.data);
});
