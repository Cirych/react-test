const path = require('path');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, '../src'),
    loader: require.resolve('ts-loader')
  });

  defaultConfig.resolve.extensions.push('.ts', '.tsx');

  defaultConfig.resolve.modules = [
    ...(defaultConfig.resolve.modules || []),
    path.resolve('./'),
  ];

  return defaultConfig;
};
