import { NextResponse } from "next/server";
import { conn } from "@/libs/bd.js";
import { authOptions } from "../../auth/[...nextauth]/route";


export async function GET(req, { params }) {
    try {

        const result = await conn.query('SELECT * FROM users WHERE id = ?', params.id);
        
        if (result.length === 0) return NextResponse.json({
            message: 'Usuario no encontrado'
        },
            {
                status: 404
            });

        return NextResponse.json(result[0]);
        
    } catch (error) {
        
        return NextResponse.json({
            message: 'Error al obtener el usuario'
        },
            {
                status: 500
            });
    }
}

export async function PUT(req, { params }) {

    try {
        const data = await req.json();
        const result = await conn.query('UPDATE users SET ? WHERE id = ?', [data, params.id]);

        if (result.affectedRows === 0) return NextResponse.json({
            message: 'Usuario no encontrado'
        },
            {
                status: 404
            });
        const updatedResult = await conn.query('SELECT * FROM users WHERE id = ?', params.id);

        return NextResponse.json(updatedResult[0]);

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: 'Error al actualizar el usuario'
        },
            {
                status: 500
            });
    }


}

export async function DELETE(req, { params }) {

    try {
        const id = params.id;
        const result = await conn.query('DELETE FROM users WHERE id = ?', id);

        if (result.affectedRows === 0) return NextResponse.json({
            message: 'Usuario no encontrado'
        },
            {
                status: 404
            });

        return NextResponse.json({
            message: 'Usuario eliminado'
        },
            {
                status: 200
            });

    } catch (error) {
        return NextResponse.json({
            message: 'Error al eliminar el usuario'
        },
            {
                status: 500
            });
    }

}
