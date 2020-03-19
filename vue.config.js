/* eslint-disable */
const StylelintPlugin = require('stylelint-webpack-plugin');
const CodeframeFormatter = require('stylelint-codeframe-formatter');

module.exports = {
  publicPath: '/',
  chainWebpack: config => {
    config
      .plugin('stylelint')
      .use(StylelintPlugin, [
        {
          failOnError: false,
          files: ['**/*.vue', '**/*.scss'],
          formatter: CodeframeFormatter,
          fix: false
        }
      ])
      .end();

    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
      .tap(options => {
        return {
          plugins: [
            { removeTitle: true },
            { convertColors: { shorthex: false } },
            { removeUselessStrokeAndFill: true },
            {
              removeAttrs: {
                preserveCurrentColor: true,
                attrs: ['fill', 'stroke']
              }
            }
          ]
        };
      });
  },

  pluginOptions: {
    svgSprite: {
      /*
       * The directory containing your SVG files.
       */
      dir: 'src/assets/icons',
      /*
       * The reqex that will be used for the Webpack rule.
       */
      test: /\.(svg)(\?.*)?$/,
      /*
       * @see https://github.com/JetBrains/svg-sprite-loader#configuration
       */
      loaderOptions: {
        extract: true,
        spriteFilename: 'icons/icons.svg'
      },
      /*
       * @see https://github.com/JetBrains/svg-sprite-loader#configuration
       */
      pluginOptions: {
        plainSprite: true
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/base/variables.scss";'
      }
    }
  }
};
