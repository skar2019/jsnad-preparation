
async function mockApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("API call succeeded");
      } else {
        reject(new Error("API call failed"));
      }
    }, 1000); // Simulate 1-second delay
  });
}

async function fetchWithRetry() {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      console.log(`Attempt ${attempt}`);
      const result = await mockApiCall();
      return result;
    } catch (error) {
      console.error(`Attempt ${attempt} failed: ${error.message}`);
      if (attempt === 3) {
        throw new Error("Failed after 3 attempts");
      }
    }
  }
}

// Example usage
(async () => {
  try {
    const result = await fetchWithRetry();
    console.log("Final result:", result);
  } catch (error) {
    console.error("Final error:", error.message);
  }
})();