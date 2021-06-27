require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: {
            user: process.env.DB_USER,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: process.env.DB_PORT,
        },
    },
};
