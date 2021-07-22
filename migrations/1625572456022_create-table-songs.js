/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable(
    {
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
    name: 'songs',
  });
};
