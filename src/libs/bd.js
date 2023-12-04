/**
 * Establishes a connection to the MySQL database.
 * @module bd
 */

import mysql from "serverless-mysql";

/**
 * The MySQL database connection.
 * @type {Object}
 * @property {Function} query - Executes a SQL query on the database.
 * @property {Function} end - Closes the database connection.
 */
export const conn = mysql({
    config: {
        host: process.env.BD_HOST,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD ,
        port: process.env.BD_PORT,
        database: process.env.BD_NAME
    }
})

if (!conn) {
    throw new Error("Failed to establish database connection");
}
