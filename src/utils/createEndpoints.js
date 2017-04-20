import { jwtRequest } from 'lib/request';
import { api } from 'config';

/**
 * Creates CRUD endpoints from a given base URL
 *
 * @param {string} endpointURL
 *
 * @returns {object} the CRUD endpoints
 */
export const createDefaultEnpoints = endpointURL => ({
  list: () => jwtRequest.get(`${endpointURL}`),
  create: data => jwtRequest.post(`${endpointURL}`, { body: data }),
  read: id => jwtRequest.get(`${endpointURL}/${id}`),
  update: (id, data) => jwtRequest.put(`${endpointURL}/${id}/update`, { body: data }),
  delete: id => jwtRequest.delete(`${endpointURL}/${id}/delete`)
});

/**
 * Create a basic CRUD endpoints request object
 *
 * @param {string} endpoint name
 * @param {function} a function in which you can define your own
 * custom endpoints based on the endpointBaseUrl
 *
 * @returns {object} the CRUD endpoints
 *
 * @example
 * const api = createEndpoints('posts');
 *
 * list: GET -> http://example.com/posts
 * create: POST -> http://example.com/posts
 * read: GET -> http://example.com/posts/${id}
 * update: PUT -> http://example.com/posts/${id}/update
 * delete: DELETE -> http://example.com/posts/${id}/delete
 *
 * If we want to create recursive api calls we can do something like this:
 *
 * @example
 * const api = createEndpoints('posts', endpointUrl => ({
 *    commentsForPost: id => createDefaultEnpoints(`${endpointUrl}/${id}/comments`)
 * }));
 *
 * list: GET -> http://example.com/posts/{$id}/comments
 * create: POST -> http://example.com/posts/${id}/comments
 * read: GET -> http://example.com/posts/${id}/comments/${id}
 * update: PUT -> http://example.com/posts/${id}/comments/${id}/update
 * delete: DELETE -> http://example.com/posts/${id}/comments/${id}/delete
 *
 */
export const createEndpoints = (endpoint, createCustomEndpoints) => {
  const endpointBaseURL = `${api.URL}/${endpoint}`;
  const defaultEnpoints = createDefaultEnpoints(endpointBaseURL);
  const customEndpoints = typeof createCustomEndpoints === 'function' ?
    createCustomEndpoints(endpointBaseURL) : {};

  return {
    ...defaultEnpoints,
    ...customEndpoints
  };
};

export default {
  createEndpoints,
  createDefaultEnpoints
};
