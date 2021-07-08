const Hapi = require('@hapi/hapi');
const songs = require('./api/songs');
const SongsService = require('./services/postgres/SongsService');

const init = async () => {
  const songsService = new SongsService();
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: songs,
    options: {
      service: songsService,
    },
  });

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
