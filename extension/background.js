chrome.webRequest.onCompleted.addListener(
  function(details) {
    chrome.storage.sync.get(['startswith', 'endswith', 'includes'], function(result) {
      const { startswith, endswith, includes } = result;

      if (endswith && details.url.endsWith(endswith)) {
        saveUrlToFile(details.url);
      }
      else if (startswith && details.url.startsWith(startswith)) {
        saveUrlToFile(details.url);
      }
      else if (includes && details.url.includes(includes)) {
        saveUrlToFile(details.url);
      }
    });
  },
  { urls: ["<all_urls>"], types: ["xmlhttprequest"] }
);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === "saveUrl") {
      saveUrlToFile(request.url);
      sendResponse({ success: true });
    }
  }
);

function saveUrlToFile(url) {
  chrome.storage.local.get({ urls: [] }, function(result) {
    result.urls.push(url);
    chrome.storage.local.set({ urls: result.urls });
    console.log(url)
  });
}
