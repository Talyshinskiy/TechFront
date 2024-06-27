import {ModuleOptions} from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/types";
import ReactRefreshTypeScript from "react-refresh-typescript";

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
  const isDev = options.mode === "development"

  const assetLoader = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
  }
  const svgrLoader = {
    test: /\.svg$/i,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          icon: true,
          svgoConfig: {
            plugins: [
              {
                name: 'convertColors',
                params: {
                  currentColor: true,
                }
              }
            ]
          }
        }
      }
    ],
  }
  const cssLoaderWithModules = {
    loader: "css-loader",
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
      },
    },
  }
  const scssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      // Translates CSS into CommonJS
      cssLoaderWithModules,
      // Compiles Sass to CSS
      "sass-loader",
    ],
  }
  // const tsLoader = {
  //   exclude: /node_modules/,
  //   test: /\.tsx?$/,
  //   use: [
  //     {
  //       loader: 'ts-loader',
  //       options: {
  //         transpileOnly: true,
  //         getCustomTransformers: () => ({
  //           before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
  //         }),
  //       }
  //     }
  //   ]
  // }

  const babelLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          '@babel/preset-env',
          '@babel/preset-typescript',
          [
            "@babel/preset-react",
            {
              runtime: isDev ? 'automatic' : 'classic',
            }
          ]
        ]
      }
    }
  }

  return [
    assetLoader,
    scssLoader,
    // tsLoader,
    babelLoader,
    svgrLoader
  ]
}