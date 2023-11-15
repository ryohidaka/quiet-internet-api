import {
  ApiV1PostsGet200Response,
  Configuration,
  PostsApi,
} from "./types/typescript-fetch";
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

  /**
   * Retrieves posts from the Quiet Internet service.
   * @see https://catnose99.github.io/quiet-internet-api-docs/#tag/posts/paths/~1api~1v1~1posts/get
   *
   * @returns A promise that resolves to the response containing posts.
   */
  getPosts(): Promise<ApiV1PostsGet200Response> {
    // Call the API's get method to retrieve posts
    const postsPromise = this.api.apiV1PostsGet();
    return postsPromise;
  }
}

// Export the QuietInternetApi class
export { QuietInternetApi };
