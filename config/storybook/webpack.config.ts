import path from 'path';

import webpack, { RuleSetRule } from 'webpack';

import { buildCssLoaders } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: '',
    buildLocales: '',
  };

  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('.ts', '.tsx');
  config.resolve!.alias = {
    ...config.resolve!.alias,
    '@': paths.src,
  };
  config.module?.rules?.push(buildCssLoaders(true));

  const rules = config.module!.rules as RuleSetRule[];
  config.module!.rules = rules.map((rule) => (
    /svg/.test(rule.test as string)
      ? { ...rule, exclude: /\.svg$/i }
      : rule
  ));

  config.module!.rules!.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  });
  config.plugins!.push(
    new webpack.DefinePlugin({
      __IS_DEV: JSON.stringify(false),
      __API: JSON.stringify('https://testapi.ru'),
      __PROJECT: JSON.stringify('storybook'),
    }),
  );

  return config;
};
