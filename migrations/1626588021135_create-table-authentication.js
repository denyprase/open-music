/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable(
    {
      name: 'authentications',
    },
    {
      token: {
        type: 'TEXT',
        notNull: true,
      },
    },
  );
};

exports.down = (pgm) => {
  pgm.dropTable(
    {
      name: 'authentications',
    },
  );
};
