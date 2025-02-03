# HTTP Request Interceptor

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Chrome Extension](https://img.shields.io/badge/chrome-extension-brightgreen.svg)

## Overview

The **HTTP Request Interceptor** is a Chrome Extension that empowers developers to monitor and log HTTP and XHR requests made by web pages. This tool is essential for debugging, analyzing network activity, and understanding the data flow within your web applications.

## Features

- **Intercept Fetch Requests**: Automatically logs all `fetch` API calls initiated by the web page.
- **Intercept XHR Requests**: Captures and logs all XMLHttpRequest calls, providing detailed information about each request.
- **User-Friendly Interface**: Easily access and control the extension's functionalities directly from the Chrome toolbar.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Meetz016/http-request-interceptor.git
   cd http-request-interceptor
   ```

## Load the Extension in Chrome:

1. Open Chrome and navigate to `chrome://extensions/`.
2. Enable "Developer mode" by toggling the switch in the top right corner.
3. Click on "Load unpacked" and select the directory where you cloned the repository.

## Usage

### Activate the Extension:

- Click on the extension icon in the Chrome toolbar to open the popup interface.

### Monitor Network Requests:

- The extension will automatically start logging `fetch` and `XMLHttpRequest` calls made by the active web page.
- To view the logged requests, open the browser's Developer Console:
  - On Windows/Linux: Press `Ctrl + Shift + J`
  - On Mac: Press `Cmd + Option + J`
- In the console, you'll see detailed logs of each intercepted request, including URLs, methods, headers, and payloads.

## How It Works

Upon activation, the extension injects a script into the active web page that overrides the native `fetch` and `XMLHttpRequest` methods. This allows the extension to log the details of each request without altering their behavior. The process is seamless and does not interfere with the normal functioning of the web page.

## Contributing

We welcome contributions! If you have suggestions for improvements or encounter any issues, please open an issue or submit a pull request. Your feedback helps us enhance the extension for the developer community.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
