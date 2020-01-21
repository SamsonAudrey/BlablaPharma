import { API_URL } from 'react-native-dotenv';

import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';
// import { getToken } from './auth';
const io = sailsIOClient(socketIOClient);
io.sails.autoConnect = false;

export const socket = io.sails.connect(API_URL, {
  reconnection: true,
  transports: ['polling']
});

/**
 * Set the configuration of the request for the Socker
 * @param method : Request method 'GET', 'POST', 'PUT', 'DELETE'
 * @param route : path of the resource
 * @param data : data to send
 */
const configSocket = (method, route, authorization, data = {}) => ({
  method,
  url: route,
  data,
  headers: {
    authorization: `Bearer ${authorization}`
  }
});

export const getRequest = (route, accessToken) => new Promise(((res, rej) => {
  socket.request(configSocket('get', route, accessToken), (resData, jwres) => {
    if (jwres.statusCode >= 400) rej(resData);
    else res(resData);
  });
}));

export const putRequest = (route, data = {}) => new Promise(((res, rej) => {
  socket.request(configSocket('put', route, data), (resData, jwres) => {
    if (jwres.statusCode >= 400) rej(resData);
    else res(resData);
  });
}));

export const postRequest = (route, data = {}) => new Promise(((res, rej) => {
  socket.request(configSocket('post', route, data), (resData, jwres) => {
    if (jwres.statusCode >= 400) rej(resData);
    else res(resData);
  });
}));
