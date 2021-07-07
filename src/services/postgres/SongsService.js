/* eslint-disable no-underscore-dangle */
require('dotenv').config();
const { Pool } = require('pg');
const { nanoid } = require('nanoid');

class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async addSong({
    title,
    year,
    performer,
    genre,
    duration,
  }) {
    const id = nanoid(16);
    const insertedAt = new Date().toDateString();
    const updatedAt = insertedAt;
    const query = {
      text: 'INSERT INTO openmusic.songs VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id',
      values: [id, title, year, performer, genre, duration, insertedAt, updatedAt],
    };
    const result = await this._pool.query(query);
    if (!result.rows[0].id) {
      throw new Error('Lagu gagal ditambahkan');
    }
    return result.rows[0].id;
  }

  async getSongs() {
    const query = 'SELECT * FROM openmusic.songs';
    const result = await this._pool.query(query);
    return result.rows;
  }

  async getSongById(id) {
    const query = {
      text: 'SELECT * FROM openmusic.songs WHERE id = $1',
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new Error('Lagu tidak ditemukan');
    }
    return result.rows;
  }

  async editSongById(id, {
    title,
    year,
    performer,
    genre,
    duration,
  }) {
    const updatedAt = new Date().toISOString();
    const query = {
      text: 'UPDATE openmusic.songs SET title = $1, year = $2, performer = $3, genre = $4, duration = $5, updated_at = $6 WHERE id = $7 RETURNING id',
      values: [title, year, performer, genre, duration, updatedAt, id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new Error('Gagal memperbarui lagu. Id tidak ditemukan');
    }
    return result.rows;
  }

  async deleteSongById(id) {
    const query = {
      text: 'DELETE FROM openmusic.songs WHERE id = $1 RETURNING id',
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new Error('Lagu gagal dihapus. Id tidak ditemukan');
    }
  }
}

// const service = new SongsService();
/*
const data = {
  title: 'Kenangan Mantan',
  year: 2021,
  performer: 'Dicoding',
  genre: 'Indie',
  duration: 120,
};
service.addSong(data)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*
service.getSongs()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
  */

/*
service.getSongById('bXGWzYORAQfPWUiX')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*
const data = {
  title: 'Kenangan Mantan edit edit',
  year: 2022,
  performer: 'Dicoding edit edit',
  genre: 'Indie edit edit',
  duration: 300,
};
service.editSongById('bXGWzYORAQfPWUiX', data)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
*/

/*
service.deleteSongById('bXGWzYORAQfPWUiX')
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
*/
module.exports = SongsService;
