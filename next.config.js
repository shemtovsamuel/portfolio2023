// next.config.js
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            // Vous pouvez ajouter des options ici, consultez la documentation pour plus d'informations
            // https://react-svgr.com/docs/options/
          },
        },
        "file-loader",
      ],
    });

    return config;
  },
};
