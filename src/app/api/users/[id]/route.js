/**
 * Retrieves a user by ID.
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @returns {Promise<Object>} - The user object.
 */
import { NextResponse } from "next/server";
import { conn } from "@/libs/bd.js";

export async function GET(req, { params }) {
    try {
        // Query the database to retrieve the user by ID
        const result = await conn.query('SELECT * FROM users WHERE id = ?', params.id);
        
        if (result.length === 0) {
            // If user is not found, return a JSON response with a 404 status code
            return NextResponse.json({
                message: 'Usuario no encontrado'
            },
            {
                status: 404
            });
        }

        // Return the user object as a JSON response
        return NextResponse.json(result[0]);
        
    } catch (error) {
        // If an error occurs, return a JSON response with a 500 status code
        return NextResponse.json({
            message: 'Error al obtener el usuario'
        },
        {
            status: 500
        });
    }
}

/**
 * Updates a user by ID.
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @returns {Promise<Object>} - The updated user object.
 */
export async function PUT(req, { params }) {

    try {
        const data = await req.json();
        // Update the user in the database
        const result = await conn.query('UPDATE users SET ? WHERE id = ?', [data, params.id]);

        if (result.affectedRows === 0) {
            // If user is not found, return a JSON response with a 404 status code
            return NextResponse.json({
                message: 'Usuario no encontrado'
            },
            {
                status: 404
            });
        }
        // Retrieve the updated user from the database
        const updatedResult = await conn.query('SELECT * FROM users WHERE id = ?', params.id);

        // Return the updated user object as a JSON response
        return NextResponse.json(updatedResult[0]);

    } catch (error) {
        console.log(error);
        // If an error occurs, return a JSON response with a 500 status code
        return NextResponse.json({
            message: 'Error al actualizar el usuario'
        },
        {
            status: 500
        });
    }
}

/**
 * Deletes a user by ID.
 * @param {Object} req - The request object.
 * @param {Object} params - The route parameters.
 * @returns {Promise<Object>} - A success message.
 */
export async function DELETE(req, { params }) {

    try {
        const id = params.id;
        // Delete the user from the database
        const result = await conn.query('DELETE FROM users WHERE id = ?', id);

        if (result.affectedRows === 0) {
            // If user is not found, return a JSON response with a 404 status code
            return NextResponse.json({
                message: 'Usuario no encontrado'
            },
            {
                status: 404
            });
        }

        // Return a success message as a JSON response
        return NextResponse.json({
            message: 'Usuario eliminado'
        },
        {
            status: 200
        });

    } catch (error) {
        // If an error occurs, return a JSON response with a 500 status code
        return NextResponse.json({
            message: 'Error al eliminar el usuario'
        },
        {
            status: 500
        });
    }
}
