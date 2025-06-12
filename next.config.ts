const nextConfig = {
  webpack(config:any) {
    config.module.rules.push({
      test: /\.svg$/,
      //issuer: /\.[jt]sx?$/,
      use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: 'prefixIds',
                    params: {
                      delim: '__',
                      prefixIds: true,
                      prefixClassNames: true,
                    },
                  },
                ],
              },
            },
          },
        ],
    });
    return config;
  },
};

module.exports = nextConfig;