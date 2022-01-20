const restModule = getModule(m => m.default?.getAPIBaseURL);

interface RestOptions {
  url: string;
  body?: Record<string, any>;
}

interface RestResponse {
  ok: boolean;
  headers: Record<string, string>;
  body?: string;
  text: string;
  status: number;
}

/**
 * Do a GET request
 */
async function get(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    restModule.default.get(data).then((response: RestResponse) => {
      resolve(response);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Do a POST request
 */
async function post(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    restModule.default.post(data).then((response: RestResponse) => {
      resolve(response);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Do a PUT request
 */
async function put(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    restModule.default.put(data).then((response: RestResponse) => {
      resolve(response);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Do a PATCH request
 */
async function patch(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    restModule.default.patch(data).then((response: RestResponse) => {
      resolve(response);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Do a DELETE request
 */
async function _delete(data: RestOptions | string): Promise<RestResponse> {
  return new Promise((resolve, reject) => {
    restModule.default.delete(data).then((response: RestResponse) => {
      resolve(response);
    }).catch((err: any) => {
      reject(err);
    });
  });
}

/**
 * Get the base URL for the Discord's API
 */
async function getAPIBaseURL() {
  return restModule.default.getAPIBaseURL();
}

export {
  get,
  post,
  put,
  patch,
  _delete as delete,
  getAPIBaseURL
}