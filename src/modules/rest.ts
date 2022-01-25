interface RestOptions {
  url: string;
  body?: Record<string, any>;
}

interface RestResponse {
  ok: boolean;
  headers: Record<string, string>;
  body?: string | Record<string, any>;
  text: string;
  status: number;
}

/**
 * Do a GET request
 */
async function get(data: RestOptions | string): Promise<RestResponse> {
  return window.aliucord.rest.get(data);
}

/**
 * Do a POST request
 */
async function post(data: RestOptions | string): Promise<RestResponse> {
  return window.aliucord.rest.post(data);
}

/**
 * Do a PUT request
 */
async function put(data: RestOptions | string): Promise<RestResponse> {
  return window.aliucord.rest.put(data);
}

/**
 * Do a PATCH request
 */
async function patch(data: RestOptions | string): Promise<RestResponse> {
  return window.aliucord.rest.patch(data);
}

/**
 * Do a DELETE request
 */
async function _delete(data: RestOptions | string): Promise<RestResponse> {
  return window.aliucord.rest._delete(data);
}

/**
 * Get the base URL for the Discord's API
 */
async function getAPIBaseURL() {
  return window.aliucord.rest.getAPIBaseURL();
}

export {
  get,
  post,
  put,
  patch,
  _delete as delete,
  getAPIBaseURL
}