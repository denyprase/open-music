/* eslint-disable camelcase */

exports.shorthands = undefined;
// id, name, owner
exports.up = (pgm) => {
  pgm.createTable('playlistsongs', {
    id: 'id',
    playlist_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      references: '"playlists"',
      onDelete: 'cascade',
    },
    song_id: {
      type: 'VARCHAR(50)',
      notNull: true,
      references: '"songs"',
      onDelete: 'cascade',
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('playlistsongs');
};
