import { mergeDeep } from 'utils/mergeDeep';
import { getToken } from 'lib/auth';

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
  const requestOptions = mergeDeep(
    { method },
    options,
    defaultValues
  );

  const success = options.successCallback ? options.successCallback : successHandler;
  const error = options.errorCallback ? options.errorCallback : errorHandler;

  return fetch(newUrl, requestOptions)
    .then(success)
    .catch(error);
};

const createJwtRequest = (method, url, options = {}) => {
  const token = getToken();
  const newOptions = token ? mergeDeep(options, { headers: { 'Authorization': `Bearer ${token}` } }) : options;

  return createRequest(method, url, newOptions);
};

const generateRequest = requestMaker => ({
  get(url, options) {
    return requestMaker('GET', url, options);
  },

  post(url, options) {
    return requestMaker('POST', url, options);
  },

  put(url, options) {
    return requestMaker('PUT', url, options);
  },

  delete(url, options) {
    return requestMaker('DELETE', url, options);
  }
});

export const jwtRequest = generateRequest(createJwtRequest);
export const request = generateRequest(createRequest);

export default {
  jwtRequest,
  request
};
