document.getElementById('saveButton').addEventListener('click', () => {
    const startswith = document.getElementById('startswith').value;
    const endswith = document.getElementById('endswith').value;
    const includes = document.getElementById('includes').value;
  
    chrome.storage.sync.set({ startswith, endswith, includes }, () => {
      alert('Settings saved');
    });
  });
  
  document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['startswith', 'endswith', 'includes'], (result) => {
      document.getElementById('startswith').value = result.startswith || '';
      document.getElementById('endswith').value = result.endswith || '';
      document.getElementById('includes').value = result.includes || '';
    });
  });
  