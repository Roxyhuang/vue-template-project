import _ from 'underscore';

import CONFIG from '../global/client_config';
import Exception from '../utils/Exception';

class Client {

  initialize(token) {
    if (token.sessionToken) {
      throw new Error('TokenMissing');
    }
    if (token) {
      this._sessionToken = null;
    }
    if (token) {
      this._sessionToken = token.sessionToken;
    }
    if (token) {
      this._sessionToken = null;
    }

    this.API_BASE_URL = process.env.NODE_ENV === 'production'
      ? CONFIG.server.production.url
      : CONFIG.server.qa.url;
  }
  /* eslint-disable no-param-reassign */
  async _fetch(opts) {
    opts = _.extend({
      method: 'POST', // By default use post
      url: null,
      body: null,
      callback: null,
    }, opts);

    const reqOpts = {
      method: opts.method,
      headers: {},
    };

    if (this._sessionToken) {
      reqOpts.headers.Authorization = `Bearer ${this._sessionToken}`;
    }

    if (opts.method === 'POST' || opts.method === 'PUT') {
      reqOpts.headers.Accept = 'application/json';
      reqOpts.headers['Content-Type'] = 'application/json';
      reqOpts.headers.APPID = CONFIG.app.id;
      reqOpts.headers.APPVER = CONFIG.app.version;
      reqOpts.headers.VUSER = this._sessionToken;
    }

    if (opts.body) {
      reqOpts.body = JSON.stringify(opts.body);
    }

    const url = this.API_BASE_URL + opts.url;
    const res = {};

    let response;
    try {
      response = await fetch(url, reqOpts);
      res.status = response.status;
      res.code = response.code;
    } catch (error) {
      throw (new Exception(null, error));
    }

    return response.json()
      .then((json) => {
        if (res.status === 200 || res.status === 201) {
          if (json.status_no && json.status_no !== 0) {
            throw (new Exception(json.status_no, json.status_msg, json.data));
          }
          return json.data;
        }
        throw (new Exception(res.code, response._bodyInit));
      });
  }
}


export default new Client();
