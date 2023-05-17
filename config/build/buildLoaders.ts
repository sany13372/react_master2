import webpack from 'webpack';

import { buildBabelLoader } from './loaders/buildBabelLoader';
import { buildCssLoaders } from './loaders/buildCssLoaders';
import { BuildOption } from './types/config';

export function buildLoaders(options: BuildOption): webpack.RuleSetRule[] {
  const { isDev } = options;

  const cssLoader = buildCssLoaders(isDev);

  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: [
  //     {
  //       loader: require.resolve('ts-loader'),
  //       options: {
  //         getCustomTransformers: () => ({
  //           before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //         }),
  //         // transpileOnly: isDev,
  //       },
  //     },
  //   ],
  //   exclude: /node_modules/,
  // };

  const codeBabelLoader = buildBabelLoader({ ...options, isTsx: false });
  const tsxCodeBabelLoader = buildBabelLoader({ ...options, isTsx: true });

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    svgLoader,
    fileLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // typescriptLoader,
    cssLoader,
  ];
}
