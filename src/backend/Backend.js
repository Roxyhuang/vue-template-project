import Client from './Client';
import Client2 from './Client2';
import Client3 from './Client3';

export default class Backend {

  static getInstance(token = null, client = 'webview') {
    let res;
    if (client === 'webview') {
      Client.initialize(token);
      res = Client;
    } else if (client === 'game') {
      Client2.initialize(token);
      res = Client2;
    } else {
      Client3.initialize(token);
      res = Client3;
    }
    return res;
  }
}
