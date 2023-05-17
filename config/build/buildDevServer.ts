import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

import { BuildOption } from './types/config';

export function buildDevServer(options: BuildOption): DevServerConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
