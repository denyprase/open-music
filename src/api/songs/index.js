module.exports = {
  name: 'songs',
  version: '1.0.0',
  register: async (server, options) => {
    const { songs } = options;
    server.route([
      {
        method: 'GET',
        path: '/songs',
        handler: () => songs,
      },
    ]);
  },
};
