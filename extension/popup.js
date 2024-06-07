document.getElementById('exportButton').addEventListener('click', function() {
  chrome.storage.local.get({ urls: [] }, function(result) {
      const links = result.urls.join('\n');
      downloadFile(links, 'links.txt');
  });
});
document.getElementById('clearLinksBtn').addEventListener('click', function() {
  chrome.storage.local.set({ urls: [] }, function(result) {
    console.log("Stored links cleared.");
    
  });
});

function downloadFile(content, fileName) {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
