# HTTP Request Interceptor

## Overview

This is a lightweight JavaScript library that provides a flexible mechanism for intercepting and modifying HTTP requests across various environments, including browser and Node.js applications.

## Features

- Intercept and modify HTTP requests before they are sent
- Support for both browser and Node.js environments
- Easily configurable request interception
- Ability to add, modify, or remove request headers
- Customizable request transformation

## Installation

### npm

```bash
npm install http-request-interceptor
```

### yarn

```bash
yarn add http-request-interceptor
```

## Usage

### Basic Interceptor

```javascript
import { Interceptor } from "http-request-interceptor";

// Create a new interceptor
const interceptor = new Interceptor();

// Add a request interceptor
interceptor.use((config) => {
  // Modify request configuration
  config.headers["Authorization"] = "Bearer your-token";
  return config;
});
```

### Interceptor Configurations

#### Browser Environment

```javascript
// In a browser context
interceptor.interceptXHR(); // Intercept XMLHttpRequest
interceptor.interceptFetch(); // Intercept Fetch API
```

#### Node.js Environment

```javascript
// In a Node.js context
interceptor.interceptAxios(); // Intercept Axios requests
interceptor.interceptNodeFetch(); // Intercept node-fetch
```

## API Reference

### `Interceptor` Class

- `constructor()`: Initialize a new interceptor instance
- `use(callback)`: Add an interceptor function
- `interceptXHR()`: Intercept XMLHttpRequest in browsers
- `interceptFetch()`: Intercept Fetch API in browsers
- `interceptAxios()`: Intercept Axios requests in Node.js
- `interceptNodeFetch()`: Intercept node-fetch in Node.js
- `eject(interceptor)`: Remove a specific interceptor

### Interceptor Callback

The interceptor callback receives a configuration object and can:

- Modify request headers
- Add authentication
- Log request details
- Transform request payload

## Example Scenarios

### Adding Authentication

```javascript
interceptor.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});
```

### Logging Requests

```javascript
interceptor.use((config) => {
  console.log("Request URL:", config.url);
  console.log("Request Method:", config.method);
  return config;
});
```

### Conditionally Modifying Requests

```javascript
interceptor.use((config) => {
  if (config.url.includes("/api/sensitive")) {
    config.headers["X-Special-Header"] = "SecureRequest";
  }
  return config;
});
```

## Error Handling

Interceptors should handle potential errors and return the modified configuration or throw an error if needed.

```javascript
interceptor.use((config) => {
  try {
    // Interceptor logic
    return config;
  } catch (error) {
    console.error("Interception failed", error);
    throw error;
  }
});
```

## Compatibility

- Browser: Chrome, Firefox, Safari, Edge
- Node.js: 12.x and above
- Supports modern HTTP request libraries

## Performance Considerations

- Minimal overhead
- Lightweight implementation
- Low memory footprint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
