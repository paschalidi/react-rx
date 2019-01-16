module.exports = () => {
  const config = {
    type: "react-app",
    babel: {
      stage: 0,
      plugins: []
    },
    webpack: {
      rules: {
        babel: {
          test: /\.(js|jsx)$/
        }
      },
      extra: {
        resolve: {
          extensions: [".js", ".jsx"]
        }
      }
    }
  };

  return config;
};
