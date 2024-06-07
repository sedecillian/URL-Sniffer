# URL-Sniffer
### A extension to capture and export links to local file.  
Set the criteria for links to be captured in the settings page 
- **Starts with (Prefix):**
  - Example: https://youtube
  - URL: `https://m.youtube.com/*`
  
- **Ends with (Suffix):**
  - Example: .mp4
  - URL: `https://example.com/dash/hls/480/1.mp4`
  
- **Includes (Substring):**
  - Example: youtube
  - URL: `https://m.youtube.com/*`

All previous links will be stored even between browsing sessions, click the Clear Links button to clear all saved links

## Installation

1. Clone or download the repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click the "Load unpacked" button and select the directory where you downloaded or cloned the repository and choose the extension directory.
5. The extension should now appear in your list of installed extensions.
