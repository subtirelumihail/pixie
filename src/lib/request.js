const defaultValues = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const buildURLWithQueryParams = (url, queryParams) => {
  const encodedQuery = Object.keys(queryParams)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(queryParams[k])}`)
    .join('&');

  return `${url}?${encodedQuery}`;
};

const successHandler = (response) => {
  return response.json();
};

const errorHandler = (error) => {
  return new Error(error);
};

const createRequest = (method, url, options = {}) => {
  const newUrl = options.queryParams ? buildURLWithQueryParams(url, options.queryParams) : url;
  const requestOptions = Object.assign({ method }, options, defaultValues);

  const success = options.successCallback ? options.successCallback : successHandler;
  const error = options.errorCallback ? options.errorCallback : errorHandler;

  return fetch(newUrl, requestOptions)
    .then(success)
    .catch(error);
};

const request = {
  get(url, options) {
    return createRequest('GET', url, options);
  },

  post(url, options) {
    return createRequest('POST', url, options);
  },

  put(url, options) {
    return createRequest('PUT', url, options);
  },

  delete(url, options) {
    return createRequest('DELETE', url, options);
  }
};

export default request;
