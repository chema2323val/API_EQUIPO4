const pool = require('../config/db');

class Task {
    static async findAll() {
        const result = await pool.query('SELECT * FROM task');
        return result.rows;
    }

    static async create(data) {
        const { titulo, materia, fecha, hora } = data;
        const result = await pool.query(
            'INSERT INTO task (titulo, materia, fecha, hora) VALUES ($1, $2, $3, $4) RETURNING *',
            [titulo, materia, fecha, hora]
        );
        return result.rows[0];
    }

    static async findById(id) {
        const result = await pool.query('SELECT * FROM task WHERE id = $1', [id]);
        return result.rows[0];
    }

    static async update(id, data) {
        const { titulo, materia, fecha, hora } = data;
        const result = await pool.query(
            'UPDATE task SET titulo = $1, materia = $2, fecha = $3, hora = $4 WHERE id = $5 RETURNING *',
            [titulo, materia, fecha, hora, id]
        );
        return result.rows[0];
    }

    static async delete(id) {
        const result = await pool.query('DELETE FROM task WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = Task;
