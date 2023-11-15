import { Configuration, PostsApi } from "./types/typescript-fetch";
import { API_URL } from "./constants";

/**
 * Represents an API client for interacting with the Quiet Internet service.
 */
class QuietInternetApi {
  /** The instance of the PostsApi for making requests. */
  private api: PostsApi;

  /**
   * Initializes a new instance of the QuietInternetApi class.
   * @param apiKey - The authentication token to access the Quiet Internet service.
   */
  constructor(apiKey: string) {
    // Create a new Configuration instance with the base URL and authorization header
    const config = new Configuration({
      basePath: API_URL,
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });

    // Create a new instance of PostsApi with the provided configuration
    this.api = new PostsApi(config);
  }
}

// Export the QuietInternetApi class
export { QuietInternetApi };
