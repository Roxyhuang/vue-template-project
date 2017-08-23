/* eslint-disable */
const productClient = {
  async getMsgList(data) {
    return await this._fetch({ url: 'product/list', body: data });
  },
};
export default productClient;
