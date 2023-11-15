import { QuietInternetApi } from "../src/index";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Get the API key from environment variables
const apiKey = process.env.QUIET_INTERNET_API_KEY;

// Check if the API key is available
if (!apiKey) {
  throw new Error("API Key not found in the environment variables.");
}

// Test suite for QuietInternetApi
describe("QuietInternetApi", () => {
  // Test case for fetching posts
  it("should fetch posts successfully", async () => {
    // Arrange: Create an instance of QuietInternetApi with the API key
    const quietInternetApi = new QuietInternetApi(apiKey);

    // Act: Call the getPosts method to retrieve posts
    const response = await quietInternetApi.getPosts();
    console.log(response);

    // Assert: Check if the response has the expected structure
    expect(response).toHaveProperty("pagination");
    expect(response).toHaveProperty("posts");

    // Ensure there are no unexpected keys in the response
    expect(Object.keys(response).length).toBe(2);
  });
});
