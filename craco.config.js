module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Ensure proper module resolution for ESM packages
      webpackConfig.resolve.symlinks = true;
      
      // Add extensions to help resolve ESM modules
      if (!webpackConfig.resolve.extensions) {
        webpackConfig.resolve.extensions = [];
      }
      
      // Ensure .mjs files are resolved
      if (!webpackConfig.resolve.extensions.includes('.mjs')) {
        webpackConfig.resolve.extensions.push('.mjs');
      }
      
      // Suppress source map warnings for node_modules (especially @mediapipe)
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.enforce === 'pre' && rule.use) {
          rule.use.forEach((use) => {
            if (use.loader && use.loader.includes('source-map-loader')) {
              // Configure to ignore missing source maps
              use.options = {
                ...(use.options || {}),
                filterSourceMappingUrl: () => false,
              };
              
              // Add exclude for node_modules
              if (!rule.exclude) {
                rule.exclude = /node_modules/;
              } else if (Array.isArray(rule.exclude)) {
                rule.exclude.push(/node_modules/);
              } else {
                rule.exclude = [rule.exclude, /node_modules/];
              }
            }
          });
        }
      });
      
      // Also suppress warnings in webpack stats
      if (!webpackConfig.ignoreWarnings) {
        webpackConfig.ignoreWarnings = [];
      }
      webpackConfig.ignoreWarnings.push(
        /Failed to parse source map/
      );
      
      return webpackConfig;
    },
  },
};

