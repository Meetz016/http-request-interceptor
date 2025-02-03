(function () {
  const originalFetch = window.fetch;

  window.fetch = async (...args) => {
    try {
      const response = await originalFetch(...args);
      const clonedResponse = response.clone();

      clonedResponse.text().then((data) => {
        console.log("Fetch Response Data:", data);
      });
      return response;
    } catch (error) {
      console.error("Fetch Error:", error);
      throw error;
    }
  };
})();
