console.log("Extension is active!");

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("a");

  links.forEach(function(link) {
    link.addEventListener("click", function() {
      console.log("Link clicked:", link.href);

      chrome.runtime.sendMessage({ action: "saveLink", url: link.href });
    });
  });
});
