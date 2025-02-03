import { Shield } from "lucide-react";

const Popup = () => {
  return (
    <div className="w-[500px] h-[500px] bg-gray-900 text-white p-6 flex flex-col">
      <header className="flex items-center mb-6">
        <Shield className="w-8 h-8 text-blue-400 mr-2" />
        <h1 className="text-2xl font-bold">Simple HTTP Request Interceptor</h1>
      </header>

      <main className="flex-grow">
        <h2 className="text-xl font-semibold mb-4">HTTP Request Interceptor</h2>
        <p className="mb-4">
          RequestGuard is now active and ready to intercept HTTP/XHR requests.
        </p>
        <div className="bg-gray-800 p-4 rounded-md mb-4">
          <h3 className="text-lg font-semibold mb-2">How to use:</h3>
          <ol className="list-decimal list-inside space-y-2">
            <li>Open the website you want to monitor</li>
            <li>Open Chrome DevTools (F12 or Ctrl+Shift+I)</li>
            <li>Go to the Console tab</li>
            <li>Interact with the website</li>
            <li>Watch for intercepted requests in the console</li>
          </ol>
        </div>
        <p className="text-sm text-gray-400">
          Tip: You can use the intercepted data to extract valuable information
          for your projects!
        </p>
      </main>
    </div>
  );
};

export default Popup;
