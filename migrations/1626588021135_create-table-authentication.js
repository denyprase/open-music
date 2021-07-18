/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable(
    {
    //   schema: '',
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
    //   schema: '',
      name: 'authentications',
    },
  );
};
