'use strict';

const _ = require('lodash');

module.exports = async (options, configuration) => {
  const stage = options.stage || _.get(configuration, 'provider.stage', 'dev');
  const relativeDotenvPath = configuration.relativeDotenvPath || '';
  if (!configuration.useDotenv) return false;
  require('./load-dotenv')(stage, relativeDotenvPath);
  return true;
};
