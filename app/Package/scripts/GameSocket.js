import io from 'socket.io-client';

export default class GameSocket{

  static socket(){
    return io.connect('http://165.227.109.107:3000',  { transports: ['websocket'], upgrade: false });
  }

}
