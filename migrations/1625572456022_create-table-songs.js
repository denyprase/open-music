/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable(
    {
      schema: 'openmusic',
      name: 'songs',
    },
    {
      id: {
        type: 'VARCHAR(50)',
        primaryKey: true,
      },
      title: {
        type: 'TEXT',
        notNull: true,
      },
      year: {
        type: 'INTEGER',
        notNull: true,
      },
      performer: {
        type: 'TEXT',
        notNull: true,
      },
      genre: {
        type: 'TEXT',
        notNull: true,
      },
      duration: {
        type: 'INTEGER',
        notNull: true,
      },
      inserted_at: {
        type: 'TIMESTAMP',
        notNull: true,
      },
      updated_at: {
        type: 'TIMESTAMP',
        notNull: true,
      },
    },
  );
};

exports.down = (pgm) => {
  pgm.dropTable({
    schema: 'openmusic',
    name: 'songs',
  });
};