import { io } from 'socket.io-client';

const socket = io(
  import.meta.env.PROD ? 'http://68.183.94.109:8080' : 'http://localhost:8080'
);

export default socket;