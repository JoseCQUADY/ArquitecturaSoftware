import { NextResponse } from "next/server";
import { conn } from "@/libs/bd.js";

/**
 * Retrieves all users from the database.
 * @returns {Promise<NextResponse>} The response containing the JSON data of all users.
 */
export async function GET() {
    try {
        const result = await conn.query('SELECT * FROM users');
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({
            message: 'Error al obtener los usuarios'
        }, {
            status: 500
        });
    }
}

/**
 * Creates a new user in the database.
 * @param {Request} request - The request object containing the user data.
 * @returns {Promise<NextResponse>} The response containing the JSON data of the created user.
 */
export async function POST(request) {
    try {
        const { username, email, weight } = await request.json();
        const result = await conn.query('INSERT INTO users SET ?', {
            username,
            email,
            weight
        });
        return NextResponse.json({
            username,
            email,
            weight,
            id: result.insertId
        });
    } catch (error) {
        return NextResponse.json({
            message: 'Error al crear el usuario'
        }, {
            status: 500
        });
    }
}




