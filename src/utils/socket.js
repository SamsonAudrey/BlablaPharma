import { API_URL } from 'react-native-dotenv';
import { store } from '../../store';
import { getToken } from './auth';
const socketIOClient = require('socket.io-client');
const sailsIOClient = require('sails.io.js');


  
  const io = socketIOClient.sails ? (socketIOClient)
    : (sailsIOClient(socketIOClient));
  const token = await getToken();
  io.sails.url = API_URL;
  io.sails.transports = ['polling'];
  io.sails.reconnection = true;
  if (token) {
    io.sails.headers = {
      authorization: `Bearer ${token}`
    };
  } else {
    console.log('y a pbbpbppbpbpbpbpb');
  }

  const { socket } = io;
  export default socket;
