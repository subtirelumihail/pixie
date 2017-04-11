module.exports = process.env.NODE_ENV === 'prod' ?
  require('./api.prod.config.js').default :
  require('./api.dev.config.js').default;
