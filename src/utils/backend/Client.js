import axios from 'axios';
import config from '../../global/client_config/config';

class Client {
  _fetch(opts) {
    opts = Object.assign(
      {
        method: 'POST',
        url: null,
        headers: {},
        body: null,
      },
      opts,
    );
  }

}

export default new Client();
