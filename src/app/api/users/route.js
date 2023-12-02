import { NextResponse } from "next/server";
import { conn } from "@/libs/bd.js";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]/route";


export async function GET() {
    try {
       
        const result = await conn.query('SELECT * FROM users')
        return NextResponse.json(result);

    } catch (error) {
        
        return NextResponse.json({
            message: 'Error al obtener los usuarios'
        },
            {
                status: 500
            });
    }
}

export async function POST(request) {
    try {
        
        const { username, email,weight } = await request.json();

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
        },
            {
                status: 500
            });
    }
}




