const prod = process.env.NODE_ENV === 'production';

const URL = '/value-driven-templates';

module.exports = {
  'process.env.BACKEND_URL': prod ? URL : '',
  'process.env.ASSET_PREFIX': URL,
};
