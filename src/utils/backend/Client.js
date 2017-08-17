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
    // if (opts.method === 'POST' || opts.method === 'PUT') {
    //   opts.headers.Accept = 'application/json';
    //   opts.headers['Content-Type'] = 'application/json';
    //   opts.headers.APPID = config.app.id;
    //   opts.headers.APPVER = config.app.version;
    //   opts.headers.VUSER = userToken;
    //   if (userToken === null) {
    //     opts.headers.VUSER = '';
    //   }
      return function* axio(opt) {
        yield axios(
          {
            method: opt.methods,
            url: opt.url,
            data: {
              firstName: 'Fred',
              lastName: 'Flintstone',
            },
          },
        ).then(response => response.data);
      };
    // },
  }

}

export default new Client();
